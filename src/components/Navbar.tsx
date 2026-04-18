"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { navigation } from "@/lib/workshop-data";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState<string>("");

  useEffect(() => {
    const anchors = navigation.map((item) => item.anchor);
    const elements = anchors
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveAnchor(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 border-b border-[#2c2c2e] bg-[#1d1d1f]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1154px] items-center px-4">
        <button
          className="mr-3 text-slate-400 transition-colors hover:text-slate-100 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a3bdd8]">
            ICML 2026
          </span>
          <span className="hidden text-slate-700 sm:inline">/</span>
          <span className="hidden text-[15px] font-semibold text-slate-100 sm:inline">
            Failure Modes in Agentic AI
          </span>
          <span className="text-[15px] font-semibold text-slate-100 sm:hidden">
            FMAI
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => {
            const isActive = item.anchor === activeAnchor;
            return (
              <Link
                key={item.anchor}
                href={item.href}
                className={`rounded-md px-3 py-2 text-[14px] font-medium no-underline transition-all ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/6 hover:text-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {mobileMenuOpen && (
        <nav className="absolute left-0 right-0 top-16 border-b border-[#2c2c2e] bg-[#1d1d1f] py-3 lg:hidden">
          {navigation.map((item) => {
            const isActive = item.anchor === activeAnchor;
            return (
              <Link
                key={item.anchor}
                href={item.href}
                className={`mx-3 my-0.5 block rounded-lg px-4 py-3 text-[15px] font-medium no-underline transition-colors ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/6 hover:text-slate-100"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
