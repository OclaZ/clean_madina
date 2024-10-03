import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { MapPin, Trash, Coins, Medal, Settings, Home } from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";

const SidebarItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/reports", label: "Report Waste", icon: MapPin },
  { href: "/collect", label: "Collect Waste", icon: Trash },
  { href: "/rewards", label: "Rewards", icon: Coins },
  { href: "/leaderboard", label: "Leaderboard", icon: Medal },
];
interface SidebarProps {
  open: boolean;
}

export default function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={`bg-white border-r pt-20 border-gray-200 text-gray-800 w-64 fixed inset-y-0 left-0 z-30 
        transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }lg:translate-x-0`}
    >
      <nav className="w-full flex flex-col justify-between">
        <div className="px-4 py-6 space-x-8">
          {SidebarItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={`w-full justify-start py-3 ${
                  pathname === item.href
                    ? "bg-green-100 text-gray-800  "
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-base">{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200"></div>
      </nav>
    </aside>
  );
}
