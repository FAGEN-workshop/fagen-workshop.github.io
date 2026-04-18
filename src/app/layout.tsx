import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Failure Modes in Agentic AI (FMAI) | ICML 2026 Workshop",
  description:
    "ICML 2026 workshop on failure modes in agentic AI, centered on reproducible triggers, trace diagnostics, and verified fixes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased ${jakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen text-slate-600" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
