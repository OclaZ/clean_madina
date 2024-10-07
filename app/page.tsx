"use client";
import { Button } from "@/components/ui/button";
import {
  Coins,
  CornerDownRight,
  Leaf,
  MapPin,
  Recycle,
  TreePine,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function AnimatedLogo() {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
      <div className="absolute inset-2 rounded-full bg-green-400 opacity-40 animate-ping"></div>
      <div className="absolute inset-4 rounded-full bg-green-300 opacity-60 animate-spin"></div>
      <div className="absolute inset-6 rounded-full bg-green-200 opacity-80 animate-bounce"></div>
      <Image
        src="/icon-logo.svg"
        alt="icon-logo"
        width={64}
        height={64}
        className="absolute inset-0 m-auto  animate-pulse"
        priority
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-20">
        <AnimatedLogo />
        <h1 className="text-6xl font-bold mb-2  text-gray-800 tracking-tight">
          <svg
            width="340"
            height="120"
            viewBox="0 0 126 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mr-3 mb-3"
          >
            <path
              d="M12.6 10.92L15 12.64C13.62 14.82 11.22 16.26 8.46 16.26C4.2 16.26 0.8 12.82 0.8 8.56C0.8 4.3 4.2 0.84 8.44 0.84C11.16 0.84 13.56 2.28 14.88 4.46L12.46 6.18C11.44 4.58 9.94 3.8 8.46 3.8C5.96 3.8 3.98 5.92 3.98 8.56C3.98 11.18 5.96 13.3 8.46 13.3C10 13.3 11.52 12.52 12.6 10.92ZM16.4297 1.1H19.2697V16H16.4297V1.1ZM28.5134 12.38L30.7734 14.12C29.9134 15.4 28.1334 16.22 26.3334 16.22C23.2934 16.22 20.8534 13.84 20.8534 10.96C20.8534 8.04 23.1934 5.68 26.0934 5.68C28.5934 5.68 30.5134 7.36 31.1334 9.24L25.4934 13.28C25.7534 13.38 26.0334 13.4 26.3334 13.4C27.1934 13.4 28.0534 13.1 28.5134 12.38ZM23.7334 10.96C23.7334 11.2 23.7534 11.42 23.8134 11.62L27.4934 9C27.0934 8.7 26.6334 8.52 26.0934 8.52C24.7934 8.52 23.7334 9.54 23.7334 10.96ZM39.5625 5.9H42.4025V16H39.5625V15.28C39.1225 15.86 38.0225 16.22 37.1025 16.22C34.3425 16.22 32.1425 13.84 32.1425 10.96C32.1425 8.04 34.4025 5.68 37.1025 5.68C38.0025 5.68 39.1225 6.12 39.5625 6.6V5.9ZM37.3825 13.4C38.7025 13.4 39.6825 12.4 39.6825 10.96C39.6825 9.54 38.7025 8.52 37.3825 8.52C36.0825 8.52 35.0225 9.54 35.0225 10.96C35.0225 12.4 36.0825 13.4 37.3825 13.4ZM54.5784 10.96V16H51.7584V10.96C51.7584 9.34 50.8184 8.52 49.6584 8.52C48.3984 8.52 47.2384 9.34 47.2384 10.96V16H44.3984V5.9H47.2384V6.6C47.7984 5.96 48.9784 5.68 49.8984 5.68C52.6584 5.68 54.5784 8.04 54.5784 10.96ZM64.7897 6.86L72.7297 0.84V16H69.6297V7.02L64.7897 10.52L59.9497 7.02V16H56.8497V0.84L64.7897 6.86ZM82.1406 5.9H84.9806V16H82.1406V15.28C81.7006 15.86 80.6006 16.22 79.6806 16.22C76.9206 16.22 74.7206 13.84 74.7206 10.96C74.7206 8.04 76.9806 5.68 79.6806 5.68C80.5806 5.68 81.7006 6.12 82.1406 6.6V5.9ZM79.9606 13.4C81.2806 13.4 82.2606 12.4 82.2606 10.96C82.2606 9.54 81.2806 8.52 79.9606 8.52C78.6606 8.52 77.6006 9.54 77.6006 10.96C77.6006 12.4 78.6606 13.4 79.9606 13.4ZM93.9766 1.1H96.8166V16H93.9766V15.28C93.5366 15.86 92.4366 16.22 91.5166 16.22C88.7566 16.22 86.5566 13.84 86.5566 10.96C86.5566 8.04 88.8166 5.68 91.5166 5.68C92.4166 5.68 93.5366 6.12 93.9766 6.6V1.1ZM91.7966 13.4C93.1166 13.4 94.0966 12.4 94.0966 10.96C94.0966 9.54 93.1166 8.52 91.7966 8.52C90.4966 8.52 89.4366 9.54 89.4366 10.96C89.4366 12.4 90.4966 13.4 91.7966 13.4ZM100.213 4.12C99.3325 4.12 98.5725 3.38 98.5725 2.5C98.5725 1.7 99.3325 0.94 100.213 0.94C101.173 0.94 101.913 1.68 101.913 2.5C101.913 3.38 101.173 4.12 100.213 4.12ZM101.653 5.9V16H98.8125V5.9H101.653ZM113.836 10.96V16H111.016V10.96C111.016 9.34 110.076 8.52 108.916 8.52C107.656 8.52 106.496 9.34 106.496 10.96V16H103.656V5.9H106.496V6.6C107.056 5.96 108.236 5.68 109.156 5.68C111.916 5.68 113.836 8.04 113.836 10.96ZM122.688 5.9H125.528V16H122.688V15.28C122.248 15.86 121.148 16.22 120.228 16.22C117.468 16.22 115.268 13.84 115.268 10.96C115.268 8.04 117.528 5.68 120.228 5.68C121.128 5.68 122.248 6.12 122.688 6.6V5.9ZM120.508 13.4C121.828 13.4 122.808 12.4 122.808 10.96C122.808 9.54 121.828 8.52 120.508 8.52C119.208 8.52 118.148 9.54 118.148 10.96C118.148 12.4 119.208 13.4 120.508 13.4Z"
              fill="#424242"
            />
          </svg>
          <span className="text-green-600">Environmental Services</span>
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed mb-8 mt-2">
          Efficiently manage waste collection and environmental services across
          Moroccan cities.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white text-lg py-6 px-10 rounded-full">
          Get Started
          <CornerDownRight className="ml-2" size={24} />
        </Button>
      </section>
      <section className="grid md:grid-cols-3 gap-10 mb-20">
        <FeatureCard
          icon={Leaf}
          title="Eco-Friendly Practices"
          description="Help create a cleaner environment by actively participating in waste reporting and collection."
        />
        <FeatureCard
          icon={Coins}
          title="Earn Rewards"
          description="Receive tokens for your contributions to improving waste management through Environmental Services."
        />
        <FeatureCard
          icon={Users}
          title="Community Engagement"
          description="Join a thriving community dedicated to promoting sustainable waste management practices."
        />
      </section>
      <section className="bg-white p-10 rounded-3xl sahdow-lg mb-20">
        <h2 className="text-4xl text-gray-800 font-bold mb-12 text-center">
          Our Effectiveness
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <ImpactsCard icon={Recycle} title="Waste collected" value={"10kg"} />
          <ImpactsCard icon={MapPin} title="Repport submitted" value={30} />
          <ImpactsCard icon={Coins} title="Tokens earned" value={200} />
          <ImpactsCard icon={TreePine} title="CO2 offset" value={"50kg"} />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  icon: Icon,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300
    ease-in-out flex flex-col items-center text-center "
    >
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <Icon className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ImpactsCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string | number;
  icon: React.ElementType;
}) {
  return (
    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100 transition-all duration-300 ease-in-out hover:shadow-md">
      <Icon className="w-10 h-10 text-green-500 mb-4" />
      <p className="text-3xl font-bold mb-2 text-gray-800">{value}</p>
      <p className="text-gray-600 text-sm">{title}</p>{" "}
    </div>
  );
}
