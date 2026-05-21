export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const text = await request.text();
    const params = new URLSearchParams(text);
    const name = params.get("name")?.trim();
    const email = params.get("email")?.trim();
    const phone = params.get("phone")?.trim();
    const subject = params.get("subject")?.trim();
    const message = params.get("message")?.trim();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 });
    }

    const apiKey = env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Server not configured for email" }, { status: 500 });
    }

    const to = env.CONTACT_EMAIL || "hello@khaledmohamed.com";

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
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact function error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
