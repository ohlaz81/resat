"use client";

import { useEffect, useState } from "react";

export default function GoldCard() {
  const [data, setData] = useState({
    gramAltin: 0,
    alis: 0,
  });

  useEffect(() => {
    fetch("/api/prices")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="bg-white rounded-3xl shadow p-6 mt-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">
          GRAM ALTIN
        </h2>

        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
          24 Ayar
        </span>
      </div>

      <div className="mt-4">
        <div className="text-5xl font-bold">
          {data.gramAltin.toLocaleString("tr-TR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })} ₺
        </div>

        <div className="mt-3 text-green-600 font-semibold">
          Canlı Veri
        </div>

        <div className="mt-8 flex justify-between text-sm text-gray-500">
          <span>Son 24 Saat</span>
          <span>Anlık güncellenir</span>
        </div>

        <div className="h-32 flex items-end gap-1 mt-4">
          {[20, 35, 30, 50, 45, 60, 55, 75, 70, 90, 85, 110].map(
            (height, index) => (
              <div
                key={index}
                className="bg-yellow-500 rounded-t flex-1"
                style={{ height: `${height}px` }}
              />
            )
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-8">
          <div className="border rounded-2xl p-4">
            <div className="text-gray-500 text-sm">
              ALIŞ
            </div>

            <div className="font-bold text-lg">
              {data.alis.toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} ₺
            </div>
          </div>

          <div className="border rounded-2xl p-4">
            <div className="text-gray-500 text-sm">
              SATIŞ
            </div>

            <div className="font-bold text-lg text-green-600">
              {data.gramAltin.toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} ₺
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}