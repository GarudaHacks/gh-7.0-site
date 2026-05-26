"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AboutData } from "@/data/data";

export default function SectionAboutUs() {
  return (
    <section id="about" className="w-full relative border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="px-4 md:px-12 py-16 md:py-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] flex flex-col gap-6 md:gap-8 items-start w-full">
          <div className="flex items-center justify-center px-4 py-2 w-full">
            <h2 className="flex-1 font-medium text-[#221139] text-2xl md:text-[32px] leading-snug text-center">
              Garuda Hacks is Southeast Asia's largest hackathon,<br/> With over
              <span className="font-bold"> 6000 total participants.</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-end justify-center gap-0 w-full">
            <div className="flex-1 flex items-end justify-center py-0.5 w-full">
              <div className="bg-[#67339C] flex flex-col gap-6 items-end w-full px-6 py-8 rounded-xl min-h-[180px] md:h-[232px]">
                <div className="flex items-center justify-center overflow-hidden w-16 h-16 shrink-0">
                  <img
                    src="image/GH-logo.svg"
                    alt="Garuda Hacks Logo"
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>
                <p className="font-medium text-[#F9F5FF] text-sm md:text-[16px] text-justify leading-relaxed w-full">
                  {AboutData[0].description}
                </p>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-end w-full px-4 py-0.5">
              <div className="flex flex-col gap-4 items-end w-full px-2 md:px-6 py-4 rounded-xl">
                <p className="font-medium text-[#221139] text-sm md:text-[16px] text-justify leading-relaxed w-full">
                  {AboutData[1].description}
                </p>
                <div className="border border-[#C4A9FF] flex gap-4 items-center p-1 rounded-full shrink-0 mt-2">
                  <span className="font-bold text-[16px] text-black px-4 py-1 whitespace-nowrap">
                    Go to GH7.0
                  </span>
                  <div className="w-12 h-12 rounded-full bg-[#8E47D6] flex items-center justify-center shrink-0">
                    <ArrowRightIcon className="h-5 w-5 stroke-[#F9F5FF]" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
