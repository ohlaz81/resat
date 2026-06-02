import Header from "../components/Header";
import GoldCard from "../components/GoldCard";
import CurrencyCards from "../components/CurrencyCards";
import GoldList from "../components/GoldList";
import BottomNav from "../components/BottomNav";
import NewsList from "../components/NewsList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md mx-auto p-4">
        <Header />
        <GoldCard />
        <CurrencyCards />
        <GoldList />
        <BottomNav />
        <NewsList />
      </div>
    </main>
  );
}