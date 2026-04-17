import { useEffect, useState } from "react";

export default function Timer({ startTime, status }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (status === "running" && startTime) {
      interval = setInterval(() => {
        const seconds = Math.floor(
          (Date.now() - new Date(startTime)) / 1000
        );
        setTime(seconds);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [startTime, status]);

  return <p>⏱ {time}s</p>;
}