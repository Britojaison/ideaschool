"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

export default function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      setTimeLeft(newTimeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`countdownContainer ${className}`}>
      <div className="countdownItem">
        <span className="countdownValue">{timeLeft.days.toString().padStart(2, "0")}</span>
        <span className="countdownLabel">Days</span>
      </div>
      <span className="countdownSeparator">:</span>
      <div className="countdownItem">
        <span className="countdownValue">{timeLeft.hours.toString().padStart(2, "0")}</span>
        <span className="countdownLabel">Hours</span>
      </div>
      <span className="countdownSeparator">:</span>
      <div className="countdownItem">
        <span className="countdownValue">{timeLeft.minutes.toString().padStart(2, "0")}</span>
        <span className="countdownLabel">Mins</span>
      </div>
      <span className="countdownSeparator">:</span>
      <div className="countdownItem">
        <span className="countdownValue">{timeLeft.seconds.toString().padStart(2, "0")}</span>
        <span className="countdownLabel">Secs</span>
      </div>
    </div>
  );
}
