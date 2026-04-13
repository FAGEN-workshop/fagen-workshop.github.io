import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PersonCard } from "@/components/PersonCard";
import { speakers } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Speakers",
};

export default function SpeakersPage() {
  return (
    <>
      <Navbar activePage="Speakers" />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Invited Speakers
            </p>
            <h1 className="mt-4">Speakers</h1>

            <p className="mx-auto mt-8 max-w-[780px] text-center text-[17px] leading-[1.72] text-slate-600">
              The invited lineup covers the full agent-failure pipeline:
              mechanisms, closed-loop diagnostics, security, evaluation, and
              practical fixes.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {speakers.map((speaker) => (
                <PersonCard key={speaker.name} person={speaker} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
