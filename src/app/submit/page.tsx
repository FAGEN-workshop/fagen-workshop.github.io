import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { focusAreas, site, submissionDetails } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Submit Paper",
};

export default function SubmitPage() {
  return (
    <>
      <Navbar activePage="Submit Paper" />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <div className="mx-auto max-w-[920px]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
                Submissions
              </p>
              <h1 className="mt-4">Submit Paper</h1>
              <p className="mx-auto mt-6 max-w-[720px] text-center text-[17px] leading-[1.72] text-slate-600">
                FMAI is accepting paper submissions through the official
                OpenReview venue page. Use this page as your fast handoff into
                the submission flow, then come back here if you want the field
                summary or topic fit.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-[920px] rounded-2xl border border-indigo-200 bg-indigo-50 p-8 shadow-[0_10px_30px_rgba(79,70,229,0.08)]">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                    Submission deadline
                  </p>
                  <h2 className="mt-3 text-left text-[28px] font-semibold text-slate-900">
                    {site.submissionDeadlineUtc}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.72] text-slate-700">
                    Chicago time: {site.submissionDeadlineLocal}
                  </p>
                  <p className="mt-4 text-[14px] font-medium text-slate-600">
                    {site.submissionAccountNote}
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  <a
                    href={site.openReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-[15px] font-semibold text-white no-underline transition-all hover:bg-indigo-500 hover:shadow-[0_0_0_3px_rgba(99,102,241,0.22)]"
                  >
                    Submit on OpenReview
                  </a>
                  <a
                    href="#submission-details"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-[15px] font-semibold text-slate-700 no-underline transition-all hover:border-slate-400 hover:text-slate-900"
                  >
                    Read Submission Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="submission-details"
          className="scroll-mt-24 bg-slate-50 py-20"
        >
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Submission Details
            </p>
            <h2 className="mt-4 text-left text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.025em] text-slate-900">
              What OpenReview Will Ask For
            </h2>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {submissionDetails.map((item) => (
                <article
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-7"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-500">
                    {item.label}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.72] text-slate-700">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Topics of Interest
            </p>
            <h2 className="mt-4 text-left text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.025em] text-slate-900">
              What Fits FMAI
            </h2>

            <div className="mx-auto mt-8 max-w-[840px] space-y-5 text-[17px] leading-[1.72] text-slate-600">
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

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {focusAreas.map((area, i) => (
                <article
                  key={area.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-7"
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
          </div>
        </section>

        <section className="bg-slate-900 py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 px-8 py-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
                Ready to Submit
              </p>
              <h2 className="mt-4 text-left text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.2] tracking-[-0.025em] text-slate-50">
                Take It to OpenReview
              </h2>
              <p className="mt-6 max-w-[720px] text-[17px] leading-[1.72] text-slate-400">
                The official FMAI submission flow is live on OpenReview. Keep
                this page open if you want to reference the deadline or field
                summary while you submit.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={site.openReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-[15px] font-semibold text-white no-underline transition-all hover:bg-indigo-500 hover:shadow-[0_0_0_3px_rgba(99,102,241,0.22)]"
                >
                  Submit on OpenReview
                </a>
                <p className="text-[14px] text-slate-400">
                  {site.submissionAccountNote}
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
