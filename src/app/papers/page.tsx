import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Program and Proceedings",
};

export default function PapersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Program and Proceedings</h1>

            <div className="mx-auto mt-10 max-w-[860px] space-y-6 text-[18px] leading-[30px] text-[#201a14]">
              <p>
                Accepted papers, spotlight selections, poster details, and any
                formal proceedings information will be published here after the
                review process is complete.
              </p>
              <p>
                For now, the best place to track the workshop is the main site
                and the call-for-contributions page. We will update this page
                once final decisions, awards, and artifact links are public.
              </p>
              <div className="rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-7">
                <p>
                  Questions about this page can be sent to{" "}
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
