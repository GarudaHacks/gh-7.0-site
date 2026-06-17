"use client";

import CornerCube from "@/components/Cornercube";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import LaunchModal from "@/components/LaunchModal";

function AmbientStars() {
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

    // Bintang dibikin dikit biar minimalis dan elegan
    const isMobile = window.innerWidth < 768;
    const STAR_COUNT = isMobile ? 60 : 120;
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
    // Speed dilambatin banget biar feel-nya "cruising" santai
    const speed = isMobile ? 1.5 : 2.5;

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#EAE6FF";
      ctx.strokeStyle = "#EAE6FF";

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

        const size = (1 - s.z / w) * 1.5;
        const alpha = Math.min(0.8, 1 - s.z / w); // Opacity diturunin biar subtle
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
      ctx.fillStyle = "#EAE6FF";
      for (const s of stars) {
        const sx = cx + (s.x / s.z) * w;
        const sy = cy + (s.y / s.z) * w;
        const size = (1 - s.z / w) * 1.5;
        ctx.globalAlpha = Math.min(0.8, 1 - s.z / w);
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

    if (prefersReduced) drawStatic();
    else raf = requestAnimationFrame(render);

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
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isExpanded]);

  const points = [
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    {
      pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]",
    },
    {
      pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]",
    },
  ];

  return (
    <section className="w-full relative border-b border-[#C4A9FF] bg-[#0D0518]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes floatIdle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-idle {
          animation: floatIdle 4s ease-in-out infinite;
        }
        /* Efek scanline ala monitor retro/pesawat */
        .scanlines {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
          background-size: 100% 4px;
        }
      `,
        }}
      />

      {/* Layer Background */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <Image
          src="/image/Cover.PNG"
          alt="Hero Background"
          fill
          quality={100}
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full select-none opacity-40 mix-blend-screen"
        />
        <AmbientStars />
        <div className="absolute inset-0 scanlines opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0518] via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF] relative z-10">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        <div className="flex flex-col items-center justify-center border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] gap-6 px-4 py-20 min-h-[100svh] lg:min-h-[850px] relative">
          <div
            className={`relative z-10 flex flex-col items-center justify-center transition-all duration-1000 ease-out w-full ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Header / Text System */}
            <div className="relative flex flex-col items-center justify-center text-center gap-4 w-full">
              <div className="relative inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.15)] mb-2">
                {/* Efek kilap/pantulan cahaya khas kaca (iOS detail) */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                {/* Teks Minimalis */}
                <span className="relative z-10 font-sans font-medium text-white/90 text-[11px] sm:text-[13px] tracking-wide">
                  ASEAN Largest Hackathon
                </span>
              </div>

              <h1 className="font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#C4A9FF] text-[12vw] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-tight tracking-tight drop-shadow-lg px-2">
                Garuda Hacks 7.0
              </h1>

              <div className="font-mono text-[#EAE6FF] text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em]  mt-1">
                July 16-18 2026 <span className="mx-3 text-[#C4A9FF]">|</span>{" "}
                UMN
              </div>
            </div>

            {/* Cockpit / CTA Area */}
            <div
              className="z-20 relative flex flex-col items-center justify-center cursor-pointer mt-12 sm:mt-20 group w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => setIsExpanded(true)}
              role="button"
              tabIndex={0}
              aria-label="Initialize Cockpit"
              onKeyDown={(e) => e.key === "Enter" && setIsExpanded(true)}
            >
              {/* Glow Effect (Dipisahkan biar gambar utama tetep tajam) */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] max-w-[400px] h-[40vw] max-h-[250px] bg-[#874FFE] rounded-full blur-[80px] transition-all duration-700 pointer-events-none ${
                  isHovered ? "opacity-80 scale-110" : "opacity-40 scale-100"
                }`}
              />

              <div className="relative flex flex-col items-center animate-float-idle">
                {/* Gambar Kokpit UHD. 
                  Pakai tag img biasa tapi dihapus class mix-blend atau drop-shadow berlebihnya 
                  biar pure nampilin vector aslinya. 
                */}
                <img
                  src="/image/steering_1.svg"
                  alt="Launch Cockpit"
                  className={`relative z-20 w-[85vw] max-w-[320px] md:max-w-[480px] h-auto pointer-events-none select-none transition-transform duration-500 ease-out ${
                    isHovered
                      ? "scale-105 drop-shadow-[0_15px_30px_rgba(135,79,254,0.5)]"
                      : "scale-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                  }`}
                  // style={{ imageRendering: "high-quality" }}
                />

                {/* Button Initialize */}
                <div
                  className={`absolute -bottom-6 md:-bottom-10 flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0D0518]/90 backdrop-blur-md border transition-all duration-300 z-30 ${
                    isHovered
                      ? "border-[#7CF5E9] shadow-[0_0_20px_rgba(124,245,233,0.4)] scale-110"
                      : "border-[#874FFE]/60 shadow-lg text-[#EAE6FF]"
                  }`}
                >
                  <span
                    className={`text-xs md:text-sm font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-colors duration-300 ${
                      isHovered ? "text-[#7CF5E9]" : "text-[#EAE6FF]"
                    }`}
                  >
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
