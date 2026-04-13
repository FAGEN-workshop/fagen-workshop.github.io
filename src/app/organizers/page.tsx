import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PersonCard } from "@/components/PersonCard";
import { organizers, pcOverview } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Organizers",
};

export default function OrganizersPage() {
  return (
    <>
      <Navbar activePage="Organizers" />
      <main className="pt-16">
        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Organizers</h1>

            <div className="mx-auto mt-8 max-w-[900px] text-center text-[18px] leading-[30px] text-[#201a14]">
              <p>
                The organizing team was assembled to cover the full failure-mode
                stack for agentic AI: multi-turn training, evaluation, safety,
                grounding, security, and community-facing workshop execution.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {organizers.map((organizer) => (
                <PersonCard key={organizer.name} person={organizer} />
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-[900px] rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-7 text-[17px] leading-[28px] text-[#2a2016]">
              <p>
                {pcOverview}
              </p>
              <p className="mt-4">
                The current public site reflects the accepted workshop proposal
                plus organizer-confirmed updates that are ready to share
                publicly.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
