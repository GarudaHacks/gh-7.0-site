"use client";

import CornerCube from "@/components/Cornercube";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { judges } from "../data/data";

export default function SectionJudges() {
  

  // Posisi dots dari Kode A
  const points = [
    // dott atas
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },
    // dott atas
    { pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]" },
    { pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]" },
    // dott bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    // dott bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    {pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];

  return (
    <section
      id="judges"
      className="w-full relative border-b border-[#C4A9FF]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {/* Render dots CornerCube */}
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}
        
        <div className="pl-6 md:pl-0 py-14 md:py-[80px] flex flex-col gap-[14px] items-start w-full border-r border-l border-[#C4A9FF] overflow-hidden">
          
          {/* Header Title */}
          <div className="flex items-center justify-center px-3 py-2 w-full mb-4">
            <h2 className="flex-1 font-bold text-[#221139] text-[24px] md:text-[48px] leading-normal text-center">
              Meet The Judges
            </h2>
          </div>

          {/* Modul Card dari Kode B */}
          <div className="w-full">
            <AnimatedTestimonials testimonials={judges} />
          </div>

        </div>
      </div>
    </section>
  );
}