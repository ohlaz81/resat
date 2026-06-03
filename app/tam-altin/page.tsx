import { Metadata } from "next";

export const metadata: Metadata = {
title: "Tam Altın Fiyatı Canlı | RESAT.NET",
description:
"Canlı Tam Altın fiyatı, alış satış fiyatları, grafikler ve güncel piyasa verileri.",
};

export default function TamAltinPage() {
return ( <main className="max-w-5xl mx-auto p-6"> <h1 className="text-4xl font-bold mb-6">
Tam Altın Fiyatı </h1>

```
  <p className="text-lg text-gray-700 mb-4">
    Tam Altın güncel fiyatlarını canlı olarak takip edin.
  </p>

  <div className="bg-white rounded-2xl shadow p-6">
    Buraya Tam Altın bileşeni gelecek.
  </div>

  <section className="mt-8 space-y-4">
    <h2 className="text-2xl font-semibold">
      Tam Altın Nedir?
    </h2>

    <p>
      Tam Altın, yatırım amaçlı kullanılan ve yüksek altın içeriğine sahip değerli altın türlerinden biridir.
    </p>

    <h2 className="text-2xl font-semibold">
      Tam Altın Fiyatı Nasıl Hesaplanır?
    </h2>

    <p>
      Tam Altın fiyatı gram altın fiyatı, ons altın değeri ve piyasa koşullarına göre belirlenir.
    </p>
  </section>
</main>
);
}
