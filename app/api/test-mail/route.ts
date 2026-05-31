import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"RESAT.NET" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "Test Maili",
      html: `
        <h2>Mail sistemi çalışıyor 🎉</h2>
        <p>Bu mail RESAT.NET tarafından gönderildi.</p>
      `,
    });

    return NextResponse.json({
      success: true,
      messageId: info.messageId,
    });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}