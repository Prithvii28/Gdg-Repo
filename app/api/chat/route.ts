import { NextResponse } from "next/server";
import { faqs } from "@/lib/faqs";

const CONTEXT = `You are the assistant for Google Developer Groups On Campus, Ramdeobaba University (RBU), Nagpur. Next event: GDG Orientation, Oct 7 2026, 3:00 PM. Contact: gdsc@rknec.edu. FAQs: ` + faqs.map(([q, a]) => `${q} ${a}`).join(" ") + ` Answer in under 60 words. If unsure, point to gdsc@rknec.edu.`;

export async function POST(req: Request) {
  const { message } = await req.json();
  const key = process.env.ANTHROPIC_API_KEY;
  if (key) {
    try {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
        body: JSON.stringify({ model: "claude-haiku-4-5", max_tokens: 300, system: CONTEXT, messages: [{ role: "user", content: String(message).slice(0, 500) }] }),
      });
      const d = await r.json();
      const text = d?.content?.[0]?.text;
      if (text) return NextResponse.json({ reply: text });
    } catch {}
  }
  // No API key: best keyword match over the FAQs
  const words = String(message).toLowerCase().split(/\W+/).filter((w) => w.length > 2);
  let best = { s: 0, a: "I'm not sure. Email gdsc@rknec.edu and the team will help." };
  for (const [q, a] of faqs) {
    const s = words.filter((w) => (q + a).toLowerCase().includes(w)).length;
    if (s > best.s) best = { s, a };
  }
  return NextResponse.json({ reply: best.a });
}
