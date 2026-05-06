"use client";

import { useEffect, useMemo, useState } from "react";

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

function getCountdownParts(targetTime: number): CountdownParts {
  const remaining = Math.max(0, targetTime - Date.now());

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
  const [countdown, setCountdown] = useState<CountdownParts>(() =>
    getCountdownParts(targetTime)
  );

  useEffect(() => {
    const updateCountdown = () => setCountdown(getCountdownParts(targetTime));

    updateCountdown();
    const timer = window.setInterval(updateCountdown, SECOND);

    return () => window.clearInterval(timer);
  }, [targetTime]);

  return (
    <p aria-live="polite">
      {countdown.days} Days : {formatTime(countdown.hours)} Hours :{" "}
      {formatTime(countdown.minutes)} Minutes : {formatTime(countdown.seconds)}{" "}
      Seconds
    </p>
  );
}
