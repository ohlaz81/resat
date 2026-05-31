import { NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";
import nodemailer from "nodemailer";

export async function GET() {
  try {
   const { data: alarms, error } = await supabase
  .from("alarms")
  .select("*")
  .eq("active", true)
  .eq("notified", false);

    if (error) throw error;
    console.log("ALARMS:", alarms);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    for (const alarm of alarms || []) {

  console.log("MAIL GONDERILIYOR:", alarm.email);

  await transporter.sendMail({
    from: `"RESAT.NET" <${process.env.SMTP_USER}>`,
    to: alarm.email,
    subject: `🔔 ${alarm.symbol} Fiyat Alarmınız Tetiklendi - RESAT.NET`,
    html: `
<div style="background:#f5f7fa;padding:40px 20px;font-family:Arial,sans-serif;">
  <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:20px;border:1px solid #ececec;overflow:hidden;">

    <div style="padding:40px 20px;text-align:center;">

      <div style="font-size:54px;font-weight:800;">
        <span style="color:#E79A00;">RESAT</span><span style="color:#111827;">.NET</span>
      </div>

      <div style="margin-top:10px;color:#6b7280;font-size:18px;">
        Güncel • Güvenilir • Hızlı
      </div>

    </div>

    <div style="height:2px;background:#E79A00;"></div>

    <div style="padding:40px;text-align:center;">

      <div style="font-size:60px;">🔔</div>

      <h1 style="font-size:38px;color:#111827;margin:20px 0 10px;">
        FİYAT ALARMINIZ
        <span style="color:#E79A00;">TETİKLENDİ</span>
      </h1>

      <p style="font-size:18px;color:#6b7280;">
        Belirlediğiniz fiyat seviyesine ulaşıldı.
      </p>

      <div style="
        margin-top:30px;
        border:1px solid #ececec;
        border-radius:16px;
        padding:30px;
      ">

        <h2 style="margin:0;color:#111827;">
          ${alarm.symbol}
        </h2>

        <div style="
          margin-top:20px;
          font-size:42px;
          font-weight:800;
          color:#E79A00;
        ">
          ${alarm.target_price} TL
        </div>

      </div>

      <a
  href="https://resat.net/fiyat-alarmi"
  style="
    display:inline-block;
    margin-top:30px;
    background:#E79A00;
    color:white;
    text-decoration:none;
    padding:16px 28px;
    border-radius:10px;
    font-weight:bold;
  "
>
  Yeni Alarm Oluştur
</a>

<br><br>

<a
  href="https://resat.net/alarm-kapat/${alarm.token}"
  style="
    display:inline-block;
    background:#ffffff;
    color:#111827;
    text-decoration:none;
    padding:16px 28px;
    border-radius:10px;
    font-weight:bold;
    border:2px solid #E79A00;
  "
>
  🔕 Alarmı Devre Dışı Bırak
</a>

    </div>

  </div>
</div>
`,
  });

  console.log("MAIL GONDERILDI:", alarm.email);

  const { data, error: updateError } = await supabase
  .from("alarms")
  .update({ notified: true })
  .eq("id", alarm.id)
  .select();

console.log("UPDATE SONUCU:", data);

if (updateError) {
  console.error("UPDATE HATASI:", updateError);
}
}

    return NextResponse.json({
  success: true,
  count: alarms?.length || 0,
  alarms,
});
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}