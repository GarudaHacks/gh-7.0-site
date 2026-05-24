"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

interface TimeUnit {
  value: string;
  label: string;
}

function CountdownBox({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  const digits = value.toString().padStart(2, "0").split("");

  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="bg-transparent backdrop-blur-lg p-1 rounded-xl shadow-[#8036CB]">
        <div className="bg-[#F9F5FF] flex items-center justify-center w-[64px] h-[64px] md:w-[120px] md:h-[120px] rounded-lg overflow-hidden">
          <div className="flex">
            {digits.map((digit, index) => (
              <div
                key={index}
                className="relative h-[36px] md:h-[50px] lg:h-[80px] flex items-center justify-center overflow-hidden"
              >
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={digit}
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="font-medium text-[#221139] text-[36px] md:text-[50px] lg:text-[64px] tracking-[-2px] leading-none inline-block"
                  >
                    {digit}
                  </motion.span>
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-1 rounded-xl">
        <span className="font-semibold text-[#221139] text-[12px] md:text-[14px] lg:text-[16px]">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function CountdownSection() {
  const target = new Date("2026-07-16T00:00:00").getTime();

  const getTimeLeft = () => {
    const now = Date.now();
    const diff = Math.max(target - now, 0);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTime(getTimeLeft());
    setIsMounted(true);

    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units: TimeUnit[] = [
    { value: pad(time.days), label: "DAYS" },
    { value: pad(time.hours), label: "HOURS" },
    { value: pad(time.minutes), label: "MINUTES" },
    { value: pad(time.seconds), label: "SECONDS" },
  ];

  if (!isMounted) {
    return (
      <section className="border-b border-[#C4A9FF] relative opacity-0">
        <div className="mx-auto max-w-[1440px] h-[150px]"></div>
      </section>
    );
  }

  return (
    <section className="border-b border-[#C4A9FF] relative">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="flex-row border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] flex gap-2 md:gap-6 items-center justify-center px-6 py-6">
          {units.map((unit) => (
            <CountdownBox
              key={unit.label}
              value={unit.value}
              label={unit.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
