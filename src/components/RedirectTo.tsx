"use client";

import { useEffect } from "react";

import { withBasePath } from "@/lib/site-path";

interface RedirectToProps {
  target: string;
}

export function RedirectTo({ target }: RedirectToProps) {
  const resolved = withBasePath(target);

  useEffect(() => {
    window.location.replace(resolved);
  }, [resolved]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f7] px-4 text-center">
      <div>
        <p className="text-[15px] text-slate-600">
          This page has moved. Redirecting to{" "}
          <a
            href={resolved}
            className="text-[#4a6b94] underline decoration-slate-400 underline-offset-2 hover:decoration-[#6b8fbf]"
          >
            {resolved}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
