"use client";

import CornerCube from "@/components/Cornercube";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Heroes() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      setIsExpanded(false);
    }
  };

  const points = [
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]"},
  ];

  return (
    <section className="w-full relative border-b border-[#C4A9FF]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/Cover.PNG"
          alt="Hero Background"
          fill
          className="object-cover object-center w-full h-full select-none pointer-events-none"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        <div className="flex flex-col items-center border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] justify-center gap-6 p-[120px] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" />

          <div
            className={`relative flex flex-col items-center justify-center transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
        
            <div className="flex flex-col items-center justify-center px-12 py-12 md:py-32 gap-4">
              <h1 className="font-bold text-[#221139] text-center text-[64px] md:text-[80px] lg:text-[120px] leading-none whitespace-nowrap">
                Garuda <br className="block md:hidden" /> Hacks 7.0
              </h1>
              <div className="flex flex-col items-center gap-0">
                <p className="font-medium text-[#221139] text-[16px] md:text-[18px] text-center">
                  July 24 - 26 | 2026 <br className="block md:hidden" /> at
                  Universitas Multimedia Nusantara
                </p>
                <p className="font-medium text-[#221139] text-[16px] md:text-[18px] text-center">
                  Be part of Indonesia's largest hackathon
                </p>
              </div>
            </div>

            <div
              className="z-20 relative flex items-center justify-center cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsExpanded(true)}
              role="button"
              tabIndex={0}
              aria-label="Open navigation panel"
              onKeyDown={(e) => e.key === "Enter" && setIsExpanded(true)}
            >
         
              <div
                className={`absolute -inset-4 rounded-xl pointer-events-none bg-radial-gradient transition-opacity duration-400 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`absolute -inset-2 rounded-xl pointer-events-none borde transition-all duration-300 ${
                  isHovered
                    ? "opacity-100 scale-105 animate-pulse"
                    : "opacity-0 scale-100"
                }`}
              />

              <img
                src="/image/steering_1.svg"
                alt="Steer"
                className={`w-[320px] md:w-[420px] h-auto pointer-events-none select-none transition-all duration-500 ease-out ${
                  isHovered
                    ? "scale-110 drop-shadow-[0_0_18px_#874FFEAA]"
                    : "scale-100 drop-shadow-lg text-[#874FFE]/20]"
                }`}
              />

              <span
                className={`absolute -bottom-12 left-1/2 -translate-x-1/2 text-[16px] font-semibold tracking-[0.12em] text-[#7C3AED] uppercase whitespace-nowrap pointer-events-none transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                Press to continue
              </span>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F0622]/75 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
        >
  
          <button
            onClick={() => setIsExpanded(false)}
            aria-label="Close panel"
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full border border-[#C4A9FF]/40 text-[#C4A9FF] bg-transparent text-lg cursor-pointer transition-all duration-200 hover:bg-[#C4A9FF]/15 hover:rotate-90"
          >
            ✕
          </button>

   
          <div className="relative inline-flex items-center justify-center animate-popIn">
       
            <img
              src="/image/steering_2.svg"
              alt="Cockpit panel"
              className="w-full md:w-[min(90vw,800px)] h-auto pointer-events-none select-none drop-shadow-xl"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 items-center">
              <a
                href="#apply"
                onClick={() => setIsExpanded(false)}
                className="block w-[180px] py-[12px] text-center bg-[#8B5CF6]/20 border rounded-md text-[#874FFE] hover:text-[#F9F5FF] font-semibold text-[16px] tracking-[0.08em] uppercase no-underline cursor-pointer transition-all duration-200 hover:bg-[#874FFE] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#8B5CF6]"
              >
                Start Now
              </a>

              <a
                href="#guidebook"
                onClick={() => setIsExpanded(false)}
                className="block w-[180px] py-[12px] text-center bg-transparent border border-[#874FFE]/35 rounded-md text-[#874FFE] font-medium text-[16px] tracking-[0.08em] uppercase no-underline cursor-pointer transition-all duration-200 hover:bg-[#C4A9FF]/10 hover:-translate-y-0.5 hover:border-[#874FFE]"
              >
                Instruction
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
