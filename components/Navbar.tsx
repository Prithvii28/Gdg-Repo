"use client";
import { useEffect, useState } from "react";

const links = [
  ["Home", "#home", "var(--blue)"], ["Team", "#team", "var(--red)"], ["Events", "#events", "var(--yellow)"],
  ["Gallery", "#team", "var(--green)"], ["Portfolio", "#home", "var(--purple)"], ["More", "#faq", "var(--blue)"],
] as const;

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  useEffect(() => setTheme(document.documentElement.dataset.theme || "light"), []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  };
  return (
    <header className="nav">
      <a href="#home" aria-label="GDG RBU home"><Logo size={28} /></a>
      <nav aria-label="Primary" className="nav-links">
        {links.map(([l, h, c]) => <a key={l} href={h} className="pill" style={{ background: c }}>{l}</a>)}
      </nav>
      <span className="user"><i className="avatar" />Saptanshu Wanjari</span>
      <button className="theme-btn" onClick={toggle} aria-label="Toggle dark and light mode">
        {theme === "dark" ? "☀" : "☾"}
      </button>
    </header>
  );
}

export function Logo({ size = 40 }: { size?: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.png" alt="" width={Math.round(size * 1.9)} height={size} style={{ height: size, width: "auto" }} />;
}
