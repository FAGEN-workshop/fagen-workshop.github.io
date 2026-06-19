import Link from "next/link";

import { site } from "@/lib/workshop-data";

const WORD_STAGGER_MS = 70;
const TITLE_START_MS = 120;

export function HeroSection() {
  const titleWords = site.title.split(" ");
  const lastWordEndMs = TITLE_START_MS + (titleWords.length - 1) * WORD_STAGGER_MS;

  return (
    <section
      className="relative overflow-hidden bg-[#1d1d1f] pb-20 pt-24"
      style={{
        backgroundImage: [
          "radial-gradient(ellipse at 18% 65%, rgba(107,143,191,0.25) 0%, transparent 52%)",
          "radial-gradient(ellipse at 80% 20%, rgba(107,143,191,0.12) 0%, transparent 45%)",
          "linear-gradient(rgba(107,143,191,0.05) 1px, transparent 1px)",
          "linear-gradient(90deg, rgba(107,143,191,0.05) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "auto, auto, 56px 56px, 56px 56px",
      }}
    >
      <div className="mx-auto max-w-[1154px] px-4">
        <div
          className="hero-in inline-flex items-center rounded-full border border-[#6b8fbf]/30 bg-[#6b8fbf]/10 px-4 py-1.5"
          style={{ animationDelay: "0ms" }}
        >
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#a3bdd8]">
            {site.conferenceLabel}
          </span>
        </div>

        <h1
          className="font-display mt-6 max-w-[900px] text-left font-semibold text-[#f5f5f7]"
          style={{
            fontSize: "clamp(40px, 5.8vw, 72px)",
            lineHeight: "1.04",
            letterSpacing: "-0.028em",
          }}
        >
          {titleWords.map((word, i) => (
            <span key={`${word}-${i}`}>
              <span
                className="hero-word"
                style={{
                  animationDelay: `${TITLE_START_MS + i * WORD_STAGGER_MS}ms`,
                }}
              >
                {word}
              </span>
              {i < titleWords.length - 1 && " "}
            </span>
          ))}
        </h1>

        <p
          className="hero-in font-mono mt-6 max-w-[760px] text-[14px] font-medium uppercase tracking-[0.16em] text-[#bfd1e4]"
          style={{ animationDelay: `${lastWordEndMs + 100}ms` }}
        >
          {site.tagline}
        </p>

        <dl
          className="hero-in mt-8 grid max-w-[780px] gap-4 border-t border-[#6b8fbf]/25 pt-5 sm:grid-cols-[170px_1fr] sm:gap-7"
          style={{ animationDelay: `${lastWordEndMs + 180}ms` }}
        >
          <div>
            <dt className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#ff8a78]">
              Workshop date
            </dt>
            <dd className="mt-2 font-mono text-[13px] font-medium leading-[1.45] tracking-[0.04em] text-[#f5f5f7] sm:text-[14px]">
              <time dateTime={site.workshopDateIso}>
                {site.workshopDateLabel}
              </time>
            </dd>
          </div>

          <div>
            <dt className="font-mono text-[10.5px] font-medium uppercase tracking-[0.14em] text-[#a3bdd8]">
              In person
            </dt>
            <dd className="mt-2 text-[15px] font-semibold leading-[1.35] text-[#f5f5f7] sm:text-[16px]">
              {site.workshopVenueRoom}
            </dd>
            <dd className="mt-1 max-w-[560px] text-[13.5px] leading-[1.55] text-[#bfd1e4] sm:text-[14.5px]">
              {site.workshopVenue}, {site.workshopLocation}
            </dd>
          </div>
        </dl>

        <div
          className="hero-in mt-10 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: `${lastWordEndMs + 280}ms` }}
        >
          <Link
            href="#cfp"
            className="inline-flex items-center justify-center rounded-lg bg-[#6b8fbf] px-6 py-3 text-[15px] font-semibold text-white no-underline transition-all hover:bg-[#7fa2cf] hover:shadow-[0_0_0_3px_rgba(107,143,191,0.28)]"
          >
            Call for Papers
          </Link>
          <Link
            href="#speakers"
            className="inline-flex items-center justify-center rounded-lg border border-[#3a3a3c] px-6 py-3 text-[15px] font-semibold text-[#d6d6da] no-underline transition-all hover:border-[#86868b] hover:text-white"
          >
            See Speakers
          </Link>
        </div>
      </div>
    </section>
  );
}
