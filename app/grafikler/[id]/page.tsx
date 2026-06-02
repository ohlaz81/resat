"use client";

export default function GrafikDetay() {
  return (
    <div className="max-w-6xl mx-auto p-4 pb-24">

      {/* Başlık */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-2xl shadow">
            🟡
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Gram Altın
            </h1>

            <p className="text-gray-500">
              Canlı Altın Grafiği
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-green-600 font-semibold">
            🟢 Canlı
          </div>

          <div className="text-sm text-gray-500">
            Son Güncelleme: 14:37
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow p-6">

        {/* Fiyat */}
        <div className="mb-6">
          <div className="text-5xl font-bold text-amber-600">
            6.650,76 ₺
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-600 font-semibold text-lg">
              ▲ %0.47
            </span>

            <span className="text-green-600">
              (+31,42 ₺)
            </span>
          </div>
        </div>

        {/* En düşük - En yüksek */}
        <div className="grid grid-cols-2 gap-4 mb-4">

          <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
            <div className="text-gray-500 text-sm">
              Günün En Düşük
            </div>

            <div className="font-bold text-2xl text-red-600">
              6.601 ₺
            </div>
          </div>

          <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
            <div className="text-gray-500 text-sm">
              Günün En Yüksek
            </div>

            <div className="font-bold text-2xl text-green-600">
              6.672 ₺
            </div>
          </div>

        </div>

        {/* Alış - Satış */}
        <div className="grid grid-cols-2 gap-4 mb-6">

          <div className="bg-gray-50 rounded-2xl p-4 border">
            <div className="text-gray-500 text-sm">
              Alış
            </div>

            <div className="font-bold text-xl">
              6.649,50 ₺
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200">
            <div className="text-gray-500 text-sm">
              Satış
            </div>

            <div className="font-bold text-xl text-amber-700">
              6.650,76 ₺
            </div>
          </div>

        </div>

        {/* Periyot */}
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 rounded-xl bg-amber-500 text-white font-medium">
            24 Saat
          </button>

          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
            7 Gün
          </button>

          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
            30 Gün
          </button>

          <button className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200">
            1 Yıl
          </button>
        </div>

        {/* Grafik */}
        <div className="rounded-3xl bg-gradient-to-b from-amber-50 to-white border border-amber-100 p-6">

          <div className="h-80">
            <svg
              viewBox="0 0 600 250"
              className="w-full h-full"
            >
              <polyline
                fill="none"
                stroke="#f59e0b"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="
                  0,180
                  60,170
                  120,160
                  180,165
                  240,140
                  300,130
                  360,120
                  420,110
                  480,95
                  540,80
                  600,70
                "
              />
            </svg>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>24:00</span>
          </div>

          {/* Ürün Geçişleri */}
          <div className="flex gap-2 overflow-x-auto mt-6 pb-2">

            <button className="px-4 py-2 rounded-full bg-amber-500 text-white whitespace-nowrap">
              Gram Altın
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              Çeyrek Altın
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              Yarım Altın
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              Tam Altın
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              Reşat Altın
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              Cumhuriyet
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              Ata Altını
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              22 Ayar
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              14 Ayar
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              Gümüş
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              USD
            </button>

            <button className="px-4 py-2 rounded-full bg-gray-100 whitespace-nowrap">
              EUR
            </button>

          </div>

        </div>

        {/* Performans */}
        <div className="grid grid-cols-3 gap-4 mt-6">

          <div className="bg-green-50 rounded-2xl p-4">
            <div className="text-sm text-gray-500">
              Günlük
            </div>

            <div className="text-green-600 font-bold text-xl">
              +0.55%
            </div>
          </div>

          <div className="bg-amber-50 rounded-2xl p-4">
            <div className="text-sm text-gray-500">
              Haftalık
            </div>

            <div className="text-amber-600 font-bold text-xl">
              +1.87%
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4">
            <div className="text-sm text-gray-500">
              Aylık
            </div>

            <div className="text-blue-600 font-bold text-xl">
              +4.92%
            </div>
          </div>

        </div>

        {/* Ek İstatistikler */}
        <div className="grid grid-cols-2 gap-4 mt-4">

          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-sm text-gray-500">
              Açılış
            </div>

            <div className="font-bold text-lg">
              6.620 ₺
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-sm text-gray-500">
              Kapanış
            </div>

            <div className="font-bold text-lg">
              6.650 ₺
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-sm text-gray-500">
              Hacim
            </div>

            <div className="font-bold text-lg text-green-600">
              Yüksek
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-sm text-gray-500">
              Trend
            </div>

            <div className="font-bold text-lg text-green-600">
              Yükseliş
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}