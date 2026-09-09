"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdownParts(targetTime: number, now: number): CountdownParts {
  const remaining = Math.max(0, targetTime - now);

  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
  };
}

function formatTime(value: number) {
  return value.toString().padStart(2, "0");
}

type ProgramCountdownProps = {
  targetDate: string;
};

export default function ProgramCountdown({ targetDate }: ProgramCountdownProps) {
  const targetTime = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const subscribe = useCallback((onStoreChange: () => void) => {
    const timer = window.setInterval(onStoreChange, SECOND);
    return () => window.clearInterval(timer);
  }, []);
  const now = useSyncExternalStore(
    subscribe,
    () => Date.now(),
    () => targetTime,
  );
  const countdown = useMemo(
    () => getCountdownParts(targetTime, now),
    [targetTime, now],
  );

  return (
    <p aria-live="polite" suppressHydrationWarning>
      {countdown.days} Days : {formatTime(countdown.hours)} Hours :{" "}
      {formatTime(countdown.minutes)} Minutes : {formatTime(countdown.seconds)}{" "}
      Seconds
    </p>
  );
}
