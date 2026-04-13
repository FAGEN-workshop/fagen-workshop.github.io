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
        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Call for Contributions</h1>

            <div className="mx-auto mt-10 max-w-[840px] space-y-6 text-[18px] leading-[30px]">
              <p>
                FMAI welcomes submissions that make agent failures reproducible,
                measurable, and fixable. We are especially interested in work
                that turns messy agent behavior into concrete research assets:
                precise failure definitions, minimal triggers, actionable
                diagnostics, and verified interventions.
              </p>

              <ul className="ml-6 list-disc space-y-2">
                <li>Operational definitions with clear failure boundaries.</li>
                <li>
                  Reproducible triggers or minimal reproductions for the failure.
                </li>
                <li>
                  Comparable evaluation protocols or trace-level diagnostics.
                </li>
                <li>
                  Mitigation, repair, or intervention strategies with explicit
                  evidence about what improves and what does not.
                </li>
              </ul>

              <p>
                We also strongly encourage well-documented negative results.
                Failed mitigations, brittle training tricks, and interventions
                that only work under narrow conditions are all in scope if the
                analysis is careful and the lesson is transferable.
              </p>
            </div>

            <hr className="mx-auto my-12 max-w-[800px] border-t border-[#d9d9d9]" />

            <div className="mx-auto mt-8 max-w-[1000px]">
              <div className="grid gap-6 lg:grid-cols-3">
                {focusAreas.map((area) => (
                  <article
                    key={area.title}
                    className="rounded-[28px] border border-[#d8d3ca] bg-white p-7"
                  >
                    <h2 className="text-left text-[24px] font-bold text-[#3b2d1f]">
                      {area.title}
                    </h2>
                    <p className="mt-4 text-[17px] leading-[28px] text-[#201a14]">
                      {area.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8 rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-7">
                <h2 className="text-left text-[28px] font-bold text-[#3b2d1f]">
                  Submission Status
                </h2>
                <div className="mt-5 space-y-4 text-[17px] leading-[28px] text-[#2a2016]">
                  {contributionNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                  <p>{site.status}</p>
                  <p>
                    For questions in the meantime, contact{" "}
                    <a href={`mailto:${site.contactEmails[0]}`}>{site.contactEmails[0]}</a>{" "}
                    or{" "}
                    <a href={`mailto:${site.contactEmails[1]}`}>{site.contactEmails[1]}</a>.
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
