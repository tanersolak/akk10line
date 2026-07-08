import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Ad, e-posta ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // change after verifying your domain
      to: "taner2164@gmail.com",                      // ← put Altan Kaan's real email here
      subject: subject || `Web sitenizden yeni bir mesaj: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">Web sitenizden yeni bir mesaj</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e40af; width: 100px;">Ad Soyad</td>
              <td style="padding: 8px; color: #1e3a8a;">${name}</td>
            </tr>
            <tr style="background: #eff6ff;">
              <td style="padding: 8px; font-weight: bold; color: #1e40af;">E-posta</td>
              <td style="padding: 8px; color: #1e3a8a;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #1e40af;">Konu</td>
              <td style="padding: 8px; color: #1e3a8a;">${subject || "—"}</td>
            </tr>
            <tr style="background: #eff6ff;">
              <td style="padding: 8px; font-weight: bold; color: #1e40af; vertical-align: top;">Mesaj</td>
              <td style="padding: 8px; color: #1e3a8a; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #93c5fd; font-size: 12px; margin-top: 24px;">
            altankaankaskan.com iletişim formundan gönderildi
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
