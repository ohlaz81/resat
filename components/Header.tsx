export default function Header() {
  return (
    <header className="py-4">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold leading-none">
          <span className="text-yellow-600">RESAT</span>.NET
        </h1>

        <p className="text-[11px] uppercase tracking-[3px] text-gray-400 mt-1">
          Güncel • Güvenilir • Hızlı
        </p>
      </div>

      {/* Masaüstü Menü */}
      <nav className="hidden md:flex justify-center gap-8 mt-5 text-sm font-medium text-gray-600">
        <a href="/" className="hover:text-yellow-600 transition">
          Ana Sayfa
        </a>

        <a href="/grafikler" className="hover:text-yellow-600 transition">
          Grafikler
        </a>

        <a href="/alarm" className="hover:text-yellow-600 transition">
          Alarm
        </a>

        <a href="/favoriler" className="hover:text-yellow-600 transition">
          Favoriler
        </a>
      </nav>
    </header>
  );
}