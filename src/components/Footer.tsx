import { site } from "@/lib/workshop-data";

export function Footer() {
  return (
    <footer className="border-t border-[#2c2c2e] bg-[#1d1d1f] py-12">
      <div className="mx-auto max-w-[1154px] px-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a3bdd8]">
          {site.conferenceLabel}
        </p>
        <p className="mt-3 text-[17px] font-semibold leading-[1.45] text-slate-100">
          {site.shortTitle} — Failure Modes in Agentic AI
        </p>
        <p className="mt-4 text-[14px] leading-[1.6] text-slate-500">
          Contact:{" "}
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-[#a3bdd8] hover:text-[#bfd1e4]"
          >
            {site.contactEmail}
          </a>
        </p>
      </div>
    </footer>
  );
}
