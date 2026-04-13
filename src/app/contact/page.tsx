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
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1154px] px-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Contact
            </p>
            <h1 className="mt-4">Contact</h1>

            <p className="mx-auto mt-8 max-w-[740px] text-center text-[17px] leading-[1.72] text-slate-600">
              This site is the public home for the FMAI workshop as details are
              finalized. Reach out if you want to discuss submissions,
              sponsorship, speaker logistics, or collaboration.
            </p>

            <div className="mx-auto mt-12 grid max-w-[960px] gap-6 sm:grid-cols-2">
              {resources.map((resource) => (
                <article
                  key={resource.label}
                  className="rounded-xl border border-slate-200 bg-white p-7"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-indigo-500">
                    {resource.label}
                  </p>
                  <p className="mt-4 text-[15px] leading-[1.72] text-slate-700">
                    {resource.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-[860px] rounded-xl border border-slate-200 bg-slate-50 p-8 text-[15px] leading-[1.72] text-slate-700">
              <p>
                General inquiries:{" "}
                <a href={`mailto:${site.contactEmails[0]}`}>
                  {site.contactEmails[0]}
                </a>
              </p>
              <p className="mt-3">
                Program and organizer coordination:{" "}
                <a href={`mailto:${site.contactEmails[1]}`}>
                  {site.contactEmails[1]}
                </a>
              </p>
              <p className="mt-5 text-slate-600">
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
