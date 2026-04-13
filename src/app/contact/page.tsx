import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { resources, site } from "@/lib/workshop-data";

export const metadata = {
  title: "FMAI | Contact",
};

export default function ContactPage() {
  return (
    <>
      <Navbar activePage="Contact" />
      <main className="pt-16">
        <section className="py-14">
          <div className="mx-auto max-w-[1154px] px-4">
            <h1>Contact</h1>

            <div className="mx-auto mt-8 max-w-[860px] text-center text-[18px] leading-[30px] text-[#201a14]">
              <p>
                This site is the public home for the FMAI workshop as details
                are finalized. Reach out if you want to discuss submissions,
                sponsorship, speaker logistics, or collaboration.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-[960px] gap-6 md:grid-cols-3">
              {resources.map((resource) => (
                <article
                  key={resource.label}
                  className="rounded-[28px] border border-[#d8d3ca] bg-white p-7"
                >
                  <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-[#7c6245]">
                    {resource.label}
                  </p>
                  <p className="mt-4 text-[17px] leading-[28px] text-[#2a2016]">
                    {resource.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-[860px] rounded-[28px] border border-[#d8d3ca] bg-[#f6f1e8] p-8 text-[18px] leading-[30px] text-[#201a14]">
              <p>
                General inquiries:{" "}
                <a href={`mailto:${site.contactEmails[0]}`}>{site.contactEmails[0]}</a>
              </p>
              <p className="mt-3">
                Program and organizer coordination:{" "}
                <a href={`mailto:${site.contactEmails[1]}`}>{site.contactEmails[1]}</a>
              </p>
              <p className="mt-5">
                We will add the final submission portal, sponsorship details,
                and workshop logistics here once they are public.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
