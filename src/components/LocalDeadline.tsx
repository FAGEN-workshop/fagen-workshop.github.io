"use client";

import { useSyncExternalStore } from "react";

interface LocalDeadlineProps {
  isoUtc: string;
}

function subscribe() {
  return () => {};
}

const getIsClient = () => true;
const getServerIsClient = () => false;

export function LocalDeadline({ isoUtc }: LocalDeadlineProps) {
  const isClient = useSyncExternalStore(
    subscribe,
    getIsClient,
    getServerIsClient,
  );

  if (!isClient) return null;

  const date = new Date(isoUtc);
  if (Number.isNaN(date.getTime())) return null;

  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return <>Your local time: {formatter.format(date)}</>;
}
