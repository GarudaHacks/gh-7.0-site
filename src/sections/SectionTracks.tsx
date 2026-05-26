"use client";

import { useState } from "react";
import Link from "next/link";
import { categorys } from "@/data/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CornerCube from "@/components/Cornercube";

interface Category {
  label: string;
  description?: string;
  learnMore?: string;
  imageSrc?: string;
}

const defaultCategories: Category[] = [
  categorys[0],
  categorys[1],
  categorys[2],
];

interface OverviewProps {
  className?: string;
  categories?: Category[];
  defaultImageSrc?: string;
}

export default function Overview({
  className = "",
  categories = defaultCategories,
  defaultImageSrc,
}: OverviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = categories[activeIndex];
  const others = categories.filter((_, i) => i !== activeIndex);

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
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];

  return (
    <section className="w-full relative border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 border-r border-l border-[#C4A9FF] px-4 md:px-12 py-16 md:py-[120px]">
          <div className="flex flex-col gap-5 md:justify-between flex-1 h-full w-full min-h-[400px]">
            <div className="flex flex-col gap-3">
              <h2 className=" font-semibold text-gray-800 tracking-tight leading-[1.1] text-[20px] md:text-[24px] transition-all duration-200">
                {active.label}
              </h2>
              <p className=" font-medium text-[#221139] text-[16px] leading-relaxed">
                {active.description}
              </p>
              <Link
                href={active.learnMore ?? "#"}
                className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#221139] hover:text-[#874FFE] transition-colors w-fit group mt-1 "
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-col gap-2 mt-2 ">
              {others.map((cat, i) => {
                const originalIndex = categories.findIndex(
                  (c) => c.label === cat.label,
                );
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveIndex(originalIndex)}
                    className={`flex items-center justify-between rounded-xl border border-[#C4A9FF] p-4 text-[16px] md:text-[16px] font-medium text-[#221139] hover:bg-[#874FFE] hover:text-[#F9F5FF] transition-all text-left`}
                  >
                    <span className="">{cat.label}</span>
                    <ArrowRightIcon className="h-5 w-5 text-[#221139] hover:text-[#F9F5FF]" />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="w-full md:w-[48%] shrink-0 order-first md:order-0">
            <div className="w-full rounded-xl overflow-hidden border border-[#C4A9FF] bg-[#F9F5FF] aspect-[4/3] flex items-center justify-center">
              {active.imageSrc || defaultImageSrc ? (
                <img
                  src={active.imageSrc ?? defaultImageSrc}
                  alt={active.label}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              ) : (
                <div className="flex flex-col items-center gap-2.5">
                  <img
                    src={categorys.find((c) => c.label === active.label)?.image ?? defaultImageSrc}
                    alt={active.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
