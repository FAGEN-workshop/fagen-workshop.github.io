import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="antialiased">
      <body className="min-h-screen bg-[#fffdf9] text-[#1c1c1c]">
        {children}
      </body>
    </html>
  );
}
