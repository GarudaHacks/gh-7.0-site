"use client";

import CornerCube from "@/components/Cornercube";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import LaunchModal from "@/components/LaunchModal";

function Hyperspace() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Star = { x: number; y: number; z: number; pz: number };
    const STAR_COUNT = 320;
    const stars: Star[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      cx = w / 2;
      cy = h / 2;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const reset = (s: Star) => {
      s.x = (Math.random() - 0.5) * w;
      s.y = (Math.random() - 0.5) * h;
      s.z = Math.random() * w;
      s.pz = s.z;
    };

    resize();
    for (let i = 0; i < STAR_COUNT; i++) {
      const s = { x: 0, y: 0, z: 0, pz: 0 };
      reset(s);
      stars.push(s);
    }

    let raf = 0;
    const speed = 14;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#C4A9FF";
      ctx.strokeStyle = "#C4A9FF";

      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) {
          reset(s);
          continue;
        }
        const sx = cx + (s.x / s.z) * w;
        const sy = cy + (s.y / s.z) * w;
        const px = cx + (s.x / s.pz) * w;
        const py = cy + (s.y / s.pz) * w;

        const size = (1 - s.z / w) * 2.2;
        const alpha = Math.min(1, (1 - s.z / w) * 1.2);
        ctx.globalAlpha = alpha;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(render);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#C4A9FF";
      for (const s of stars) {
        const sx = cx + (s.x / s.z) * w;
        const sy = cy + (s.y / s.z) * w;
        const size = (1 - s.z / w) * 2.2;
        ctx.globalAlpha = Math.min(1, (1 - s.z / w) * 1.2);
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const onResize = () => {
      resize();
      if (prefersReduced) drawStatic();
    };
    window.addEventListener("resize", onResize);

    if (prefersReduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    />
  );
}

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
        @keyframes hudBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .hud-cursor {
          animation: hudBlink 1.1s steps(1) infinite;
        }
        @keyframes hudArrowBounce {
          0%, 100% { transform: translateY(0); opacity: 0.55; }
          50% { transform: translateY(5px); opacity: 1; }
        }
        .hud-arrows {
          animation: hudArrowBounce 1.6s ease-in-out infinite;
        }
      `}} />

      <div className="absolute inset-0 z-[5] bg-[#1E0A3C] pointer-events-none">
        <Hyperspace />
        <Image
          src="/image/Cover.PNG"
          alt="Hero Background"
          fill
          quality={100}
          priority
          sizes="1440px"
          className="object-cover object-center w-full h-full select-none pointer-events-none"
        />
        <div className="absolute inset-0 mix-blend-screen opacity-50 pointer-events-none">
          <Hyperspace />
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        <div className="flex flex-col items-center border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] justify-start gap-6 px-[120px] pt-[64px] pb-[120px] md:pt-[80px] min-h-[760px] md:min-h-[860px] lg:min-h-[920px] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" />

          <div
            className={`relative z-10 flex flex-col items-center justify-center transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative flex flex-col items-center justify-center px-6 pt-4 pb-8 md:pt-6 md:pb-12 gap-5">
              {/* reticle-framed title */}
              <div className="relative px-7 py-12 md:px-12 md:py-9">
                {/* corner ticks */}
                <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-[#7CF5E9] md:h-7 md:w-7" />
                <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-[#7CF5E9] md:h-7 md:w-7" />
                <span className="absolute left-0 bottom-0 h-5 w-5 border-l-2 border-b-2 border-[#7CF5E9] md:h-7 md:w-7" />
                <span className="absolute right-0 bottom-0 h-5 w-5 border-r-2 border-b-2 border-[#7CF5E9] md:h-7 md:w-7" />

                <h1 className="font-bold text-[#EAE6FF] text-center text-[32px] md:text-[40px] lg:text-[80px] leading-none tracking-[0.02em] whitespace-nowrap drop-shadow-[0_0_18px_rgba(124,245,233,0.5)]">
                  Garuda Hacks 7.0
                </h1>

                {/* inner date readout */}
                <div className="mt-4 text-center font-mono text-[#7CF5E9] text-[16px] md:text-[18px] tracking-[0.2em] opacity-90">
                  July 16-18 2026 · UMN
                </div>
              </div>

              {/* terminal readout line with blinking cursor */}
              <div className="font-mono text-[#C4B8F2] text-[14px] md:text-[18px] tracking-[0.12em] text-center">
                {"> Be part of Indonesia's largest hackathon"}
                <span className="hud-cursor text-[#7CF5E9]">_</span>
              </div>

              {/* HUD eyebrow — moved below to free up top space */}
              <div className="font-mono text-[#7CF5E9] text-[14px] md:text-[16px] tracking-[0.3em] drop-shadow-[0_0_8px_rgba(124,245,233,0.6)]">
                {"GH7.0 FLIGHT SYSTEM"}
              </div>

              {/* downward scroll-hint arrows */}
              <div className="hud-arrows mt-1 flex flex-col items-center leading-[0.6] text-[#7CF5E9] text-[18px] md:text-[22px] drop-shadow-[0_0_8px_rgba(124,245,233,0.6)]">
                <span>⌄</span>
                <span>⌄</span>
              </div>
            </div>

            <div
              className="z-20 relative flex flex-col items-center justify-center cursor-pointer mt-20 md:mt-28 group"
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