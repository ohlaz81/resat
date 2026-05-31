import BottomNav from "../../components/BottomNav";
import PriceChart from "../../components/PriceChart";
import PiyasaOzeti from "../../components/PiyasaOzeti";
import VeriBilgisi from "../../components/VeriBilgisi";

export default function GrafiklerPage() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md mx-auto p-4">

        <h1 className="text-3xl font-bold">
          Grafikler
        </h1>

        <p className="text-gray-500 mb-6">
          Canlı piyasa verileri ve fiyat hareketleri
        </p>

        <PriceChart />

        <PiyasaOzeti />

        <VeriBilgisi />

        <BottomNav />

      </div>
    </main>
  );
}