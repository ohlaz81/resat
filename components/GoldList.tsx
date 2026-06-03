"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function GoldList() {
  const [data, setData] = useState({
  resat: 0,
  resatDegisim: 0,

  ayar22: 0,
  ayar22Degisim: 0,

  gramAltin: 0,
  gramDegisim: 0,

  ceyrek: 0,
  ceyrekDegisim: 0,

  yarim: 0,
  yarimDegisim: 0,

  cumhuriyet: 0,
  cumhuriyetDegisim: 0,

  ata: 0,
  ataDegisim: 0,

  tam: 0,
  tamDegisim: 0,

  ayar14: 0,
  ayar14Degisim: 0,

  gumus: 0,
  gumusDegisim: 0,
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
  icon: "gold",
  name: "Gram Altın (24 Ayar)",
  buy: (data.gramAltin - 20).toLocaleString("tr-TR"),
  sell: data.gramAltin.toLocaleString("tr-TR"),
  trend: data.gramDegisim >= 0 ? "up" : "down",
  degisim: Math.abs(data.gramDegisim).toFixed(2),
},
  {
    icon: "gold",
    name: "22 Ayar",
    buy: (data.ayar22 - 50).toLocaleString("tr-TR"),
    sell: data.ayar22.toLocaleString("tr-TR"),
    trend: data.ayar22Degisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.ayar22Degisim).toFixed(2),
  },
  {
    icon: "gold",
    name: "Çeyrek Altın",
    buy: (data.ceyrek - 250).toLocaleString("tr-TR"),
    sell: data.ceyrek.toLocaleString("tr-TR"),
    trend: data.ceyrekDegisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.ceyrekDegisim).toFixed(2),
  },
  {
    icon: "gold",
    name: "Yarım Altın",
    buy: (data.yarim - 500).toLocaleString("tr-TR"),
    sell: data.yarim.toLocaleString("tr-TR"),
    trend: data.yarimDegisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.yarimDegisim).toFixed(2),
  },
  {
    icon: "gold",
    name: "Cumhuriyet Altını",
    buy: (data.cumhuriyet - 1000).toLocaleString("tr-TR"),
    sell: data.cumhuriyet.toLocaleString("tr-TR"),
    trend: data.cumhuriyetDegisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.cumhuriyetDegisim).toFixed(2),
  },
  {
    icon: "gold",
    name: "Ata Altını",
    buy: (data.ata - 1000).toLocaleString("tr-TR"),
    sell: data.ata.toLocaleString("tr-TR"),
    trend: data.ataDegisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.ataDegisim).toFixed(2),
  },
  {
    icon: "gold",
    name: "Tam Altın",
    buy: (data.tam - 1000).toLocaleString("tr-TR"),
    sell: data.tam.toLocaleString("tr-TR"),
    trend: data.tamDegisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.tamDegisim).toFixed(2),
  },
  {
    icon: "gold",
    name: "14 Ayar",
    buy: (data.ayar14 - 20).toLocaleString("tr-TR"),
    sell: data.ayar14.toLocaleString("tr-TR"),
    trend: data.ayar14Degisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.ayar14Degisim).toFixed(2),
  },
  {
  icon: "gold",
  name: "Reşat Altın",
  buy: (data.resat - 1000).toLocaleString("tr-TR"),
  sell: data.resat.toLocaleString("tr-TR"),
  trend: data.resatDegisim >= 0 ? "up" : "down",
  degisim: Math.abs(data.resatDegisim).toFixed(2),
},
  {
    icon: "silver",
    name: "Gümüş Gram",
    buy: (data.gumus - 1).toLocaleString("tr-TR"),
    sell: data.gumus.toLocaleString("tr-TR"),
    trend: data.gumusDegisim >= 0 ? "up" : "down",
    degisim: Math.abs(data.gumusDegisim).toFixed(2),
  },
];

  return (
    <div className="mt-8">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">
          Altın ve Değerli Metaller
        </h2>
      </div>

      <div className="space-y-3">
        {goldData.map((gold) => (
          <div
            key={gold.name}
            className="bg-gradient-to-r from-white to-amber-50 rounded-3xl shadow p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div
  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${
    gold.icon === "silver"
      ? "bg-gradient-to-br from-slate-100 to-slate-300"
      : "bg-gradient-to-br from-amber-100 to-amber-300"
  }`}
>
  <div
    className={`w-5 h-5 rounded-full shadow-sm ${
      gold.icon === "silver"
        ? "bg-slate-500"
        : "bg-amber-500"
    }`}
  />
</div>

              <div>
                <div className="font-bold text-lg">
                  {gold.name}
                </div>

                <div className="text-gray-500 text-sm">
                  Alış: {gold.buy} ₺
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
  <div
  className={`px-4 py-2 rounded-xl border text-center min-w-[130px] ${
    gold.trend === "up"
      ? "bg-green-100 border-green-200"
  : "bg-red-50 border-red-200"
  }`}
>
  <div
    className={`font-bold text-xl ${
  gold.trend === "up"
    ? "text-green-700"
    : "text-red-700"
}`}
  >
    {gold.sell} ₺
  </div>

  <div
  className={`text-sm font-semibold ${
    gold.trend === "up"
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {gold.degisim
    ? `${gold.trend === "up" ? "▲" : "▼"} %${gold.degisim}`
    : `${gold.trend === "up" ? "▲ Yükseliş" : "▼ Düşüş"}`}
</div>
</div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}