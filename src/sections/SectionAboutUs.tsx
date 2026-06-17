"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AboutData } from "@/data/data";
import CountUp from "../components/CountUp";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function SectionAboutUs() {
  return (
    <section id="about" className="w-full relative border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="px-4 md:px-12 py-16 md:py-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] flex flex-col gap-6 md:gap-8 items-start w-full">
          <div className="flex items-center justify-center px-4 py-2 w-full">
            <h2 className="flex-1 font-medium text-[#221139] text-2xl md:text-[48px] leading-snug text-center">
              Garuda Hacks is Southeast Asia's largest hackathon, with over{" "}
              <span className="font-bold">
                <CountUp
                  from={0}
                  to={6000}
                  separator=","
                  direction="up"
                  duration={0.3}
                  delay={0.2}
                />
                + total participants.
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-end justify-center gap-0 w-full">
            <div className="flex-1 flex items-end justify-center py-0.5 w-full">
              <CardSpotlight className="flex flex-col gap-6 items-start md:items-end w-full px-6 py-8 rounded-xl min-h-[180px] md:h-[232px]">
                <div className="relative z-20 flex items-center justify-center overflow-hidden w-16 h-16 shrink-0">
                  <img
                    src="image/GH-logo.svg"
                    alt="Garuda Hacks Logo"
                    className="w-full h-full object-contain pointer-events-none"
                  />
                </div>

                <p className="relative z-20 font-medium text-[#F9F5FF] text-sm md:text-[16px] text-justify leading-relaxed w-full">
                  {AboutData[0].description}
                </p>
              </CardSpotlight>
            </div>

            <div className="flex-1 flex flex-col items-center justify-end w-full px-2 py-0.5">
              <div className="flex flex-col gap-4 items-center md:items-end w-full px-0 md:px-6 py-4 md:-py-4 rounded-xl">
                <p className=" font-medium text-[#221139] text-sm md:text-[16px] text-justify leading-relaxed w-full">
                  {AboutData[1].description}
                </p>
                <a
                  href="https://portal.garudahacks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center gap-4 p-1 rounded-full shrink-0 mt-2 border border-[#C4A9FF] cursor-pointer"
                >
                  <div className="absolute inset-0 bg-[#874FFE] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

                  <span className="relative z-10 font-bold text-[16px] text-[#221139] group-hover:text-[#F9F5FF] px-4 py-1 whitespace-nowrap transition-colors duration-300">
                    Apply Now
                  </span>

                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#8E47D6] group-hover:bg-[#F9F5FF] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <ArrowRightIcon
                      className="h-5 w-5 stroke-[#F9F5FF] group-hover:stroke-[#874FFE] transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}