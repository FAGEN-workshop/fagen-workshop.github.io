import { site } from "@/lib/workshop-data";

export function Footer() {
  return (
    <footer className="border-t border-[#d9d3c8] bg-[#f6f1e8] py-10">
      <div className="mx-auto max-w-[1154px] px-4 text-center">
        <p className="text-[18px] font-semibold leading-[28px] text-[#2a2016]">
          {site.fullTitle}
        </p>
        <p className="mt-2 text-[16px] leading-[25px] text-[#5b4630]">
          {site.conferenceLabel}
        </p>
        <p className="mt-3 text-[15px] leading-[24px] text-[#6a533c]">
          Contact:{" "}
          <a href={`mailto:${site.contactEmails[0]}`}>{site.contactEmails[0]}</a>{" "}
          and <a href={`mailto:${site.contactEmails[1]}`}>{site.contactEmails[1]}</a>
        </p>
      </div>
    </footer>
  );
}
