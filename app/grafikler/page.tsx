"use client";

import Link from "next/link";

export default function GrafiklerPage() {
  const cards = [
    {
      name: "Gram Altın",
      price: "6.650 ₺",
      change: "+0.47%",
    },
    {
      name: "Çeyrek Altın",
      price: "10.950 ₺",
      change: "+0.46%",
    },
    {
      name: "Yarım Altın",
      price: "21.913 ₺",
      change: "+0.46%",
    },
    {
      name: "Cumhuriyet Altını",
      price: "44.733 ₺",
      change: "-0.21%",
    },
    {
      name: "Reşat Altın",
      price: "45.162 ₺",
      change: "+0.55%",
    },
    {
      name: "Dolar",
      price: "45.93 ₺",
      change: "+0.12%",
    },
    {
      name: "Euro",
      price: "53.57 ₺",
      change: "-0.08%",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">
        Grafikler
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((item) => (
          <Link
            key={item.name}
            href={`/grafikler/${encodeURIComponent(
              item.name.toLowerCase()
            )}`}
            className="bg-white rounded-3xl p-5 shadow hover:shadow-xl transition"
          >
            <div className="font-bold text-xl">
              {item.name}
            </div>

            <div className="text-3xl font-bold mt-3">
              {item.price}
            </div>

            <div
              className={`mt-2 font-semibold ${
                item.change.includes("-")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {item.change}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}