"use client";
import { useCallback, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { StandloneSearchBox, useJsApiLoader } from "@react-google-maps/api";
import { Libraries } from "@react-google-maps/api";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { create } from "domain";
import { createDecipheriv } from "crypto";
import { ne } from "drizzle-orm";
import { createReport } from "@/utils/db/actions";
import { format } from "path";

const geminiApiKey = process.env.GEMINI_API_KEY as any;
const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;

const libraries: Libraries = ["places"];

export default function Report() {
  const [user, setUser] = useState("") as any;
  const router = useRouter();
  const [reports, setReports] = useState<
    Array<{
      id: number;
      location: string;
      wasteType: string;
      amount: string;
      createdAt: string;
    }>
  >([]);

  const [newReport, setNewReport] = useState({
    location: "",
    type: "",
    amount: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [verifcationStatus, setVerificationStatus] = useState<
    "idle" | "verifiying" | "verified" | "rejected"
  >("idle");

  const [verificationResult, setVerificationResult] = useState<{
    wasteType: string;
    quantity: string;
    confidence: number;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: googleMapsApiKey!,
    libraries,
  });
  const onLoad = useCallback((ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  }, []);

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        setNewReport((prev) => ({
          ...prev,
          location: place.formatted_address || "",
        }));
      }
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReport({ ...newReport, [name]: value });
  };
  handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };

      reader.readAsDataURL(selectedFile);
    }
  };
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  const handleverify = async () => {
    if (!file) return;
    setVerificationStatus("verifiying");
    try {
      const genAI = new GoogleGenerativeAI(geminiApiKey);
      const modal = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const base64Data = await readFileAsBase64(file);
      const imageParts = [
        {
          inlineData: {
            data: base64Data.split(",")[1],
            mimeType: file.type,
          },
        },
      ];
      const prompt = `You are an expert in waste management and recycling. Analyze this image and provide:

        1. The type of waste (e.g., plastic, paper, glass, metal, organic)

        2. An estimate of the quantity or amount (in kg or liters)

        3. Your confidence level in this assessment (as a percentage)


        Respond in JSON format like this:

        {

          "wasteType": "type of waste",

          "quantity": "estimated quantity with unit",

          "confidence": confidence level as a number between 0 and 1

        }`;

      const result = await modal.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();
      try {
        const parsedResult = JSON.parse(text);
        if (
          parsedResult.wasteType &&
          parsedResult.quantity &&
          parsedResult.confidence
        ) {
          setVerificationResult(parsedResult);
          setVerificationStatus("verified");
          setNewReport({
            ...newReport,
            type: parsedResult.wasteType,
            amount: parsedResult.quantity,
          });
        } else {
          console.error("Invalid verification result:", parsedResult);
          setVerificationStatus("rejected");
        }
      } catch (error) {
        console.error("Failed to parse JSON response", error);
        setVerificationStatus("rejected");
      }
    } catch (error) {
      console.error("error verifying waste", error);
      setVerificationStatus("rejected");
    }
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (verifcationStatus !== "verified" || !user) {
      toast.error("Please verify your waste before submitting or login");
      return;
    }
    setIsSubmitting(true);
    try {
      const report = (await createReport(
        user.id,
        newReport.type,
        newReport.location,
        newReport.amount,
        preview || "undefined",
        verificationResult ? JSON.stringify(verificationResult) : "undefined"
      )) as any;
      const formatedReport = {
        id: report.id,
        wasteType: report.wasteType,
        location: report.location,
        amount: report.amount,
        createdAt: report.createdAt.toISOString().split("T")[0],
      };
      setReports([formatedReport, ...reports]);
      setNewReport({
        location: "",
        type: "",
        amount: "",
      });
      setFile(null);
      setPreview(null);
      setVerificationResult(null);
      setVerificationStatus("idle");
      toast.success(
        `Report created successfully! You've earned 10 points for this report`
      );
    } catch (error) {
      console.error("Error submitting report:", error);
      toast.error("failed to submit report . Please try again ");
    } finally {
      setIsSubmitting(false);
    }
  };
}
