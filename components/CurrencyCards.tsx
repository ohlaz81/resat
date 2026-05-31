"use client";

import { useEffect, useState } from "react";
import { DollarSign, Euro, Coins } from "lucide-react";

export default function CurrencyCards() {
  const [data, setData] = useState({
    dolar: 0,
    euro: 0,
    ons: 0,
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
    <div className="grid grid-cols-3 gap-3 mt-4">
      {/* DOLAR */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-green-500 p-2 rounded-full text-white">
            <DollarSign size={16} />
          </div>

          <div className="text-sm font-semibold">
            DOLAR
          </div>
        </div>

        <div className="text-2xl font-bold">
          {data.dolar.toFixed(2)} ₺
        </div>

        <div className="text-green-600 text-sm mt-1">
          ● Canlı
        </div>
      </div>

      {/* EURO */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-blue-500 p-2 rounded-full text-white">
            <Euro size={16} />
          </div>

          <div className="text-sm font-semibold">
            EURO
          </div>
        </div>

        <div className="text-2xl font-bold">
          {data.euro.toFixed(2)} ₺
        </div>

        <div className="text-green-600 text-sm mt-1">
          ● Canlı
        </div>
      </div>

      {/* ONS */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-yellow-500 p-2 rounded-full text-white">
            <Coins size={16} />
          </div>

          <div className="text-sm font-semibold">
            ONS
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-1">
          XAU/USD
        </div>

        <div className="text-lg font-bold">
          {data.ons.toFixed(2)} $
        </div>

        <div className="text-green-600 text-sm mt-1">
          ● Canlı
        </div>
      </div>
    </div>
  );
}