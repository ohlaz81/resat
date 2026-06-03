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
            güncel Reşat Altın, Gram Altın, Çeyrek Altın ve diğer altın
            fiyatlarını anlık olarak takip edebilirsiniz.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-2">
            Sık Arananlar
          </h3>

          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <span>• Reşat Altın Fiyatı</span>
            <span>• Gram Altın Fiyatı</span>
            <span>• Çeyrek Altın Fiyatı</span>
            <span>• Yarım Altın Fiyatı</span>
            <span>• Ata Altını Fiyatı</span>
            <span>• Cumhuriyet Altını Fiyatı</span>
          </div>
        </div>

        <div className="border-t pt-4 text-center">
  <div className="font-bold text-lg">
    Resat.net
  </div>

  <p className="text-yellow-600 text-sm font-medium mt-1">
    Güncel • Güvenilir • Hızlı
  </p>

  <p className="text-gray-500 text-sm mt-2">
    Güncel altın fiyatları, grafikler, fiyat alarmı ve piyasa haberleri.
  </p>

  <p className="text-gray-400 text-xs mt-4">
    © 2025 Resat.net - Tüm hakları saklıdır.
  </p>
</div>

      </div>
    </footer>
  );
}