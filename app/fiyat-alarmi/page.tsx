"use client";

import { useState } from "react";
import BottomNav from "../../components/BottomNav";
import { supabase } from "../../lib/supabase";

export default function FiyatAlarmiPage() {
  const [email, setEmail] = useState("");
  const [symbol, setSymbol] = useState("Reşat Altın");
  const [targetPrice, setTargetPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [kvkkAccepted, setKvkkAccepted] = useState(false);

  const createAlarm = async () => {
  if (!kvkkAccepted) {
    setMessage(
      "❌ Devam etmek için KVKK Aydınlatma Metni ve Gizlilik Politikası'nı kabul etmelisiniz."
    );
    return;
  }

  if (!email || !targetPrice) {
    setMessage("❌ Lütfen tüm alanları doldurun.");
    return;
  }

    try {
      setLoading(true);

      const { error } = await supabase
  .from("alarms")
  .insert([
    {
      email,
      symbol,
      target_price: Number(targetPrice),
      token: crypto.randomUUID(),
      active: true,
      notified: false,
    },
  ]);

      if (error) {
  console.log("SUPABASE HATASI:", error);
  throw error;
}

      setMessage("✅ Alarm başarıyla oluşturuldu.");
      setEmail("");
      setTargetPrice("");
    } catch (error: any) {
  console.error(error);

  setMessage(
    error?.message || "❌ Alarm oluşturulamadı."
  );
} finally {
  setLoading(false);
}
  };

  return (
    <main className="min-h-screen bg-gray-100 pb-24">
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-3xl font-bold">
          Fiyat Alarmı
        </h1>

        <p className="text-gray-500 mb-6">
          Belirlediğiniz seviyeye ulaşıldığında size e-posta gönderelim.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-4 mb-5 shadow-sm">
          <div className="font-semibold text-blue-700 mb-2">
            🔔 Nasıl Çalışır?
          </div>

          <p className="text-sm text-gray-600 leading-6">
            Belirlediğiniz fiyat seviyesine ulaşıldığında e-posta adresinize
            otomatik bildirim gönderilir.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow p-5">
          <label className="block text-sm font-medium mb-2">
            Ürün
          </label>

          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full border rounded-2xl p-3 mb-4 outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option>Reşat Altın</option>
            <option>Gram Altın</option>
            <option>Çeyrek Altın</option>
            <option>Yarım Altın</option>
            <option>Tam Altın</option>
            <option>Ata Altın</option>
            <option>Dolar</option>
            <option>Euro</option>
            <option>Ons Altın</option>
          </select>

          <label className="block text-sm font-medium mb-2">
            Hedef Fiyat
          </label>

          <input
            type="number"
            value={targetPrice}
            onChange={(e) => setTargetPrice(e.target.value)}
            placeholder="Örn: 6500 TL"
            className="w-full border rounded-2xl p-3 mb-4 outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label className="block text-sm font-medium mb-2">
            E-posta Adresi
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ornek@mail.com"
            className="w-full border rounded-2xl p-3 mb-5 outline-none focus:ring-2 focus:ring-yellow-400"
          />
<div className="mb-5">
  <label className="flex items-start gap-3 text-sm text-gray-600">
    <input
      type="checkbox"
      checked={kvkkAccepted}
      onChange={(e) => setKvkkAccepted(e.target.checked)}
      className="mt-1"
    />

    <span>
      KVKK Aydınlatma Metni ve Gizlilik Politikası'nı
      okudum ve kabul ediyorum.
    </span>
  </label>
</div>
          <button
            type="button"
            onClick={createAlarm}
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition text-white font-semibold py-3 rounded-2xl shadow"
          >
            {loading ? "Kaydediliyor..." : "Alarm Oluştur"}
          </button>

          {message && (
            <div className="mt-4 text-center font-medium">
              {message}
            </div>
          )}

          <div className="mt-5 pt-4 border-t text-sm text-gray-500 space-y-2">
            <div>✓ Spam gönderilmez</div>

            <div>
              ✓ Alarm tetiklendiğinde yalnızca 1 kez e-posta gönderilir
            </div>

            <div>
              ✓ E-posta adresiniz üçüncü kişilerle paylaşılmaz
            </div>
          </div>
        </div>

        <BottomNav />
      </div>
    </main>
  );
}