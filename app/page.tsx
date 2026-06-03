import Header from "../components/Header";
import GoldCard from "../components/GoldCard";
import CurrencyCards from "../components/CurrencyCards";
import GoldList from "../components/GoldList";
import BottomNav from "../components/BottomNav";
import NewsList from "../components/NewsList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md md:max-w-3xl lg:max-w-6xl mx-auto p-4">
        <Header />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <GoldCard />
          </div>

          <div>
            <CurrencyCards />
          </div>
        </div>

        <GoldList />

        <NewsList />

        <Footer />

        <BottomNav />
      </div>
    </main>
  );
}