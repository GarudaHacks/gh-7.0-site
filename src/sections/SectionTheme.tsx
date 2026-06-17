"use client";

import { useState } from "react";
import StickerPeel from "@/components/StickerPeel";

export default function SectionTheme() {
  const [isReadMore, setIsReadMore] = useState(false);

  const description = `As the world faces rising healthcare inequality, increasing climate-related disasters, global food insecurity, and growing concerns over public safety, nations are being challenged to build stronger and more resilient systems for the future. Indonesia faces structural challenges across health equity, public safety, and food production. Long-term national stability depends on how we strengthen these three foundational pillars. We must build reliable systems that protect public health, minimize regional vulnerabilities, and stabilize the agricultural economy so every community can thrive. This year’s theme focuses on developing sustainable solutions for Health, Safety, and Resilience, and Agriculture. You are challenged to create functional tools that address regional disparities and support vulnerable populations. Your work will directly contribute to building a more stable, self-sufficient, and secure future for Indonesia.`;

  const charLimit = 250;

  return (
    <section
      id="theme"
      className="w-full relative border-b border-[#C4A9FF] overflow-hidden"
    >
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
              <div className="flex flex-col gap-3 items-center justify-center text-[#221139] text-center px-4 md:px-[54px] py-0.5 w-full">
                <p className="font-medium text-lg md:text-[24px] leading-normal min-w-full">
                  This is Our Theme for This Years Hackathon
                </p>
                <div className="font-normal text-sm md:text-[16px] leading-relaxed max-w-[688px] w-full text-justify md:text-center transition-all duration-300">
                  {isReadMore
                    ? description
                    : `${description.slice(0, charLimit)}...`}

                  <button
                    onClick={() => setIsReadMore(!isReadMore)}
                    className="inline-block font-semibold text-[#8B5CF6] hover:text-[#7C3AED] ml-1 transition-colors duration-200 ease-in-out"
                  >
                    {isReadMore ? " Read Less" : " Read More"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
