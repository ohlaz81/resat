export default function Header() {
  return (
    <header className="py-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          <span className="text-yellow-600">RESAT</span>.NET
        </h1>

        <p className="text-xs uppercase tracking-[4px] text-gray-400 mt-2">
          Güncel • Güvenilir • Hızlı
        </p>
      </div>

      {/* Desktop Menü */}
      <nav className="hidden md:flex justify-center gap-4 mt-8">
        <a
          href="/"
          className="px-6 py-3 rounded-full bg-yellow-500 text-white font-medium shadow-md hover:bg-yellow-600 transition-all"
        >
          🏠 Ana Sayfa
        </a>

        <a
          href="/grafikler"
          className="px-6 py-3 rounded-full bg-white border border-gray-200 font-medium hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all"
        >
          📈 Grafikler
        </a>

        <a
          href="/alarm"
          className="px-6 py-3 rounded-full bg-white border border-gray-200 font-medium hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all"
        >
          🔔 Alarm Sistemi
        </a>

        <a
          href="/favoriler"
          className="px-6 py-3 rounded-full bg-white border border-gray-200 font-medium hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all"
        >
          ⭐ Favoriler
        </a>
      </nav>
    </header>
  );
}