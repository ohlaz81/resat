import { Menu, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <button>
        <Menu size={32} />
      </button>

      <div className="text-center">
        <h1 className="text-3xl font-bold">
          <span className="text-yellow-600">RESAT</span>.NET
        </h1>

        <p className="text-xs text-gray-500">
          Güncel • Güvenilir • Hızlı
        </p>
      </div>

      <button>
        <Bell size={28} className="text-yellow-600" />
      </button>
    </header>
  );
}