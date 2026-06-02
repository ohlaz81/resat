"use client";

import { useEffect, useState } from "react";
import { Newspaper } from "lucide-react";

export default function NewsList() {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch(console.error);
  }, []);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold">
            Güncel Altın Haberleri
          </h2>

          <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-semibold">
            Canlı
          </span>
        </div>

        <button className="text-sm text-gray-500 font-medium hover:text-amber-600 transition">
          Tümü →
        </button>
      </div>

      <div className="space-y-3">
        {news.length === 0 ? (
          <div className="bg-white rounded-3xl p-5 shadow text-center text-gray-500">
            Haberler yükleniyor...
          </div>
        ) : (
          news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow border-l-4 border-amber-500 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex gap-3">
                <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Newspaper
                    size={18}
                    className="text-amber-600"
                  />
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-base leading-6">
                    {item.title}
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <span>Ekonomim</span>

                    <span>•</span>

                    <span>
                      {new Date(item.date).toLocaleDateString("tr-TR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}