import { site } from "@/lib/workshop-data";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12">
      <div className="mx-auto max-w-[1154px] px-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-400">
          {site.conferenceLabel}
        </p>
        <p className="mt-3 text-[17px] font-semibold leading-[1.45] text-slate-100">
          {site.shortTitle} — Failure Modes in Agentic AI
        </p>
        <p className="mt-4 text-[14px] leading-[1.6] text-slate-500">
          Contact:{" "}
          <a
            href={`mailto:${site.contactEmails[0]}`}
            className="text-indigo-400 hover:text-indigo-300"
          >
            {site.contactEmails[0]}
          </a>{" "}
          and{" "}
          <a
            href={`mailto:${site.contactEmails[1]}`}
            className="text-indigo-400 hover:text-indigo-300"
          >
            {site.contactEmails[1]}
          </a>
        </p>
      </div>
    </footer>
  );
}
