"use client";

import CornerCube from "@/components/Cornercube";
import Image from "next/image";
import { useRef, useState } from "react";

type Winner = {
  id: string;
  title: string;
  team: string;
  cdSrc: string; // transparent "song png" asset for this winner
  youtubeId: string; // just the video ID, e.g. "dQw4w9WgXcQ"
  top: string;
  left: string;
  rotate: string;
  z: number;
  size: string; // tailwind width class, discs look better at slightly different sizes
};

// TODO: swap cdSrc per winner with your actual transparent song PNGs,
// and drop in each winner's real YouTube video ID.
const WINNERS: Winner[] = [
  {
    id: "w1",
    title: "Project Alpha",
    team: "Team Rocket",
    cdSrc: "/image/song-cd-1.png",
    youtubeId: "VIDEO_ID_1",
    top: "4%",
    left: "2%",
    rotate: "-9deg",
    z: 10,
    size: "w-[190px] md:w-[240px]",
  },
  {
    id: "w2",
    title: "Project Beta",
    team: "Team Comet",
    cdSrc: "/image/song-cd-2.png",
    youtubeId: "VIDEO_ID_2",
    top: "30%",
    left: "48%",
    rotate: "7deg",
    z: 20,
    size: "w-[210px] md:w-[270px]",
  },
  {
    id: "w3",
    title: "Transwinner",
    team: "Anu-anu",
    cdSrc: "/image/CD.jpg",
    youtubeId: "GBIIQ0kP15E",
    top: "58%",
    left: "12%",
    rotate: "-4deg",
    z: 15,
    size: "w-[170px] md:w-[220px]",
  },
];

// Screen-cutout rectangle inside the WMP player asset, measured as % of the
// player image's own box (not the whole section). Recompute if you swap the asset.
const SCREEN_RECT = {
  left: "9.4%",
  top: "12.2%",
  width: "84.2%",
  height: "61.1%",
};

const FLIGHT_MS = 700;

export default function Winners() {
  const containerRef = useRef<HTMLDivElement>(null);
  const discRefs = useRef<(HTMLDivElement | null)[]>([]);
  const screenRef = useRef<HTMLDivElement>(null);

  const [flying, setFlying] = useState<{
    index: number;
    dx: number;
    dy: number;
    scale: number;
  } | null>(null);
  const [active, setActive] = useState<number | null>(null);

  const handleDiscClick = (i: number) => {
    if (flying) return; // ignore clicks mid-flight
    if (active === i) return; // already playing this one

    const discEl = discRefs.current[i];
    const screenEl = screenRef.current;
    if (!discEl || !screenEl) return;

    const discRect = discEl.getBoundingClientRect();
    const screenRect = screenEl.getBoundingClientRect();

    const dx =
      screenRect.left + screenRect.width / 2 - (discRect.left + discRect.width / 2);
    const dy =
      screenRect.top + screenRect.height / 2 - (discRect.top + discRect.height / 2);
    const scale =
      (Math.min(screenRect.width, screenRect.height) /
        Math.max(discRect.width, discRect.height)) *
      0.55;

    // if something else is already playing, clear it immediately so the
    // screen goes back to "ready" while the new disc flies in
    setActive(null);
    setFlying({ index: i, dx, dy, scale });

    window.setTimeout(() => {
      setActive(i);
      setFlying(null);
    }, FLIGHT_MS);
  };

  const handleEject = () => {
    setActive(null);
    setFlying(null);
  };

  const getDiscStyle = (i: number): React.CSSProperties => {
    if (flying && flying.index === i) {
      return {
        transform: `translate(${flying.dx}px, ${flying.dy}px) scale(${flying.scale})`,
        opacity: 0,
        transition: `transform ${FLIGHT_MS}ms cubic-bezier(0.4,0,0.2,1), opacity ${FLIGHT_MS}ms ease-in`,
        pointerEvents: "none",
      };
    }
    if (active === i) {
      return {
        opacity: 0,
        transition: "opacity 200ms ease",
        pointerEvents: "none",
      };
    }
    return {
      transform: "translate(0px, 0px) scale(1)",
      opacity: 1,
      transition: "transform 300ms ease, opacity 300ms ease",
    };
  };

  const activeWinner = active !== null ? WINNERS[active] : null;

  return (
    <section className="w-full relative border-b border-[#C4A9FF] bg-[#1E0A3C]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes floatIdleDisc {
          0% { transform: translateY(0px) rotate(var(--disc-rotate)); }
          50% { transform: translateY(-6px) rotate(var(--disc-rotate)); }
          100% { transform: translateY(0px) rotate(var(--disc-rotate)); }
        }
        .animate-float-disc {
          animation: floatIdleDisc 3.4s ease-in-out infinite;
        }
        @keyframes readyBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.35; }
        }
        .ready-blink {
          animation: readyBlink 1.4s steps(1) infinite;
        }
      `,
        }}
      />

      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        <CornerCube className="-left-[-31px] -top-[10px] hidden xl:flex z-40 pointer-events-none" />
        <CornerCube className="-right-[-31px] -top-[10px] hidden xl:flex z-40 pointer-events-none" />

        <div className="flex flex-col items-center gap-4 px-4 md:px-[60px] pt-[64px] pb-8 md:pt-[80px]">
          <div className="font-mono text-[#7CF5E9] text-[13px] md:text-[15px] tracking-[0.3em] drop-shadow-[0_0_8px_rgba(124,245,233,0.6)]">
            {"GH7.0 MISSION ARCHIVE"}
          </div>

          <div className="relative px-6 py-6 md:px-10 md:py-7">
            <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-[#7CF5E9] md:h-6 md:w-6" />
            <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-[#7CF5E9] md:h-6 md:w-6" />
            <span className="absolute left-0 bottom-0 h-5 w-5 border-l-2 border-b-2 border-[#7CF5E9] md:h-6 md:w-6" />
            <span className="absolute right-0 bottom-0 h-5 w-5 border-r-2 border-b-2 border-[#7CF5E9] md:h-6 md:w-6" />

            <h2 className="font-bold text-[#EAE6FF] text-center text-[28px] md:text-[44px] leading-none tracking-[0.02em] drop-shadow-[0_0_18px_rgba(124,245,233,0.5)]">
              Winning Crews
            </h2>
          </div>

          <div className="font-mono text-[#C4B8F2] text-[13px] md:text-[15px] tracking-[0.1em] text-center">
            {"> Tap a track to play the winning submission"}
          </div>
        </div>

        {/* stage: discs + player */}
        <div
          ref={containerRef}
          className="relative w-full min-h-[560px] md:min-h-[680px] pb-16"
        >
          {/* player frame, positioned like the laptop in the reference */}
          <div className="absolute left-1/2 md:left-[8%] top-[8%] -translate-x-1/2 md:translate-x-0 w-[280px] md:w-[380px] z-30">
            <div className="relative">
              <img
                src="/image/wmp.jpg"
                alt="Player"
                className="w-full h-auto select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />

              {/* screen cutout overlay */}
              <div
                ref={screenRef}
                className="absolute overflow-hidden bg-black flex items-center justify-center"
                style={SCREEN_RECT}
              >
                {activeWinner ? (
                  <iframe
                    key={activeWinner.id}
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${activeWinner.youtubeId}?autoplay=1&rel=0`}
                    title={activeWinner.title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                ) : (
                  <div className="font-mono text-[#7CF5E9] text-[10px] md:text-[13px] tracking-[0.25em] text-center px-2">
                    <span className="ready-blink">{"READY"}</span>
                    <div className="text-[#C4B8F2] mt-1 text-[8px] md:text-[10px] tracking-[0.15em] normal-case">
                      {"select a track"}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {activeWinner && (
              <div className="mt-3 flex items-center justify-between gap-3">
                <div className="font-mono text-[11px] md:text-[13px] text-[#EAE6FF]">
                  <span className="text-[#7CF5E9]">{"NOW PLAYING · "}</span>
                  {activeWinner.title}
                  <span className="text-[#C4B8F2]">{` — ${activeWinner.team}`}</span>
                </div>
                <button
                  onClick={handleEject}
                  className="shrink-0 font-mono text-[10px] md:text-[11px] tracking-[0.15em] uppercase text-[#EAE6FF] border border-[#874FFE]/60 rounded-full px-3 py-1.5 hover:border-[#C4A9FF] hover:bg-[#874FFE]/20 transition-colors"
                >
                  {"Eject"}
                </button>
              </div>
            )}
          </div>

          {/* scattered discs */}
          {WINNERS.map((w, i) => (
            <div
              key={w.id}
              ref={(el) => {
                discRefs.current[i] = el;
              }}
              className={`absolute ${w.size} cursor-pointer group hidden md:block`}
              style={{
                top: w.top,
                left: w.left,
                zIndex: w.z,
                ...getDiscStyle(i),
              }}
              onClick={() => handleDiscClick(i)}
              role="button"
              tabIndex={0}
              aria-label={`Play ${w.title}`}
              onKeyDown={(e) => e.key === "Enter" && handleDiscClick(i)}
            >
              <div
                className="animate-float-disc"
                style={{ ["--disc-rotate" as string]: w.rotate }}
              >
                <img
                  src={w.cdSrc}
                  alt={w.title}
                  className="w-full h-auto select-none pointer-events-none transition-all duration-300 ease-out drop-shadow-[0_10px_20px_rgba(34,17,57,0.5)] group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(135,79,254,0.6)]"
                />
              </div>
              <div className="mt-2 text-center font-mono text-[10px] md:text-[11px] tracking-[0.15em] text-[#C4B8F2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {w.title}
              </div>
            </div>
          ))}

          {/* mobile fallback: simple stacked list instead of absolute scatter */}
          <div className="flex flex-col gap-6 items-center md:hidden mt-6 relative z-20">
            {WINNERS.map((w, i) => (
              <div
                key={`m-${w.id}`}
                className="w-[160px] cursor-pointer"
                onClick={() => handleDiscClick(i)}
                style={getDiscStyle(i)}
              >
                <img
                  src={w.cdSrc}
                  alt={w.title}
                  className="w-full h-auto select-none pointer-events-none"
                />
                <div className="mt-2 text-center font-mono text-[10px] tracking-[0.15em] text-[#C4B8F2]">
                  {w.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}