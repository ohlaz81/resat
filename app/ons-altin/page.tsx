import { Metadata } from "next";

export const metadata: Metadata = {
title: "Ons Altın Fiyatı Canlı | RESAT.NET",
description:
"Canlı Ons Altın fiyatı, alış satış fiyatları, grafikler ve güncel piyasa verileri.",
};

export default function OnsAltinPage() {
return ( <main className="max-w-5xl mx-auto p-6"> <h1 className="text-4xl font-bold mb-6">
Ons Altın Fiyatı </h1>

```
  <p className="text-lg text-gray-700 mb-4">
    Ons Altın güncel fiyatlarını canlı olarak takip edin.
  </p>

  <div className="bg-white rounded-2xl shadow p-6">
    Buraya Ons Altın bileşeni gelecek.
  </div>

  <section className="mt-8 space-y-4">
    <h2 className="text-2xl font-semibold">
      Ons Altın Nedir?
    </h2>

    <p>
      Ons Altın, uluslararası piyasalarda altının fiyatlandırılmasında kullanılan standart ölçü birimidir. 1 ons yaklaşık 31,10 gram altına eşittir.
    </p>

    <h2 className="text-2xl font-semibold">
      Ons Altın Fiyatı Nasıl Hesaplanır?
    </h2>

    <p>
      Ons Altın fiyatı küresel piyasalardaki arz-talep dengesi, merkez bankalarının politikaları, enflasyon beklentileri ve jeopolitik gelişmelere göre değişiklik gösterir.
    </p>

    <h2 className="text-2xl font-semibold">
      Ons Altın Neden Önemlidir?
    </h2>

    <p>
      Dünya genelinde altın fiyatlarının temel referansı Ons Altın'dır. Gram Altın, Çeyrek Altın ve diğer altın türlerinin fiyatları da ons altın ve döviz kuru üzerinden şekillenir.
    </p>
  </section>
</main>
);
}
