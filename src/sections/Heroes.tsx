"use client";

import CornerCube from "@/components/Cornercube";
import Image from "next/image";
import { useState, useEffect } from "react";
import LaunchModal from "@/components/LaunchModal";

export default function Heroes() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const points = [
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]"},
  ];

  return (
    <section className="w-full relative border-b border-[#C4A9FF]">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatIdle {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-idle {
          animation: floatIdle 3s ease-in-out infinite;
        }
      `}} />

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
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex flex-col items-center justify-center px-12 py-12 md:py-24 gap-4">
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
              className="z-20 relative flex flex-col items-center justify-center cursor-pointer mt-8 md:mt-12 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsExpanded(true)}
              role="button"
              tabIndex={0}
              aria-label="Initialize Cockpit"
              onKeyDown={(e) => e.key === "Enter" && setIsExpanded(true)}
            >
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[150px] md:h-[200px] bg-[#874FFE] rounded-[100%] blur-[60px] md:blur-[80px] transition-opacity duration-500 pointer-events-none ${
                  isHovered ? "opacity-60" : "opacity-30"
                }`}
              />

              <div className="relative animate-float-idle">
                <img
                  src="/image/steering_1.svg"
                  alt="Launch Cockpit"
                  className={`relative z-10 w-[340px] md:w-[460px] h-auto pointer-events-none select-none transition-all duration-500 ease-out ${
                    isHovered ? "scale-105 drop-shadow-[0_0_25px_rgba(135,79,254,0.6)]" : "scale-100 drop-shadow-[0_10px_20px_rgba(34,17,57,0.4)]"
                  }`}
                />
                
                <div 
                  className={`absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center px-6 py-2.5 rounded-full bg-[#1E0A3C]/80 backdrop-blur-sm border border-[#874FFE]/50 shadow-[0_0_15px_rgba(135,79,254,0.3)] transition-all duration-300 z-20 ${
                    isHovered ? "scale-110 border-[#C4A9FF]" : "animate-pulse"
                  }`}
                >
                  <span className="text-[13px] md:text-[15px] font-bold tracking-[0.15em] text-white uppercase whitespace-nowrap">
                    Initialize Launch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isExpanded && <LaunchModal onClose={() => setIsExpanded(false)} />}
    </section>
  );
}