import Header from "../components/Header";
import GoldCard from "../components/GoldCard";
import CurrencyCards from "../components/CurrencyCards";
import GoldList from "../components/GoldList";
import NewsList from "../components/NewsList";
import Footer from "@/components/Footer";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md mx-auto p-4">
        <Header />
        <GoldCard />
        <CurrencyCards />
        <GoldList />
        <NewsList />
       <Footer />
       <BottomNav />
      </div>
    </main>
  );
}