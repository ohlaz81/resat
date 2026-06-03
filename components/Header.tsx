export default function Header() {
  return (
    <header className="py-6">
      {/* Logo */}
      <div className="text-center mb-6">
        <h1 className="text-5xl font-bold">
          <span className="text-yellow-600">RESAT</span>.NET
        </h1>

        <p className="text-xs uppercase tracking-[6px] text-gray-400 mt-2">
          Güncel • Güvenilir • Hızlı
        </p>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center bg-white rounded-2xl shadow-md px-6 py-4 max-w-7xl mx-auto">
        <div className="flex gap-3">
          <a
            href="/"
            className="px-5 py-3 rounded-xl bg-yellow-500 text-white font-medium shadow"
          >
            🏠 Ana Sayfa
          </a>

          <a
            href="/grafikler"
            className="px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-white transition"
          >
            📈 Grafikler
          </a>

          <a
            href="/alarm"
            className="px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-white transition"
          >
            🔔 Alarm Sistemi
          </a>

          <a
            href="/favoriler"
            className="px-5 py-3 rounded-xl hover:bg-yellow-500 hover:text-white transition"
          >
            ⭐ Favoriler
          </a>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Ara..."
            className="px-4 py-2 border rounded-xl w-64"
          />

          <button className="px-4 py-2 border rounded-xl hover:bg-gray-100">
            Giriş Yap
          </button>
        </div>
      </div>
    </header>
  );
}