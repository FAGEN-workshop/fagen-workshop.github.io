import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { contributionNotes, focusAreas, site } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Call for Contributions",
};

export default function SubmitPage() {
  return (
    <>
      <Navbar activePage="Call for Contributions" />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Submissions
            </p>
            <h1 className="mt-4">Call for Contributions</h1>

            <div className="mx-auto mt-10 max-w-[840px] space-y-5 text-[17px] leading-[1.72] text-slate-600">
              <p>
                FMAI welcomes submissions that make agent failures reproducible,
                measurable, and fixable. We are especially interested in work
                that turns messy agent behavior into concrete research assets:
                precise failure definitions, minimal triggers, actionable
                diagnostics, and verified interventions.
              </p>

              <ul className="space-y-2 pl-1">
                {[
                  "Operational definitions with clear failure boundaries.",
                  "Reproducible triggers or minimal reproductions for the failure.",
                  "Comparable evaluation protocols or trace-level diagnostics.",
                  "Mitigation, repair, or intervention strategies with explicit evidence about what improves and what does not.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <p>
                We also strongly encourage well-documented negative results.
                Failed mitigations, brittle training tricks, and interventions
                that only work under narrow conditions are all in scope if the
                analysis is careful and the lesson is transferable.
              </p>
            </div>

            <hr className="mx-auto my-14 max-w-[800px] border-t border-slate-200" />

            <div className="mx-auto max-w-[1000px]">
              <div className="grid gap-6 lg:grid-cols-3">
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

              <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-7">
                <h2 className="text-left text-[22px] font-semibold text-slate-900">
                  Submission Status
                </h2>
                <div className="mt-5 space-y-4 text-[15px] leading-[1.72] text-slate-700">
                  {contributionNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                  <p>{site.status}</p>
                  <p>
                    For questions in the meantime, contact{" "}
                    <a href={`mailto:${site.contactEmails[0]}`}>
                      {site.contactEmails[0]}
                    </a>{" "}
                    or{" "}
                    <a href={`mailto:${site.contactEmails[1]}`}>
                      {site.contactEmails[1]}
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
