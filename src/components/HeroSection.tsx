import Link from "next/link";

import { site } from "@/lib/workshop-data";

export function HeroSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f6f1e8_0%,#ffffff_100%)] pt-8">
      <div className="mx-auto max-w-[1154px] px-4">
        <div className="overflow-hidden rounded-[36px] border border-[#d7cdbf] bg-[#22170f] px-6 py-10 shadow-[0_24px_60px_rgba(34,23,15,0.18)] md:px-10 md:py-14">
          <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#d7c2a2]">
            {site.conferenceLabel}
          </p>
          <h1 className="mt-5 max-w-[900px] text-left text-[36px] font-bold leading-[42px] text-[#f8f5ef] md:text-[58px] md:leading-[64px]">
            {site.fullTitle}
          </h1>
          <p className="mt-6 max-w-[860px] text-[18px] leading-[30px] text-[#efe5d5] md:text-[20px] md:leading-[32px]">
            {site.heroBlurb}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/submit"
              className="inline-flex items-center justify-center rounded-full bg-[#f3eee4] px-5 py-3 text-[16px] font-semibold text-[#241a11] no-underline transition-transform hover:-translate-y-0.5"
            >
              View Call for Contributions
            </Link>
            <Link
              href="/schedule"
              className="inline-flex items-center justify-center rounded-full border border-[#b89d7b] px-5 py-3 text-[16px] font-semibold text-[#f8f5ef] no-underline transition-colors hover:bg-[#f8f5ef] hover:text-[#241a11]"
            >
              See Tentative Schedule
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#3c2a1c] bg-[#2a1d14] p-5">
              <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#d7c2a2]">
                Focus
              </p>
              <p className="mt-2 text-[16px] leading-[25px] text-[#f8f5ef]">
                Reproducible triggers, trace diagnostics, and verified fixes for agentic failures.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#3c2a1c] bg-[#2a1d14] p-5">
              <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#d7c2a2]">
                Format
              </p>
              <p className="mt-2 text-[16px] leading-[25px] text-[#f8f5ef]">
                Keynotes, contributed spotlights, posters, and a panel on practical agent failure modes.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#3c2a1c] bg-[#2a1d14] p-5">
              <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-[#d7c2a2]">
                Status
              </p>
              <p className="mt-2 text-[16px] leading-[25px] text-[#f8f5ef]">
                Submission portal and final deadlines are still being finalized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
