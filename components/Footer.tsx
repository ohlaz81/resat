import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t pt-8 pb-6">
      <div className="space-y-6">

        <div>
          <h3 className="font-bold text-lg mb-2">
            Reşat Altın Nedir?
          </h3>

          <p className="text-gray-600 text-sm leading-6">
            Reşat Altın, Osmanlı döneminden günümüze ulaşan ve yatırım amacıyla
            tercih edilen değerli altın türlerinden biridir. Resat.net üzerinden
            güncel Reşat Altın, Gram Altın, Çeyrek Altın, Yarım Altın,
            Cumhuriyet Altını ve diğer altın fiyatlarını anlık olarak takip
            edebilirsiniz.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">
            Sık Arananlar
          </h3>

          <div className="grid grid-cols-2 gap-3 text-sm">

            <Link
              href="/resat-altin"
              className="text-gray-600 hover:text-yellow-600 transition"
            >
              • Reşat Altın Fiyatı
            </Link>

            <Link
              href="/gram-altin"
              className="text-gray-600 hover:text-yellow-600 transition"
            >
              • Gram Altın Fiyatı
            </Link>

            <Link
              href="/ceyrek-altin"
              className="text-gray-600 hover:text-yellow-600 transition"
            >
              • Çeyrek Altın Fiyatı
            </Link>

            <Link
              href="/yarim-altin"
              className="text-gray-600 hover:text-yellow-600 transition"
            >
              • Yarım Altın Fiyatı
            </Link>

            <Link
              href="/tam-altin"
              className="text-gray-600 hover:text-yellow-600 transition"
            >
              • Tam Altın Fiyatı
            </Link>

            <Link
              href="/cumhuriyet-altini"
              className="text-gray-600 hover:text-yellow-600 transition"
            >
              • Cumhuriyet Altını Fiyatı
            </Link>

            <Link
              href="/ons-altin"
              className="text-gray-600 hover:text-yellow-600 transition"
            >
              • Ons Altın Fiyatı
            </Link>

          </div>
        </div>

        <div className="border-t pt-4 text-center">
          <div className="font-bold text-lg">
            RESAT.NET
          </div>

          <p className="text-yellow-600 text-sm font-medium mt-1">
            Güncel • Güvenilir • Hızlı
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Güncel altın fiyatları, canlı grafikler, fiyat alarm sistemi ve
            ekonomi haberleri.
          </p>

          <p className="text-gray-400 text-xs mt-4">
            © 2026 RESAT.NET - Tüm hakları saklıdır.
          </p>
        </div>

      </div>
    </footer>
  );
}