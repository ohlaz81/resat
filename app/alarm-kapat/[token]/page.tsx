import { supabaseAdmin } from "@/lib/supabase-admin";

export default async function AlarmKapat({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  await supabaseAdmin
    .from("alarms")
    .update({
      active: false,
    })
    .eq("token", token);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-lg">

        <div className="text-6xl mb-4">
          🔕
        </div>

        <h1 className="text-3xl font-bold mb-3">
          Alarm Devre Dışı Bırakıldı
        </h1>

        <p className="text-gray-600 mb-6">
          Fiyat alarmınız başarıyla kapatıldı.
        </p>

        <a
          href="https://resat.net/fiyat-alarmi"
          className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Yeni Alarm Oluştur
        </a>

      </div>
    </main>
  );
}