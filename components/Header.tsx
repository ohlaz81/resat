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
      <div className="hidden md:flex justify-center">
        <div className="flex gap-4 bg-white rounded-2xl shadow-md px-6 py-4">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-yellow-500 text-white font-medium shadow hover:bg-yellow-600 transition"
          >
            🏠 Ana Sayfa
          </a>

          <a
            href="/fiyat-alarmi"
            className="px-6 py-3 rounded-xl hover:bg-yellow-500 hover:text-white transition"
          >
            🔔 Alarm Sistemi
          </a>
        </div>
      </div>
    </header>
  );
}