import { Metadata } from "next";

export const metadata: Metadata = {
title: "Gram Altın Fiyatı Canlı | RESAT.NET",
description:
"Canlı Gram Altın fiyatı, alış satış fiyatları, grafikler ve güncel piyasa verileri.",
};

export default function GramAltinPage() {
return ( <main className="max-w-5xl mx-auto p-6"> <h1 className="text-4xl font-bold mb-6">
Gram Altın Fiyatı </h1>

```
  <p className="text-lg text-gray-700 mb-4">
    Gram Altın güncel fiyatlarını canlı olarak takip edin.
  </p>

  <div className="bg-white rounded-2xl shadow p-6">
    Buraya Gram Altın bileşeni gelecek.
  </div>

  <section className="mt-8 space-y-4">
    <h2 className="text-2xl font-semibold">
      Gram Altın Nedir?
    </h2>

    <p>
      Gram Altın, Türkiye'de en çok tercih edilen yatırım araçlarından biridir.
    </p>

    <h2 className="text-2xl font-semibold">
      Gram Altın Fiyatı Nasıl Hesaplanır?
    </h2>

    <p>
      Gram Altın fiyatı ons altın ve dolar kuruna bağlı olarak değişir.
    </p>
  </section>
</main>
);
}
