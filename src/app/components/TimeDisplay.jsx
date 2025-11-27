"use client";
import { useState, useEffect } from "react";

export default function TimeDisplay({
  timeZone = "America/Toronto",
  format = "12h",
  className = "",
  showSeconds = false,
  showDate = false,
  showTimeZone = false,
  showPulse = false,
}) {
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
    ampm: "",
    date: "",
    timeZone: "",
    pulse: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: format === "12h" ? "2-digit" : "numeric",
        minute: "2-digit",
        second: showSeconds ? "2-digit" : undefined,
        hour12: format === "12h",
        ...(showDate && {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      });

      const parts = formatter.formatToParts(now);
      const hour = parts.find((p) => p.type === "hour")?.value || "";
      const minute = parts.find((p) => p.type === "minute")?.value || "";
      const second = parts.find((p) => p.type === "second")?.value || "";
      const ampm = parts.find((p) => p.type === "dayPeriod")?.value || "";
      const date = showDate ? formatter.format(now) : "";
      const tz = showTimeZone ? timeZone.split("/").pop() : "";

      setTime({ hour, minute, second, ampm, date, timeZone: tz });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone, format, showSeconds, showDate, showTimeZone]);

  return (
    <div
      className={`flex flex-row gap-2 justify-start items-center italic w-fit font-instrument ${className}`}
    >
      {showDate && <span className="mr-2">{time.date}</span>}
      <span>
        {time.hour}
        <span className="animate-blink">:</span>
        {time.minute}
        {showSeconds && <span className="animate-blink">:</span>}
        {showSeconds && time.second}
        {format === "12h" && <span className="ml-1">{time.ampm}</span>}
      </span>
      {showTimeZone && <span className="ml-1">({time.timeZone})</span>}
    </div>
  );
}
