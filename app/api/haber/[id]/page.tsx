import Link from "next/link";
export default async function HaberDetay({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    "http://localhost:3000/api/news",
    {
      cache: "no-store",
    }
  );

  const news = await response.json();

  const haber = news.find(
    (item: any) => item.id === params.id
  );

  if (!haber) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        Haber bulunamadı.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white rounded-3xl shadow p-8">
        <h1 className="text-4xl font-bold mb-4">
          {haber.title}
        </h1>

        <div className="text-sm text-gray-500 mb-8">
          {haber.source} •{" "}
          {new Date(haber.date).toLocaleDateString("tr-TR")}
        </div>

        <div className="prose max-w-none">
          <p>
            Bu haber RSS kaynağından alınmıştır.
          </p>

          <p>
            Yakında burada yapay zeka destekli
            haber özetleri yayınlanacaktır.
          </p>
        </div>
      </div>
    </div>
  );
}