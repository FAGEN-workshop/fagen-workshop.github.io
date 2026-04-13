import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PersonCard } from "@/components/PersonCard";
import {
  additionalConfirmedSpeakers,
  proposalSpeakers,
} from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Speakers",
};

export default function SpeakersPage() {
  return (
    <>
      <Navbar activePage="Speakers" />
      <main className="pt-16">
        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Speakers</h1>

            <div className="mx-auto mt-8 max-w-[880px] text-center text-[18px] leading-[30px] text-[#201a14]">
              <p>
                The invited lineup is designed to cover the full agent-failure
                pipeline: mechanisms, closed-loop diagnostics, security,
                evaluation, and practical fixes. The first section below tracks
                speakers explicitly named in the accepted workshop proposal.
                The second section captures additional speakers confirmed after
                proposal acceptance and recorded in the workshop working doc.
              </p>
            </div>

            <h2 className="mt-12 text-left text-[30px] font-bold text-[#3b2d1f]">
              Confirmed in the Accepted Proposal
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {proposalSpeakers.map((speaker) => (
                <PersonCard key={speaker.name} person={speaker} />
              ))}
            </div>

            <h2 className="mt-14 text-left text-[30px] font-bold text-[#3b2d1f]">
              Additional Confirmed Invited Speakers
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {additionalConfirmedSpeakers.map((speaker) => (
                <PersonCard key={speaker.name} person={speaker} />
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-[880px] rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-7 text-[17px] leading-[28px] text-[#2a2016]">
              <p>
                The accepted proposal is still the source of truth for the
                formal workshop schedule, but this page also reflects later
                organizer updates when participation has been explicitly
                confirmed after proposal acceptance.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
