"use client";

import { useEffect, useState } from "react";
import { DollarSign, Euro, Coins } from "lucide-react";

export default function CurrencyCards() {
  const [data, setData] = useState({
    dolar: 0,
    euro: 0,
    gumus: 0,
  });

  useEffect(() => {
    const loadPrices = () => {
      fetch("/api/prices")
        .then((res) => res.json())
        .then((json) => setData(json));
    };

    loadPrices();

    const interval = setInterval(loadPrices, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 mt-4">
      {/* USD */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-green-500 p-2 rounded-full text-white">
            <DollarSign size={16} />
          </div>

          <div className="text-xs font-semibold">
            USD
          </div>
        </div>

        <div className="text-xl font-bold">
          {data.dolar.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} ₺
        </div>

        <div className="text-green-600 text-xs mt-1">
          ● Canlı
        </div>
      </div>

      {/* EUR */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-blue-500 p-2 rounded-full text-white">
            <Euro size={16} />
          </div>

          <div className="text-xs font-semibold">
            EUR
          </div>
        </div>

        <div className="text-xl font-bold">
          {data.euro.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} ₺
        </div>

        <div className="text-green-600 text-xs mt-1">
          ● Canlı
        </div>
      </div>

      {/* GÜMÜŞ */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-yellow-500 p-2 rounded-full text-white">
            <Coins size={16} />
          </div>

          <div className="text-xs font-semibold">
            GÜMÜŞ
          </div>
        </div>

        <div className="text-xl font-bold">
          {data.gumus.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} ₺
        </div>

        <div className="text-green-600 text-xs mt-1">
          ● Canlı
        </div>
      </div>
    </div>
  );
}