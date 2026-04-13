import type { Person } from "@/lib/workshop-data";
import { withBasePath } from "@/lib/site-path";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function PersonCard({
  person,
  compact = false,
}: {
  person: Person;
  compact?: boolean;
}) {
  const avatarSize = compact ? "h-20 w-20" : "h-28 w-28";
  const imageSrc = person.imageUrl ? withBasePath(person.imageUrl) : undefined;

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-[#d8d3ca] bg-white p-6 shadow-[0_14px_32px_rgba(52,39,22,0.06)]">
      <div className="flex items-start gap-4">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={person.name}
            className={`${avatarSize} rounded-full border border-[#d8d3ca] object-cover`}
          />
        ) : (
          <div
            className={`${avatarSize} flex shrink-0 items-center justify-center rounded-full border border-[#d8d3ca] bg-[linear-gradient(135deg,#f3eee4,#e5ddd0)] text-[22px] font-bold text-[#5b4630]`}
            aria-hidden="true"
          >
            {getInitials(person.name)}
          </div>
        )}

        <div className="min-w-0">
          <h2 className="text-left text-[24px] font-bold leading-[30px] text-[#3b2d1f]">
            {person.profileUrl ? (
              <a
                href={person.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:underline"
              >
                {person.name}
              </a>
            ) : (
              person.name
            )}
          </h2>
          <p className="mt-2 text-[16px] font-medium leading-[24px] text-[#5b4630]">
            {person.affiliation}
          </p>
          {person.statusLabel && (
            <p className="mt-2 inline-flex rounded-full bg-[#f3eee4] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6d5439]">
              {person.statusLabel}
            </p>
          )}
          {person.role && (
            <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#7c6245]">
              {person.role}
            </p>
          )}
          {person.focus && (
            <p className="mt-3 rounded-full bg-[#f3eee4] px-3 py-1 text-[13px] leading-[18px] text-[#5b4630]">
              {person.focus}
            </p>
          )}
        </div>
      </div>

      <p className="mt-5 text-[16px] leading-[26px] text-[#201a14]">{person.bio}</p>

      {person.assets && person.assets.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {person.assets.map((asset) => (
            <span
              key={asset}
              className="rounded-full border border-[#d8d3ca] bg-[#fbf8f3] px-3 py-1 text-[13px] leading-[18px] text-[#5b4630]"
            >
              {asset}
            </span>
          ))}
        </div>
      )}

      {person.note && (
        <p className="mt-4 text-[14px] leading-[22px] text-[#7b5e42]">
          {person.note}
        </p>
      )}
    </article>
  );
}
