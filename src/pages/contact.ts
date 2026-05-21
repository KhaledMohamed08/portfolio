import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = (locals as any).runtime?.env;

  try {
    const text = await request.text();
    const params = new URLSearchParams(text);
    const name = params.get("name")?.trim();
    const email = params.get("email")?.trim();
    const phone = params.get("phone")?.trim();
    const subject = params.get("subject")?.trim();
    const message = params.get("message")?.trim();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const apiKey = env?.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Server not configured for email" }), { status: 500 });
    }

    const to = env?.CONTACT_EMAIL || "hello@khaledmohamed.com";

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact <onboarding@resend.dev>`,
        to: [to],
        reply_to: [email],
        subject: `[Portfolio] ${subject}`,
        text: `From: ${name} (${email})${phone ? `\nPhone: ${phone}` : ""}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    console.error("Contact error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
};
