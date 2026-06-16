"use client";

import { useState } from "react";
import Link from "next/link";
import { categorys } from "@/data/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CornerCube from "@/components/Cornercube";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isExpanded, setIsExpanded] = useState(false);

  const active = categories[activeIndex];

  const handleCategoryChange = (idx: number) => {
    setActiveIndex(idx);
    setIsExpanded(false);
  };

  const points = [
    // dott atas
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },

    // dott atas
    { pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]" },
    { pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]"},

    // dott bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },

    // dott bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]"},
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];

  const activeImage =
    active.imageSrc ??
    categorys.find((c) => c.label === active.label)?.image ??
    defaultImageSrc;

  return (
    <section
      id="tracks"
      className={`w-full relative border-b border-[#C4A9FF] ${className}`}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 border-r border-l border-[#C4A9FF] px-4 md:px-12 py-16 md:py-[120px]">
          <div className="flex flex-col gap-4 flex-1 w-full min-h-[400px] justify-center">
            <AnimatePresence mode="popLayout">
              {categories.map((cat, idx) => {
                const isActive = idx === activeIndex;

                return (
                  <motion.div
                    layout
                    key={cat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full"
                  >
                    {isActive ? (
                      <div className="flex flex-col gap-3 py-2">
                        <h2 className="font-semibold text-gray-800 tracking-tight leading-[1.1] text-[24px] md:text-[28px]">
                          {cat.label}
                        </h2>

                        <div className="flex flex-col gap-2">
                          <p
                            className={`font-medium text-[#221139] text-[16px] text-justify leading-relaxed transition-all duration-300 `}
                            // ${
                            //   isExpanded ? "" : "line-clamp-3"
                            // }
                          >
                            {cat.description}
                          </p>

                          {/* <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-left text-[15px] font-bold text-[#874FFE] hover:text-[#221139] transition-colors w-fit"
                          >
                            {isExpanded ? "Show Less" : "See More..."}
                          </button> */}
                        </div>

                        {/* <Link
                          href={cat.learnMore ?? "#"}
                          className="inline-flex items-center gap-2 text-[16px] font-semibold text-white bg-[#874FFE] hover:bg-[#6c3fda] px-6 py-2.5 rounded-xl transition-colors w-fit mt-3"
                        >
                          Learn More
                        </Link> */}
                      </div>
                    ) : (
                      <button
                        onClick={() => handleCategoryChange(idx)}
                        className="w-full group flex items-center justify-between rounded-xl border border-[#C4A9FF] p-4 text-[16px] md:text-[16px] font-medium text-[#221139] hover:bg-[#874FFE] hover:text-[#F9F5FF] transition-all text-left"
                      >
                        <span>{cat.label}</span>
                        <ArrowRightIcon className="h-5 w-5 text-[#221139] group-hover:text-[#F9F5FF] transition-colors" />
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="w-full md:w-[48%] shrink-0 order-first md:order-0">
            <div className="w-full rounded-xl overflow-hidden border border-[#C4A9FF] bg-[#F9F5FF] aspect-[4/3] flex items-center justify-center relative shadow-sm">
              <AnimatePresence mode="wait">
                {activeImage && (
                  <motion.img
                    key={activeImage}
                    initial={{ opacity: 0, filter: "blur(8px)", scale: 1.05 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    src={activeImage}
                    alt={active?.label || "Category Image"}
                    className="absolute w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}