"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function GoldList() {
  const [data, setData] = useState({
    ceyrek: 0,
    yarim: 0,
    tam: 0,
    ata: 0,
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

  const goldData = [
    {
      name: "Çeyrek Altın",
      buy: (data.ceyrek - 250).toLocaleString("tr-TR"),
      sell: data.ceyrek.toLocaleString("tr-TR"),
    },
    {
      name: "Yarım Altın",
      buy: (data.yarim - 500).toLocaleString("tr-TR"),
      sell: data.yarim.toLocaleString("tr-TR"),
    },
    {
      name: "Tam Altın",
      buy: (data.tam - 1000).toLocaleString("tr-TR"),
      sell: data.tam.toLocaleString("tr-TR"),
    },
    {
      name: "Ata Altını",
      buy: (data.ata - 1000).toLocaleString("tr-TR"),
      sell: data.ata.toLocaleString("tr-TR"),
    },
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">
          Altın Fiyatları
        </h2>

        <button className="text-gray-500 hover:text-black transition">
          Tümünü Gör →
        </button>
      </div>

      <div className="space-y-3">
        {goldData.map((gold) => (
          <div
            key={gold.name}
            className="bg-white rounded-3xl shadow p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-xl">
                🪙
              </div>

              <div>
                <div className="font-bold text-lg">
                  {gold.name}
                </div>

                <div className="text-gray-500">
                  Alış: {gold.buy} ₺
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-bold text-green-600 text-xl">
                  {gold.sell} ₺
                </div>

                <div className="text-green-600 text-sm">
                  ● Canlı
                </div>
              </div>

              <ChevronRight
                size={24}
                className="text-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}