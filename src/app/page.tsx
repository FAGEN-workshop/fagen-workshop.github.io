import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Divider } from "@/components/Divider";
import { Footer } from "@/components/Footer";
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
        <Divider />

        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <h1 className="text-left">Why This Workshop</h1>
                <div className="mt-8 space-y-5 text-[18px] leading-[30px] text-[#201a14]">
                  {overviewParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-[#d8d3ca] bg-[#f6f1e8] p-7">
                <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#7c6245]">
                  Current status
                </p>
                <p className="mt-4 text-[18px] leading-[30px] text-[#2a2016]">
                  {site.status}
                </p>
                <p className="mt-5 text-[16px] leading-[26px] text-[#5b4630]">
                  {site.formatNote}
                </p>
                <p className="mt-5 text-[16px] leading-[26px] text-[#5b4630]">
                  {site.venueNote}
                </p>
              </div>
            </div>
          </div>
        </section>
        <Divider />

        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Call for Contributions</h1>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {focusAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-[28px] border border-[#d8d3ca] bg-white p-7 shadow-[0_14px_32px_rgba(52,39,22,0.05)]"
                >
                  <h2 className="text-left text-[28px] font-bold leading-[34px] text-[#3b2d1f]">
                    {area.title}
                  </h2>
                  <p className="mt-4 text-[17px] leading-[28px] text-[#201a14]">
                    {area.description}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-7">
              <ul className="space-y-3 text-[17px] leading-[28px] text-[#2a2016]">
                {contributionNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Divider />

        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <div className="flex items-end justify-between gap-6">
              <div>
                <h1 className="text-left">Invited Speakers</h1>
                <p className="mt-4 max-w-[760px] text-[18px] leading-[30px] text-[#201a14]">
                  The proposed program covers failure mechanisms, diagnostics,
                  evaluation, security, and practical deployment. Speaker
                  details below reflect the current workshop proposal and
                  organizer notes.
                </p>
              </div>
              <Link href="/speakers" className="text-[16px] font-semibold">
                View all speakers
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {speakers.slice(0, 3).map((speaker) => (
                <PersonCard key={speaker.name} person={speaker} compact />
              ))}
            </div>
          </div>
        </section>
        <Divider />

        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1 className="text-left">Workshop Logistics</h1>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {resources.map((resource) => (
                <article
                  key={resource.label}
                  className="rounded-[28px] border border-[#d8d3ca] bg-white p-7"
                >
                  <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#7c6245]">
                    {resource.label}
                  </p>
                  <p className="mt-4 text-[18px] leading-[29px] text-[#2a2016]">
                    {resource.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Divider />

        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <div className="rounded-[36px] border border-[#d8d3ca] bg-[#f6f1e8] p-8 md:p-10">
              <h1 className="text-left">Stay in Touch</h1>
              <p className="mt-6 max-w-[780px] text-[18px] leading-[30px] text-[#201a14]">
                We are using this site as the working home for the FMAI
                workshop. If you want to ask about submissions, sponsorship, or
                program details, email{" "}
                <a href={`mailto:${site.contactEmails[0]}`}>{site.contactEmails[0]}</a>{" "}
                or{" "}
                <a href={`mailto:${site.contactEmails[1]}`}>{site.contactEmails[1]}</a>.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
