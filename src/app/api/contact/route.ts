import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() || "Nie podano";
    const message = body.message?.trim() ?? "";
    const company = body.company?.trim() ?? "";

    if (company) {
      return NextResponse.json({ message: "OK" });
    }

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Brakuje wymaganych pól formularza." }, { status: 400 });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpSecure = process.env.SMTP_SECURE !== "false";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailFrom = process.env.MAIL_FROM;
    const mailTo = process.env.MAIL_TO;

    if (!smtpHost || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
      return NextResponse.json(
        {
          error: "Brakuje konfiguracji SMTP_HOST, SMTP_USER, SMTP_PASS, MAIL_FROM lub MAIL_TO.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: email,
      subject: `Nowy lead ze strony GAPYS: ${service}`,
      text: [
        "Nowa wiadomość z formularza kontaktowego GAPYS",
        "",
        `Imię i nazwisko: ${name}`,
        `Telefon: ${phone}`,
        `E-mail: ${email}`,
        `Zakres: ${service}`,
        "",
        "Wiadomość:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>Nowa wiadomość z formularza kontaktowego GAPYS</h2>
          <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
          <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Zakres:</strong> ${escapeHtml(service)}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Wiadomość została wysłana. Sprawdź skrzynkę odbiorczą." });
  } catch {
    return NextResponse.json({ error: "Wystąpił błąd podczas wysyłki formularza." }, { status: 500 });
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
