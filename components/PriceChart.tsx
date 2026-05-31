"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function PriceChart() {
  const [active, setActive] = useState("Gram");

  const chartData = {
    Gram: {
      price: "6.793,65 ₺",
      change: "+1.24%",
      high: "6.815 ₺",
      low: "6.676 ₺",
      data: [
        { value: 6100 },
        { value: 6250 },
        { value: 6180 },
        { value: 6400 },
        { value: 6350 },
        { value: 6550 },
        { value: 6480 },
        { value: 6700 },
        { value: 6620 },
        { value: 6793 },
      ],
    },

    Dolar: {
      price: "46,05 ₺",
      change: "+0.15%",
      high: "46,20 ₺",
      low: "45,80 ₺",
      data: [
        { value: 39 },
        { value: 40 },
        { value: 40.5 },
        { value: 41 },
        { value: 42 },
        { value: 43 },
        { value: 44 },
        { value: 45 },
        { value: 45.5 },
        { value: 46 },
      ],
    },

    Euro: {
      price: "53,65 ₺",
      change: "+0.20%",
      high: "53,90 ₺",
      low: "53,10 ₺",
      data: [
        { value: 46 },
        { value: 47 },
        { value: 48 },
        { value: 49 },
        { value: 50 },
        { value: 51 },
        { value: 52 },
        { value: 53 },
        { value: 53.3 },
        { value: 53.65 },
      ],
    },

    Ons: {
      price: "4540,63 $",
      change: "-0.09%",
      high: "4560 $",
      low: "4480 $",
      data: [
        { value: 4200 },
        { value: 4250 },
        { value: 4300 },
        { value: 4280 },
        { value: 4350 },
        { value: 4400 },
        { value: 4450 },
        { value: 4500 },
        { value: 4520 },
        { value: 4540 },
      ],
    },
  };

  const current =
    chartData[active as keyof typeof chartData];

  return (
    <div className="space-y-4">

      <div className="bg-white rounded-3xl p-2 shadow flex">
        {["Gram", "Dolar", "Euro", "Ons"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`flex-1 py-3 rounded-2xl font-semibold transition ${
              active === item
                ? "bg-yellow-500 text-white"
                : "text-gray-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow p-5">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-500">
              {active}
            </h2>

            <div className="text-4xl font-bold mt-1">
              {current.price}
            </div>

            <div
              className={`mt-2 font-semibold ${
                current.change.includes("-")
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {current.change}
            </div>
          </div>
        </div>

        <div className="h-28 mt-4">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={current.data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#eab308"
                strokeWidth={4}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">

        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="text-gray-500 text-sm">
            Günlük
          </div>

          <div
            className={`font-bold ${
              current.change.includes("-")
                ? "text-red-500"
                : "text-green-600"
            }`}
          >
            {current.change}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="text-gray-500 text-sm">
            En Yüksek
          </div>

          <div className="font-bold">
            {current.high}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <div className="text-gray-500 text-sm">
            En Düşük
          </div>

          <div className="font-bold">
            {current.low}
          </div>
        </div>

      </div>
    </div>
  );
}