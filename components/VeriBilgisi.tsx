"use client";

export default function VeriBilgisi() {
  const now = new Date();

  const tarih = now.toLocaleDateString("tr-TR");

  const saat = now.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
   <div className="mt-4 bg-white rounded-3xl shadow p-4">

      <div className="flex items-center gap-2">
        <span className="text-lg">ℹ️</span>

        <h3 className="font-bold text-lg">
          Veri Bilgisi
        </h3>
      </div>

      <div className="mt-3">
        <div className="text-sm text-gray-500">
          Son Güncelleme
        </div>

        <div className="font-semibold text-gray-800 mt-1">
          {tarih} • {saat}
        </div>
      </div>

      <div className="mt-3 text-green-600 font-medium text-sm">
        ● Canlı veri akışı aktif
      </div>

    </div>
  );
}