import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { LocalDeadline } from "@/components/LocalDeadline";
import { PersonCard } from "@/components/PersonCard";
import {
  contributionNotes,
  focusAreas,
  overviewParagraphs,
  resources,
  site,
  speakers,
} from "@/lib/workshop-data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSection />

        {/* Why This Workshop */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  Overview
                </p>
                <h1 className="mt-4 text-left">Why This Workshop</h1>
                <div className="mt-8 space-y-5 text-[17px] leading-[1.72] text-slate-600">
                  {overviewParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                  Current status
                </p>
                <p className="mt-4 text-[17px] leading-[1.72] text-slate-800">
                  {site.status}
                </p>
                <div className="mt-5 rounded-lg border border-indigo-200 bg-white px-4 py-3">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-indigo-500">
                    Submission deadline
                  </p>
                  <p className="mt-2 text-[15px] font-medium text-slate-900">
                    {site.submissionDeadlineUtc}
                  </p>
                  <p className="mt-1 text-[14px] text-slate-600">
                    <LocalDeadline isoUtc={site.submissionDeadlineIso} />
                  </p>
                </div>
                <p className="mt-5 text-[15px] leading-[1.65] text-slate-600">
                  {site.formatNote}
                </p>
                <p className="mt-4 text-[15px] leading-[1.65] text-slate-600">
                  {site.venueNote}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Topics of Interest */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Topics of Interest
            </p>
            <h1 className="mt-4 text-left">What Fits FMAI</h1>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {focusAreas.map((area, i) => (
                <article
                  key={area.title}
                  className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_2px_8px_rgba(15,23,42,0.04)]"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-left text-[19px] font-semibold text-slate-900">
                    {area.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.72] text-slate-600">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-slate-200 bg-white p-7">
              <ul className="space-y-3 text-[15px] leading-[1.72] text-slate-700">
                {contributionNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Invited Speakers */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
                  Invited Speakers
                </p>
                <h1 className="mt-4 text-left">Invited Speakers</h1>
                <p className="mt-4 max-w-[640px] text-[17px] leading-[1.72] text-slate-600">
                  The proposed program covers failure mechanisms, diagnostics,
                  evaluation, security, and practical deployment.
                </p>
              </div>
              <Link
                href="/speakers"
                className="shrink-0 text-[14px] font-semibold text-indigo-600 no-underline hover:text-indigo-500"
              >
                View all speakers →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {speakers.slice(0, 3).map((speaker) => (
                <PersonCard key={speaker.name} person={speaker} compact />
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Logistics */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Logistics
            </p>
            <h1 className="mt-4 text-left">Workshop Logistics</h1>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {resources.map((resource) => (
                <article
                  key={resource.label}
                  className="rounded-xl border border-slate-200 bg-white p-7"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                    {resource.label}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.72] text-slate-700">
                    {resource.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stay in Touch */}
        <section
          className="py-20"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(79,70,229,0.15) 0%, transparent 55%), #0f172a",
          }}
        >
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
              Contact
            </p>
            <h1 className="mt-4 text-left text-slate-50">Stay in Touch</h1>
            <p className="mt-6 max-w-[640px] text-[17px] leading-[1.72] text-slate-400">
              We are using this site as the working home for the FMAI workshop.
              If you want to ask about submissions, sponsorship, or program
              details, reach out directly.
            </p>
            <div className="mt-8 flex">
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-[15px] font-semibold text-white no-underline transition-all hover:bg-indigo-500 hover:shadow-[0_0_0_3px_rgba(99,102,241,0.28)]"
              >
                {site.contactEmail}
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
