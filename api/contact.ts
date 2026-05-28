import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { name, email, phone, service, message } = body;

  if (!name || !email) {
    return new Response(JSON.stringify({ error: "Name and email are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
    await resend.emails.send({
      from: `Latvijas psihologu asociācija <${fromEmail}>`,
      to: [process.env.FROM_EMAIL ? "lppasociacija@inbox.lv" : "dandark444@gmail.com", ...(process.env.FROM_EMAIL ? ["dginglats@gmail.com"] : [])],
      replyTo: email,
      subject: `Новый запрос: ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="ru">
          <head>
            <meta charset="UTF-8" />
            <style>
              body { margin: 0; padding: 0; background: #f5f5f0; font-family: Georgia, serif; }
              .wrap { max-width: 560px; margin: 40px auto; background: #fff; border: 1px solid #e8e4dc; }
              .header { background: #1a1a18; padding: 32px 40px; }
              .header h1 { margin: 0; color: #fff; font-size: 18px; font-weight: 400; letter-spacing: 0.08em; }
              .header p { margin: 4px 0 0; color: #a09a8e; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; }
              .body { padding: 40px; }
              .row { margin-bottom: 24px; }
              .label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: #9e9990; margin-bottom: 6px; }
              .value { font-size: 15px; color: #1a1a18; line-height: 1.6; }
              .divider { border: none; border-top: 1px solid #e8e4dc; margin: 32px 0; }
              .footer { padding: 20px 40px; background: #f9f8f5; border-top: 1px solid #e8e4dc; font-size: 11px; color: #b0aa9e; text-align: center; letter-spacing: 0.1em; }
            </style>
          </head>
          <body>
            <div class="wrap">
              <div class="header">
                <p>— Запрос с сайта</p>
                <h1>Latvijas psihologu un psihoterapeitu asociācija</h1>
              </div>
              <div class="body">
                <div class="row">
                  <div class="label">Имя</div>
                  <div class="value">${escapeHtml(name)}</div>
                </div>
                <div class="row">
                  <div class="label">Электронная почта</div>
                  <div class="value"><a href="mailto:${escapeHtml(email)}" style="color:#1a1a18">${escapeHtml(email)}</a></div>
                </div>
                ${phone ? `
                <div class="row">
                  <div class="label">Телефон</div>
                  <div class="value">${escapeHtml(phone)}</div>
                </div>` : ""}
                ${service ? `
                <div class="row">
                  <div class="label">Интересующая услуга</div>
                  <div class="value">${escapeHtml(service)}</div>
                </div>` : ""}
                ${message ? `
                <hr class="divider" />
                <div class="row">
                  <div class="label">Сообщение</div>
                  <div class="value">${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
                </div>` : ""}
              </div>
              <div class="footer">
                Ответьте на это письмо, чтобы связаться с ${escapeHtml(name)}
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Resend error", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const config = { runtime: "edge" };
