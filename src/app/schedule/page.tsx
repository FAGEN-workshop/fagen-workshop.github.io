import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { schedule, site } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Schedule",
};

export default function SchedulePage() {
  return (
    <>
      <Navbar activePage="Schedule" />
      <main className="pt-16">
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Program
            </p>
            <h1 className="mt-4">Schedule</h1>

            <div className="mx-auto mt-8 max-w-[780px] space-y-4 text-center text-[17px] leading-[1.72] text-slate-600">
              <p>
                This is the current tentative schedule from the accepted FMAI
                workshop proposal.
              </p>
              <p>{site.venueNote}</p>
              <p className="italic text-slate-500">
                Keynotes are planned as 30 minutes of talk plus 10 minutes of
                Q&amp;A, with contributed spotlights and an extended poster
                session built into the day.
              </p>
              <p>
                Additional invited speakers have been confirmed after proposal
                acceptance, but the exact placement of those talks is not yet
                reflected in this tentative proposal schedule.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-[900px]">
              <table className="w-full border-collapse text-[15px] leading-[1.55]">
                <thead>
                  <tr className="border border-slate-200 bg-slate-100">
                    <th className="w-[160px] border border-slate-200 px-4 py-3 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-600">
                      Time
                    </th>
                    <th className="border border-slate-200 px-4 py-3 text-left text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-600">
                      Event
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr
                      key={row.time}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="border border-slate-200 px-4 py-3 align-top font-mono text-[13px] text-slate-500">
                        {row.time}
                      </td>
                      <td className="border border-slate-200 px-4 py-3 text-slate-700">
                        <strong className="font-semibold text-slate-900">
                          {row.event}
                        </strong>
                        {row.detail && (
                          <span className="text-slate-600"> — {row.detail}</span>
                        )}
                        {row.note && (
                          <p className="mt-1.5 text-[13px] text-slate-500">
                            {row.note}
                          </p>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mx-auto mt-10 max-w-[900px] rounded-xl border border-slate-200 bg-slate-50 p-7 text-[15px] leading-[1.72] text-slate-700">
              <p>
                We will update this page once ICML publishes the official
                workshop date, room assignment, and any final changes to the
                order of talks.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
