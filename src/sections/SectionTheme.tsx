"use client";

import { useState, useEffect } from "react";
import StickerPeel from "@/components/StickerPeel";

type Segment = { text: string; bold?: boolean };

// first line is always shown (static); the rest type out on Read More
const firstLine: Segment[] = [
  {
    text: `As the world faces rising healthcare inequality, increasing climate-related disasters, global food insecurity, and growing concerns over public safety, nations are being challenged to build stronger and more resilient systems for the future.`,
  },
];

const expandedLines: Segment[][] = [
  [
    {
      text: `Indonesia faces structural challenges across health equity, public safety, and food production. Long-term national stability depends on how we strengthen these three foundational pillars. We must build reliable systems that protect public health, minimize regional vulnerabilities, and stabilize the agricultural economy so every community can thrive.`,
    },
  ],
  [
    { text: `This year’s theme focuses on developing sustainable solutions for ` },
    { text: `Health, Safety, and Resilience, and Agriculture`, bold: true },
    {
      text: `. You are challenged to create functional tools that address regional disparities and support vulnerable populations. Your work will directly contribute to building a more stable, self-sufficient, and secure future for Indonesia.`,
    },
  ],
];

const totalChars = expandedLines.reduce(
  (n, line) => n + line.reduce((m, s) => m + s.text.length, 0),
  0
);

export default function SectionTheme() {
  const [isReadMore, setIsReadMore] = useState(false);
  const [typed, setTyped] = useState(0);

  // typewriter — faster terminal pace (2 chars per ~16ms)
  useEffect(() => {
    if (!isReadMore) {
      setTyped(0);
      return;
    }
    if (typed >= totalChars) return;
    const id = setTimeout(() => setTyped((t) => t + 2), 16);
    return () => clearTimeout(id);
  }, [isReadMore, typed]);

  const isTyping = isReadMore && typed < totalChars;

  // reveal expanded lines based on typed count
  let remaining = typed;
  const renderedExpanded = expandedLines.map((line) => {
    const segs = line.map((seg) => {
      if (remaining <= 0) return { ...seg, shown: "" };
      const shown = seg.text.slice(0, remaining);
      remaining -= seg.text.length;
      return { ...seg, shown };
    });
    const lineShown = segs.reduce((m, s) => m + s.shown.length, 0);
    return { segs, started: lineShown > 0 };
  });

  const lastExpandedVisible = renderedExpanded.reduce(
    (acc, l, idx) => (l.started ? idx : acc),
    -1
  );

  return (
    <section
      id="theme"
      className="w-full relative border-b border-[#C4A9FF] overflow-hidden"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes themeTermCursor { 0%,49%{opacity:1} 50%,100%{opacity:0} }
        .theme-term-cursor { animation: themeTermCursor 0.85s steps(1) infinite; }
      `,
        }}
      />
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="relative px-4 md:px-12 py-16 md:py-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] flex flex-col gap-6 md:gap-8 items-start w-full">
          {/* Sticker kiri */}
          <div className="hidden md:block absolute left-3 lg:left-8 top-[35%] z-10 w-[70px] h-[70px] pointer-events-none">
            <StickerPeel
              imageSrc="/stickers/garudie1.png"
              width={70}
              rotate={-18}
              peelBackHoverPct={15}
              peelBackActivePct={25}
              shadowIntensity={0.25}
              lightingIntensity={0.1}
              initialPosition={{ x: 0, y: 0 }}
              peelDirection={0}
              className="pointer-events-auto"
            />
          </div>

          {/* Sticker kanan */}
          <div className="hidden md:block absolute right-3 lg:right-10 top-[60%] z-10 w-[60px] h-[60px] pointer-events-none">
            <StickerPeel
              imageSrc="/stickers/garudie2.png"
              width={60}
              rotate={-10}
              peelBackHoverPct={15}
              peelBackActivePct={25}
              shadowIntensity={0.25}
              lightingIntensity={0.1}
              initialPosition={{ x: 0, y: 0 }}
              peelDirection={0}
              className="pointer-events-auto"
            />
          </div>

          <div className="flex flex-col gap-2 items-start w-full">
            <div className="flex items-start justify-center w-full">
              <div className="flex-1 flex items-center justify-center px-3 py-2">
                <h2 className="flex-1 font-bold text-[#221139] text-2xl md:text-[48px] leading-normal text-center">
                  Introducing Our Theme
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col gap-4 items-center justify-center w-full px-4 md:px-[54px] py-0.5">
                <p className="font-medium text-[#221139] text-lg md:text-[24px] leading-normal text-center min-w-full">
                  Garuda Hacks 7.0
                </p>

                {/* terminal window (always visible) */}
                <div className="w-full max-w-[688px] overflow-hidden rounded-xl border border-[#C4A9FF] bg-[#0d0a14] shadow-[0_8px_30px_rgba(34,17,57,0.18)]">
                  {/* title bar */}
                  <div className="flex items-center gap-2 border-b border-[#2a2140] bg-[#171221] px-3.5 py-2.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span className="ml-2 font-mono text-[12px] text-[#8a7faa]">
                      theme.txt
                    </span>
                  </div>
                  {/* terminal body */}
                  <div className="px-4 py-4 md:px-5 md:py-5 text-left font-mono text-[13px] md:text-[14px] leading-relaxed text-[#D8CEF0]">
                    {/* first paragraph — always shown */}
                    <p>
                      <span className="text-[#8B5CF6]">{"> "}</span>
                      {firstLine[0].text}
                    </p>

                    {/* expanded paragraphs — type out on Read More */}
                    {isReadMore &&
                      renderedExpanded.map((line, li) =>
                        line.started ? (
                          <p key={li} className="mt-3">
                            <span className="text-[#8B5CF6]">{"> "}</span>
                            {line.segs.map((seg, si) =>
                              seg.bold ? (
                                <span
                                  key={si}
                                  className="font-bold text-[#C4A9FF]"
                                >
                                  {seg.shown}
                                </span>
                              ) : (
                                <span key={si}>{seg.shown}</span>
                              )
                            )}
                            {isTyping && lastExpandedVisible === li && (
                              <span className="theme-term-cursor text-[#C4A9FF]">
                                ▋
                              </span>
                            )}
                          </p>
                        ) : null
                      )}
                  </div>
                </div>

                <button
                  onClick={() => setIsReadMore(!isReadMore)}
                  className="font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors duration-200 ease-in-out"
                >
                  {isReadMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}