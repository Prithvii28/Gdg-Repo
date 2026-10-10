import type { Metadata } from "next";
import { Pixelify_Sans, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Pixelify_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["500", "700"] });
const mono = Space_Mono({ subsets: ["latin"], variable: "--font-mono", weight: "400" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Google Developer Groups, RBU",
  description: "GDG On Campus at Ramdeobaba University: events, team and FAQs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=t}catch(e){}` }} />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
