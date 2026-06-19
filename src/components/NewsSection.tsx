import { SectionTitle } from "@/components/SectionTitle";
import { news } from "@/lib/workshop-data";

export function NewsSection() {
  const items = [...news].sort((a, b) => (a.iso < b.iso ? 1 : -1)).slice(0, 4);

  return (
    <section id="news" className="scroll-mt-24 bg-[#f5f5f7] py-20">
      <div className="mx-auto max-w-[1154px] px-4">
        <SectionTitle>News</SectionTitle>

        <div className="mt-10 max-w-[900px] divide-y divide-[#d8dde5] border-y border-[#d8dde5]">
          {items.map((item) => (
            <article
              key={item.iso}
              className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-[180px_1fr] sm:gap-6"
            >
              <time
                dateTime={item.iso}
                className="font-mono pt-0.5 text-[12.5px] uppercase leading-[1.5] tracking-[0.06em] text-[#4a6b94]"
              >
                {item.date}
              </time>
              <div>
                <h3 className="text-[16px] font-medium leading-[1.4] text-[#1d1d1f]">
                  {item.title}
                </h3>
                {item.body && (
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-slate-600">
                    {item.body}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link.href}
                    target={
                      item.link.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      item.link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-mono mt-3 inline-flex items-center gap-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#6b8fbf] no-underline transition-colors hover:text-[#4a6b94]"
                  >
                    {item.link.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
