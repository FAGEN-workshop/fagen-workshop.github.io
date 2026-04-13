import Link from "next/link";

import { site } from "@/lib/workshop-data";

const infoItems = [
  {
    label: "Focus",
    text: "Reproducible triggers, trace diagnostics, and verified fixes for agentic failures.",
  },
  {
    label: "Format",
    text: "Keynotes, contributed spotlights, posters, and a panel on practical agent failure modes.",
  },
  {
    label: "Status",
    text: "Submission portal and final deadlines are still being finalized.",
  },
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-900 pb-16 pt-24"
      style={{
        backgroundImage: [
          "radial-gradient(ellipse at 18% 65%, rgba(79,70,229,0.22) 0%, transparent 52%)",
          "radial-gradient(ellipse at 80% 20%, rgba(79,70,229,0.10) 0%, transparent 45%)",
          "linear-gradient(rgba(99,102,241,0.055) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(99,102,241,0.055) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "auto, auto, 56px 56px, 56px 56px",
      }}
    >
      <div className="mx-auto max-w-[1154px] px-4">
        {/* Conference badge */}
        <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
            {site.conferenceLabel}
          </span>
        </div>

        {/* Title */}
        <h1
          className="mt-6 max-w-[840px] text-left font-semibold text-slate-50"
          style={{
            fontSize: "clamp(32px, 5.2vw, 62px)",
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
          }}
        >
          {site.fullTitle}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-[640px] text-[17px] leading-[1.72] text-slate-400">
          {site.heroBlurb}
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/submit"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-[15px] font-semibold text-white no-underline transition-all hover:bg-indigo-500 hover:shadow-[0_0_0_3px_rgba(99,102,241,0.28)]"
          >
            View Call for Contributions
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-[15px] font-semibold text-slate-300 no-underline transition-all hover:border-slate-400 hover:text-white"
          >
            See Tentative Schedule
          </Link>
        </div>

        {/* Info row */}
        <div className="mt-12 border-t border-slate-700/60 pt-8">
          <div className="grid gap-6 md:grid-cols-3">
            {infoItems.map((item) => (
              <div key={item.label}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-400">
                  {item.label}
                </p>
                <p className="mt-2 text-[14px] leading-[1.7] text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
