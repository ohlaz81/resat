"use client";

import { useEffect, useState } from "react";

export default function PiyasaOzeti() {
  const [data, setData] = useState({
    gramAltin: 0,
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
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">
        📊 Piyasa Özeti
      </h2>

      <div className="grid grid-cols-2 gap-3">

        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="text-gray-500 text-sm">
            🥇 Gram Altın
          </div>

          <div className="font-bold text-lg mt-1">
            {data.gramAltin.toLocaleString("tr-TR")} ₺
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="text-gray-500 text-sm">
            💵 Dolar
          </div>

          <div className="font-bold text-lg mt-1">
            {data.dolar.toFixed(2)} ₺
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="text-gray-500 text-sm">
            💶 Euro
          </div>

          <div className="font-bold text-lg mt-1">
            {data.euro.toFixed(2)} ₺
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="text-gray-500 text-sm">
            🪙 Ons Altın
          </div>

          <div className="font-bold text-lg mt-1">
            {data.ons.toFixed(2)} $
          </div>
        </div>

      </div>
    </div>
  );
}