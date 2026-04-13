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
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Team
            </p>
            <h1 className="mt-4">Organizers</h1>

            <p className="mx-auto mt-8 max-w-[780px] text-center text-[17px] leading-[1.72] text-slate-600">
              The organizing team was assembled to cover the full failure-mode
              stack for agentic AI: multi-turn training, evaluation, safety,
              grounding, security, and community-facing workshop execution.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {organizers.map((organizer) => (
                <PersonCard key={organizer.name} person={organizer} />
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-[900px] rounded-xl border border-slate-200 bg-slate-50 p-7 text-[15px] leading-[1.72] text-slate-700">
              <p>{pcOverview}</p>
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
