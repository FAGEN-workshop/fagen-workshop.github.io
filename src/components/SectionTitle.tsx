interface SectionTitleProps {
  children: React.ReactNode;
  /** Use the dark variant on dark section backgrounds (e.g. Contact). */
  tone?: "light" | "dark";
}

export function SectionTitle({ children, tone = "light" }: SectionTitleProps) {
  const isDark = tone === "dark";
  const textColor = isDark ? "text-slate-50" : "text-[#1d1d1f]";
  const borderColor = isDark ? "border-slate-50/70" : "border-[#1d1d1f]";

  return (
    <h2
      className={`font-serif inline-block border-b-2 pb-3 text-[clamp(22px,2.4vw,30px)] font-bold leading-[1.3] tracking-[-0.005em] ${textColor} ${borderColor}`}
    >
      {children}
    </h2>
  );
}
