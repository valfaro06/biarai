import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body || !body.email || !body.name) {
    return NextResponse.json({ ok: false, error: "Invalid" }, { status: 400 });
  }

  // Log básico
  console.log("New lead:", body);

  // Webhook opcional (Slack/CRM)
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: body.source || "web",
          name: body.name,
          email: body.email,
          company: body.company || "",
          message: body.message || body.notes || "",
          focus: body.focus || "",
          at: new Date().toISOString(),
        }),
      });
    } catch (e) {
      console.error("Webhook error", e);
    }
  }

  return NextResponse.json({ ok: true });
}


