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

interface AvatarCardProps {
  person: Person;
  showFocus?: boolean;
}

export function AvatarCard({ person, showFocus = false }: AvatarCardProps) {
  const imageSrc = person.imageUrl ? withBasePath(person.imageUrl) : undefined;

  const avatar = imageSrc ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imageSrc}
      alt={person.name}
      style={{ objectPosition: person.imagePosition ?? "center" }}
      className="h-36 w-36 rounded-full border border-slate-200 object-cover"
    />
  ) : (
    <div
      className="flex h-36 w-36 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-[28px] font-bold text-slate-500"
      aria-hidden="true"
    >
      {getInitials(person.name)}
    </div>
  );

  return (
    <div className="flex w-44 flex-col items-center text-center">
      {person.profileUrl ? (
        <a
          href={person.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline transition-transform hover:scale-[1.03]"
        >
          {avatar}
        </a>
      ) : (
        avatar
      )}

      <p className="mt-4 text-[16px] font-semibold leading-[1.3]">
        {person.profileUrl ? (
          <a
            href={person.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a6b94] no-underline hover:text-[#6b8fbf] hover:underline"
          >
            {person.name}
          </a>
        ) : (
          <span className="text-[#1d1d1f]">{person.name}</span>
        )}
      </p>

      <p className="mt-1.5 text-[13px] leading-[1.5] text-slate-500">
        {person.affiliation}
      </p>

      {showFocus && person.focus && (
        <p className="mt-2 max-w-[200px] text-[12px] leading-[1.5] text-slate-400">
          {person.focus}
        </p>
      )}
    </div>
  );
}
