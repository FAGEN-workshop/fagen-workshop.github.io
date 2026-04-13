"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { navigation } from "@/lib/workshop-data";

interface NavbarProps {
  activePage?: string;
}

export function Navbar({ activePage = "Home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 border-b border-[#2f2417] bg-[#19120d]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1154px] items-center px-4">
        <button
          className="mr-3 text-[#f8f5ef] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link href="/" className="flex items-center gap-3 no-underline">
          <span className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#d7c2a2]">
            ICML 2026
          </span>
          <span className="text-[20px] font-semibold text-[#f8f5ef]">
            Failure Modes in Agentic AI
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = item.label === activePage;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-3 py-2 text-[15px] no-underline transition-colors ${
                  isActive
                    ? "bg-[#f3eee4] font-semibold text-[#241a11]"
                    : "font-medium text-[#f8f5ef]"
                } hover:bg-[#f3eee4] hover:text-[#241a11]`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {mobileMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 border-b border-[#2f2417] bg-[#19120d] py-4 lg:hidden">
          {navigation.map((item) => {
            const isActive = item.label === activePage;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`mx-4 my-1 block rounded-2xl px-4 py-3 text-[16px] no-underline ${
                  isActive
                    ? "bg-[#f3eee4] font-semibold text-[#241a11]"
                    : "font-normal text-[#f8f5ef]"
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
