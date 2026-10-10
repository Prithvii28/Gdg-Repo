"use client";
import { useState } from "react";

export default function AskGDG() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [log, setLog] = useState<{ role: string; text: string }[]>([{ role: "bot", text: "Hi! Ask me anything about GDG RBU." }]);
  const [busy, setBusy] = useState(false);

  async function send() {
    if (!q.trim() || busy) return;
    const msg = q; setQ(""); setBusy(true);
    setLog((l) => [...l, { role: "me", text: msg }]);
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: msg }) });
      const d = await r.json();
      setLog((l) => [...l, { role: "bot", text: d.reply }]);
    } catch { setLog((l) => [...l, { role: "bot", text: "Something went wrong. Try again." }]); }
    setBusy(false);
  }

  return (
    <div className="ask">
      {open && (
        <div className="ask-box" role="dialog" aria-label="Ask GDG assistant">
          <div className="ask-log">{log.map((m, i) => <p key={i} className={m.role}>{m.text}</p>)}{busy && <p className="bot">…</p>}</div>
          <div className="row">
            <input value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="How do I join?" aria-label="Your question" />
            <button className="btn" onClick={send}>Send</button>
          </div>
        </div>
      )}
      <button className="btn ask-fab" onClick={() => setOpen(!open)}>{open ? "Close" : "Ask GDG AI"}</button>
    </div>
  );
}
