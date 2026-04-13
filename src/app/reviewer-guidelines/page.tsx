import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { pcOverview, site } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Review Process",
};

export default function ReviewerGuidelinesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Review Process</h1>

            <div className="mx-auto mt-10 max-w-[860px] space-y-6 text-[18px] leading-[30px] text-[#201a14]">
              <p>
                Reviewer guidelines, area-chair responsibilities, and
                evaluation timelines will be published once the submission
                portal opens and the workshop review process is finalized.
              </p>
              <p>
                The accepted workshop proposal already commits to careful
                reviewer recruitment, conflict-of-interest filtering, load caps,
                and consistency checks for meta-review quality.
              </p>
              <p>{pcOverview}</p>
              <div className="rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-7">
                <p>
                  If you need to reach the organizers before the formal review
                  page is live, email{" "}
                  <a href={`mailto:${site.contactEmails[0]}`}>{site.contactEmails[0]}</a>{" "}
                  or{" "}
                  <a href={`mailto:${site.contactEmails[1]}`}>{site.contactEmails[1]}</a>.
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
