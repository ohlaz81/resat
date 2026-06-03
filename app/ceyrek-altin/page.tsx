import { Metadata } from "next";

export const metadata: Metadata = {
title: "Çeyrek Altın Fiyatı Canlı | RESAT.NET",
description:
"Canlı Çeyrek Altın fiyatı, alış satış fiyatları, grafikler ve güncel piyasa verileri.",
};

export default function CeyrekAltinPage() {
return ( <main className="max-w-5xl mx-auto p-6"> <h1 className="text-4xl font-bold mb-6">
Çeyrek Altın Fiyatı </h1>

```
  <p className="text-lg text-gray-700 mb-4">
    Çeyrek Altın güncel fiyatlarını canlı olarak takip edin.
  </p>

  <div className="bg-white rounded-2xl shadow p-6">
    Buraya Çeyrek Altın bileşeni gelecek.
  </div>

  <section className="mt-8 space-y-4">
    <h2 className="text-2xl font-semibold">
      Çeyrek Altın Nedir?
    </h2>

    <p>
      Çeyrek Altın Türkiye'de en çok tercih edilen yatırım ve hediye amaçlı altın türlerinden biridir.
    </p>

    <h2 className="text-2xl font-semibold">
      Çeyrek Altın Fiyatı Nasıl Hesaplanır?
    </h2>

    <p>
      Çeyrek Altın fiyatı gram altın fiyatı, dolar kuru ve piyasa koşullarına göre değişiklik gösterir.
    </p>
  </section>
</main>
);
}
