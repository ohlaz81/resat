"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  BarChart3,
  Bell,
  Settings,
} from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
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

        <Link
          href="/grafikler"
          className={`flex flex-col items-center ${
            pathname === "/grafikler"
              ? "text-yellow-600"
              : "text-gray-500"
          }`}
        >
          <BarChart3 size={22} />
          <span className="text-xs mt-1">
            Grafikler
          </span>
        </Link>

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

        <Link
          href="/ayarlar"
          className={`flex flex-col items-center ${
            pathname === "/ayarlar"
              ? "text-yellow-600"
              : "text-gray-500"
          }`}
        >
          <Settings size={22} />
          <span className="text-xs mt-1">
            Ayarlar
          </span>
        </Link>

      </div>
    </div>
  );
}