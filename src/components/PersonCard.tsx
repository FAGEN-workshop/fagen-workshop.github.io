"use client";

import { useRef } from "react";

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
  const cardRef = useRef<HTMLElement>(null);
  const avatarSize = compact ? "h-20 w-20" : "h-28 w-28";
  const imageSrc = person.imageUrl ? withBasePath(person.imageUrl) : undefined;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 5;
    const rotateY = (x - 0.5) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.012)`;
    card.style.transition = "transform 0.1s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
    card.style.transition = "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.04),0_4px_24px_rgba(15,23,42,0.03)] transition-shadow hover:shadow-[0_8px_32px_rgba(15,23,42,0.08),0_2px_8px_rgba(15,23,42,0.04)] will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-start gap-4">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={person.name}
            className={`${avatarSize} shrink-0 rounded-full border border-slate-200 object-cover`}
          />
        ) : (
          <div
            className={`${avatarSize} flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-[20px] font-bold text-slate-500`}
            aria-hidden="true"
          >
            {getInitials(person.name)}
          </div>
        )}

        <div className="min-w-0">
          <h2 className="text-left text-[19px] font-semibold leading-[1.3] text-slate-900">
            {person.profileUrl ? (
              <a
                href={person.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-indigo-600 hover:underline"
              >
                {person.name}
              </a>
            ) : (
              person.name
            )}
          </h2>
          <p className="mt-1 text-[13px] font-medium leading-[1.5] text-slate-500">
            {person.affiliation}
          </p>
          {person.statusLabel && (
            <span className="mt-2 inline-flex rounded-full bg-indigo-50 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-indigo-600">
              {person.statusLabel}
            </span>
          )}
          {person.role && (
            <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-indigo-500">
              {person.role}
            </p>
          )}
          {person.focus && (
            <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-0.5 text-[12px] leading-[1.6] text-slate-600">
              {person.focus}
            </span>
          )}
        </div>
      </div>

      <p className="mt-5 text-[15px] leading-[1.68] text-slate-600">{person.bio}</p>

      {person.assets && person.assets.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {person.assets.map((asset) => (
            <span
              key={asset}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-0.5 text-[12px] leading-[1.5] text-slate-600"
            >
              {asset}
            </span>
          ))}
        </div>
      )}

      {person.note && (
        <p className="mt-4 text-[13px] leading-[1.6] text-slate-400">
          {person.note}
        </p>
      )}
    </article>
  );
}
