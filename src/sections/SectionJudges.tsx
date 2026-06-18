"use client";

import CornerCube from "@/components/Cornercube";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { onlineJudges, offlineJudges } from "../data/data";

export default function SectionJudges() {
  const points = [
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },

    {
      pos: "left-[7px] -top-[10px] lg:left-[111px] xl:left-[153px]",
    },
    {
      pos: "right-[7px] -top-[10px] lg:right-[111px] xl:right-[153px]",
    },

    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },

    {
      pos: "left-[7px] -bottom-[10px] lg:left-[111px] xl:left-[153px]",
    },
    {
      pos: "right-[7px] -bottom-[10px] lg:right-[111px] xl:right-[153px]",
    },
  ];

  return (
    <section id="judges" className="w-full relative border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {/* Corner Dots */}
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        {/* Main Content */}
        <div className="py-12 md:py-[40px] flex flex-col gap-12 w-full border-r border-l border-[#C4A9FF] overflow-hidden">
          {/* OFFLINE JUDGES */}
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center w-full">
              <h2 className="font-bold text-[#221139] text-3xl md:text-[48px] leading-normal text-center tracking-tight">
                Meet The Offline Judges
              </h2>
            </div>

            <div className="w-full">
              <AnimatedTestimonials testimonials={offlineJudges} />
            </div>
          </div>

          {/* ONLINE JUDGES */}
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-center w-full border border-[#C4A9FF]">
              <h2 className="font-bold text-[#221139] text-3xl md:text-[48px] leading-normal text-center tracking-tight">
                Meet The Online Judges
              </h2>
            </div>

            <div className="w-full">
              <AnimatedTestimonials testimonials={onlineJudges} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
