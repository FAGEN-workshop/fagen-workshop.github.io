import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { NewsSection } from "@/components/NewsSection";
import { SectionTitle } from "@/components/SectionTitle";
import { Footer } from "@/components/Footer";
import { LocalDeadline } from "@/components/LocalDeadline";
import { AvatarCard } from "@/components/AvatarCard";
import { withBasePath } from "@/lib/site-path";
import {
  aboutParagraphs,
  cfpBullets,
  focusAreas,
  organizers,
  schedule,
  site,
  speakers,
  sponsors,
  topicsOfInterest,
} from "@/lib/workshop-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />

        <NewsSection />

        {/* About */}
        <section id="about" className="scroll-mt-24 bg-[#eceff3] py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle>About the Workshop</SectionTitle>
            <div className="mt-8 max-w-[820px] space-y-5 text-[17px] leading-[1.72] text-slate-600">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section id="speakers" className="scroll-mt-24 bg-[#f5f5f7] py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle>Tentative Speakers &amp; Panelists</SectionTitle>
            <div className="mx-auto mt-12 grid max-w-[1040px] grid-cols-2 justify-items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
              {speakers.map((speaker) => (
                <AvatarCard key={speaker.name} person={speaker} showFocus />
              ))}
            </div>
          </div>
        </section>

        {/* Call for Papers */}
        <section id="cfp" className="scroll-mt-24 bg-[#eceff3] py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle>Call for Papers</SectionTitle>

            <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Format — flat editorial block */}
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                  Format
                </p>
                <ul className="mt-5 space-y-3 text-[15px] leading-[1.7] text-slate-700">
                  {cfpBullets.map((bullet, i) => (
                    <li key={bullet} className="flex gap-4">
                      <span className="font-mono w-6 shrink-0 pt-[2px] text-[11px] text-[#8aa8cc]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Submit — the one card that stays */}
              <div className="flex flex-col justify-between gap-6 rounded-xl border border-[#c5d2e1] bg-[#e9eef4] p-8 shadow-[0_1px_0_rgba(107,143,191,0.12)]">
                <div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[#4a6b94]">
                    Submit on OpenReview
                  </p>
                </div>
                <a
                  href={site.openReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[#6b8fbf] px-6 py-3 text-[15px] font-semibold text-white no-underline transition-all hover:bg-[#7fa2cf] hover:shadow-[0_0_0_3px_rgba(107,143,191,0.22)]"
                >
                  Open OpenReview
                </a>
              </div>
            </div>

            <div className="mt-16 border-t border-[#d8dde5] pt-10">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                Topics of Interest
              </p>
              <p className="mt-5 max-w-[760px] text-[16px] leading-[1.72] text-slate-600">
                We welcome submissions on:
              </p>
              <ul className="mt-5 max-w-[760px] space-y-2.5 text-[15px] leading-[1.7] text-slate-700">
                {topicsOfInterest.map((topic) => (
                  <li key={topic} className="flex gap-4">
                    <span className="font-mono shrink-0 pt-[2px] text-[11px] text-[#8aa8cc]">
                      ·
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-[760px] text-[14px] leading-[1.65] text-slate-500">
                Well-documented negative results are in scope when the analysis
                is careful and the lesson transfers.
              </p>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-3">
              {focusAreas.map((area, i) => (
                <article
                  key={area.title}
                  className="border-t border-[#d8dde5] pt-6"
                >
                  <span className="font-mono text-[11px] font-medium tracking-[0.08em] text-[#8aa8cc]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[18px] font-medium leading-[1.3] text-[#1d1d1f]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7] text-slate-600">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section id="dates" className="scroll-mt-24 bg-[#f5f5f7] py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle>Key Dates</SectionTitle>

            {/* Hard deadline — the memorable moment */}
            <div className="mt-12 max-w-[920px]">
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#4a6b94]">
                Submission deadline
              </p>
              <p
                className="font-mono mt-4 font-medium leading-[1] tracking-[-0.025em] text-[#1d1d1f]"
                style={{ fontSize: "clamp(34px, 4.6vw, 56px)" }}
              >
                2026-05-11
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <p className="font-mono text-[13px] font-medium tracking-[0.02em] text-[#4a6b94]">
                  AOE · {site.submissionDeadlineLabel}
                </p>
                <p className="font-mono text-[12px] text-slate-500">
                  <LocalDeadline isoUtc={site.submissionDeadlineIso} />
                </p>
              </div>
            </div>

            {/* Notification date — quieter, flat, inline */}
            <div className="mt-14 max-w-[640px] border-t border-[#d8dde5] pt-6">
              <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">
                  Notification date
                </span>
                <span className="font-mono text-[18px] font-medium tracking-[-0.01em] text-[#1d1d1f]">
                  2026-05-22
                </span>
                <span className="font-mono text-[12px] text-slate-500">
                  AOE · {site.notificationDateLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="scroll-mt-24 bg-[#eceff3] py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle>Workshop Schedule (Tentative)</SectionTitle>

            <div className="mt-12 max-w-[900px] divide-y divide-[#d8dde5] border-y border-[#d8dde5]">
              {schedule.map((row) => (
                <div
                  key={row.time}
                  className="grid grid-cols-[140px_1fr] gap-6 py-4 sm:grid-cols-[180px_1fr]"
                >
                  <span className="font-mono pt-0.5 text-[12.5px] leading-[1.5] tracking-[0.02em] text-slate-500">
                    {row.time}
                  </span>
                  <div>
                    <p className="text-[15px] font-medium leading-[1.4] text-[#1d1d1f]">
                      {row.event}
                    </p>
                    {row.detail && (
                      <p className="mt-1 text-[14px] leading-[1.55] text-slate-600">
                        {row.detail}
                      </p>
                    )}
                    {row.note && (
                      <p className="mt-1 text-[13px] text-slate-500">
                        {row.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Organizers */}
        <section id="organizers" className="scroll-mt-24 bg-[#f5f5f7] py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle>Organizing Committee</SectionTitle>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-12">
              {organizers.map((organizer) => (
                <AvatarCard key={organizer.name} person={organizer} />
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section id="sponsors" className="scroll-mt-24 bg-[#eceff3] py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle>Sponsors</SectionTitle>
            <p className="mt-6 max-w-[780px] text-[17px] leading-[1.72] text-slate-600">
              We sincerely thank the support from our sponsors:
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target={sponsor.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    sponsor.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center justify-center py-8 text-center no-underline transition-all hover:opacity-100"
                >
                  {sponsor.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={withBasePath(sponsor.logo)}
                      alt={`${sponsor.name} logo`}
                      className={`${sponsor.maxHeightClass ?? "max-h-12"} w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0`}
                    />
                  ) : (
                    <span className="text-[18px] font-medium tracking-[-0.01em] text-slate-500 transition-colors hover:text-[#1d1d1f]">
                      {sponsor.name}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 py-20"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(107,143,191,0.22) 0%, transparent 55%), #1d1d1f",
          }}
        >
          <div className="mx-auto max-w-[1154px] px-4">
            <SectionTitle tone="dark">Contact</SectionTitle>
            <p className="mt-6 max-w-[680px] text-[17px] leading-[1.72] text-slate-400">
              Reach out for submissions, sponsorship, speaker logistics, or
              collaboration.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center justify-center rounded-lg bg-[#6b8fbf] px-6 py-3 text-[15px] font-semibold text-white no-underline transition-all hover:bg-[#7fa2cf] hover:shadow-[0_0_0_3px_rgba(107,143,191,0.28)]"
              >
                {site.contactEmail}
              </a>
              <a
                href={site.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-slate-300 no-underline transition-colors hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow {site.xHandle}
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
