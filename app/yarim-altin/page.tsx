import { Metadata } from "next";

export const metadata: Metadata = {
title: "Yarım Altın Fiyatı Canlı | RESAT.NET",
description:
"Canlı Yarım Altın fiyatı, alış satış fiyatları, grafikler ve güncel piyasa verileri.",
};

export default function YarimAltinPage() {
return ( <main className="max-w-5xl mx-auto p-6"> <h1 className="text-4xl font-bold mb-6">
Yarım Altın Fiyatı </h1>

```
  <p className="text-lg text-gray-700 mb-4">
    Yarım Altın güncel fiyatlarını canlı olarak takip edin.
  </p>

  <div className="bg-white rounded-2xl shadow p-6">
    Buraya Yarım Altın bileşeni gelecek.
  </div>

  <section className="mt-8 space-y-4">
    <h2 className="text-2xl font-semibold">
      Yarım Altın Nedir?
    </h2>

    <p>
      Yarım Altın, çeyrek altının iki katı değerinde olan ve yatırım amacıyla sık tercih edilen altın türlerinden biridir.
    </p>

    <h2 className="text-2xl font-semibold">
      Yarım Altın Fiyatı Nasıl Hesaplanır?
    </h2>

    <p>
      Yarım Altın fiyatı gram altın fiyatı, döviz kuru ve piyasa koşullarına göre değişiklik gösterir.
    </p>
  </section>
</main>
);
}
