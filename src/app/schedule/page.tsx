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
        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Schedule</h1>

            <div className="mx-auto mt-10 max-w-[900px] space-y-4 text-center text-[18px] leading-[30px] text-[#1c1c1c]">
              <p>
                This is the current tentative schedule from the accepted FMAI
                workshop proposal.
              </p>
              <p>
                {site.venueNote}
              </p>
              <p className="italic">
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
              <table className="w-full border-collapse text-[16px] leading-[24px]">
                <thead>
                  <tr className="border border-[#d0d0d0] bg-[#f6f1e8]">
                    <th className="w-[170px] border border-[#d0d0d0] px-4 py-3 text-left font-bold">
                      Time
                    </th>
                    <th className="border border-[#d0d0d0] px-4 py-3 text-left font-bold">
                      Event
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr
                      key={row.time}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#fbf8f3]"}
                    >
                      <td className="border border-[#d0d0d0] px-4 py-3 align-top text-[#1c1c1c]">
                        {row.time}
                      </td>
                      <td className="border border-[#d0d0d0] px-4 py-3 text-[#1c1c1c]">
                        <strong>{row.event}</strong>
                        {row.detail && <span> - {row.detail}</span>}
                        {row.note && <p className="mt-2 text-[14px]">{row.note}</p>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mx-auto mt-10 max-w-[900px] rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-7 text-[17px] leading-[28px] text-[#2a2016]">
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
