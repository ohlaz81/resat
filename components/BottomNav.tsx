"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart3,
  Bell,
} from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 md:hidden">
      <div className="max-w-md mx-auto flex justify-around py-3">

        <Link
          href="/"
          className={`flex flex-col items-center ${
            pathname === "/"
              ? "text-yellow-600"
              : "text-gray-500"
          }`}
        >
          <Home size={22} />
          <span className="text-xs mt-1">
            Ana Sayfa
          </span>
        </Link>

        <div className="flex flex-col items-center text-gray-400 cursor-not-allowed">
          <BarChart3 size={22} />
          <span className="text-xs mt-1">
            Grafikler
          </span>
        </div>

        <Link
          href="/fiyat-alarmi"
          className={`flex flex-col items-center ${
            pathname === "/fiyat-alarmi"
              ? "text-yellow-600"
              : "text-gray-500"
          }`}
        >
          <Bell size={22} />
          <span className="text-xs mt-1">
            Alarm
          </span>
        </Link>

      </div>
    </div>
  );
}