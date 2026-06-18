"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Lens } from "@/components/ui/lens";
import CornerCube from "@/components/Cornercube";

const stats = [
  { value: "6,000+", label: "Participants" },
  { value: "30H", label: "Nonstop hacking" },
  { value: "120+", label: "Projects built" },
  { value: "$50K", label: "In prizes" },
];

const galleryImages = [
  {
    src: "image/recap/1.JPG",
    alt: "Hackathon participants collaborating",
  },
  {
    src: "image/recap/2.JPG",
    alt: "Team working on laptops",
  },
  {
    src: "image/recap/3.JPG",
    alt: "Presentation at hackathon",
  },
  {
    src: "image/recap/4.JPG",
    alt: "Award ceremony",
  },
];

const heroImage = "image/recap/hero.JPG";

const Beams = () => (
  <svg
    width="380"
    height="315"
    viewBox="0 0 380 315"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none opacity-60"
    aria-hidden="true"
  >
    <g filter="url(#b_filter0)">
      <circle cx="34" cy="52" r="114" fill="#6925E7" />
    </g>
    <g filter="url(#b_filter1)">
      <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
    </g>
    <g filter="url(#b_filter2)">
      <circle cx="191" cy="53" r="102" fill="#802FE3" />
    </g>
    <defs>
      <filter
        id="b_filter0"
        x="-192"
        y="-174"
        width="452"
        height="452"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="56" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="b_filter1"
        x="70"
        y="-238"
        width="524"
        height="524"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="b_filter2"
        x="-71"
        y="-209"
        width="524"
        height="524"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
);

const Rays = ({ className }: { className?: string }) => (
  <svg
    width="380"
    height="397"
    viewBox="0 0 380 397"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("absolute left-0 top-0 pointer-events-none z-[1]", className)}
    aria-hidden="true"
  >
    <g filter="url(#r_filter0)">
      <path
        d="M-37.4202 -76.0163L-18.6447 -90.7295L242.792 162.228L207.51 182.074L-37.4202 -76.0163Z"
        fill="url(#r_paint0)"
      />
    </g>
    <g
      style={{ mixBlendMode: "plus-lighter" }}
      opacity="0.3"
      filter="url(#r_filter1)"
    >
      <path
        d="M-109.54 -36.9027L-84.2903 -58.0902L178.786 193.228L132.846 223.731L-109.54 -36.9027Z"
        fill="url(#r_paint1)"
      />
    </g>
    <g
      style={{ mixBlendMode: "plus-lighter" }}
      opacity="0.86"
      filter="url(#r_filter2)"
    >
      <path
        d="M-100.647 -65.795L-69.7261 -92.654L194.786 157.229L139.51 197.068L-100.647 -65.795Z"
        fill="url(#r_paint2)"
      />
    </g>
    <g
      style={{ mixBlendMode: "plus-lighter" }}
      opacity="0.31"
      filter="url(#r_filter3)"
    >
      <path
        d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
        fill="#8A50FF"
      />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#r_filter4)">
      <path d="M34.2031 13.2222L291.721 269.534" stroke="url(#r_paint3)" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#r_filter5)">
      <path d="M41 -40.9331L298.518 215.378" stroke="url(#r_paint4)" />
    </g>
    <g style={{ mixBlendMode: "plus-lighter" }} filter="url(#r_filter6)">
      <path d="M61.3691 3.8999L317.266 261.83" stroke="url(#r_paint5)" />
    </g>
    <defs>
      <filter
        id="r_filter0"
        x="-49.4199"
        y="-102.729"
        width="304.212"
        height="296.803"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="r_filter1"
        x="-115.54"
        y="-64.0903"
        width="300.326"
        height="293.822"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="r_filter2"
        x="-111.647"
        y="-103.654"
        width="317.434"
        height="311.722"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="5.5" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="r_filter3"
        x="-212.518"
        y="-188.71"
        width="473.085"
        height="369.366"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="48" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="r_filter4"
        x="25.8447"
        y="4.84521"
        width="274.234"
        height="273.065"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="r_filter5"
        x="32.6416"
        y="-49.3101"
        width="274.234"
        height="273.065"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="r_filter6"
        x="54.0078"
        y="-3.47461"
        width="270.619"
        height="272.68"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient
        id="r_paint0"
        x1="-57.5042"
        y1="-134.741"
        x2="403.147"
        y2="351.523"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.214779" stopColor="#AF53FF" />
        <stop offset="0.781583" stopColor="#B253FF" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="r_paint1"
        x1="-122.154"
        y1="-103.098"
        x2="342.232"
        y2="379.765"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.214779" stopColor="#AF53FF" />
        <stop offset="0.781583" stopColor="#9E53FF" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="r_paint2"
        x1="-106.717"
        y1="-138.534"
        x2="359.545"
        y2="342.58"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.214779" stopColor="#9D53FF" />
        <stop offset="0.781583" stopColor="#A953FF" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="r_paint3"
        x1="72.701"
        y1="54.347"
        x2="217.209"
        y2="187.221"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AF81FF" />
        <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="r_paint4"
        x1="79.4978"
        y1="0.191681"
        x2="224.006"
        y2="133.065"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#AF81FF" />
        <stop offset="1" stopColor="#C081FF" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="r_paint5"
        x1="79.6568"
        y1="21.8377"
        x2="234.515"
        y2="174.189"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#B981FF" />
        <stop offset="1" stopColor="#CF81FF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// ─── CORNER DOTS CONFIG ───────────────────────────────────────────────────────
const cornerDots = [
  { pos: "-left-[-31px] -top-[10px] hidden xl:flex z-40" },
  { pos: "-right-[-31px] -top-[10px] hidden xl:flex" },
  {
    pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]",
  },
  {
    pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]",
  },
  { pos: "-left-[-31px] -bottom-[10px] hidden xl:flex z-40" },
  { pos: "-right-[-31px] -bottom-[10px] hidden xl:flex z-40" },
  {
    pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]",
  },
  {
    pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]",
  },
];

// ─── BENTO CARD WRAPPER ───────────────────────────────────────────────────────
const BentoCard = ({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) => (
  <li
    className={cn(
      "relative list-none rounded-2xl border border-[#C4A9FF] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300",
      "md:rounded-3xl",
      className,
    )}
  >
    <div className="relative h-full p-1.5 md:p-2 rounded-[inherit] bg-white/50">
      <GlowingEffect
        spread={40}
        glow={true}
        proximity={64}
        inactiveZone={0.01}
      />
      <div
        className={cn(
          "relative h-full rounded-[14px] md:rounded-2xl overflow-hidden",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  </li>
);

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
export default function SectionRecaps() {
  const [hovering, setHovering] = useState(false);

  return (
    <section
      id="recap"
      className="w-full relative border-b border-[#C4A9FF] bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {/* Corner dots */}
        {cornerDots.map((dot, i) => (
          <CornerCube key={i} className={`${dot.pos} pointer-events-none`} />
        ))}

        {/* Inner padded area */}
        <div className="py-14 md:py-[80px] flex flex-col gap-10 w-full border-r border-l border-[#C4A9FF] px-4 md:px-12">
          <div className="flex flex-col items-center gap-3 text-center mb-2">
            <span className="text-[#874FFE] text-xs font-bold tracking-[0.2em] uppercase">
              Garuda Hacks 6.0
            </span>
            <h2 className="text-[#221139] font-extrabold text-3xl md:text-4xl tracking-tight">
              Recap
            </h2>
            <p className="text-[#5b4a7a] text-[16px] md:text-base max-w-md leading-relaxed font-medium">
              Southeast Asia's largest hackathon — 30 hours of energy, code,
              and community.
            </p>
          </div>

          {/* ── BENTO GRID ─────────────────────────────────────────────────── */}
          <ul className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto] gap-4 md:gap-5 max-w-[1000px] mx-auto w-full">
            <BentoCard
              className="md:col-span-7 md:row-span-2 min-h-[440px]"
              innerClassName="bg-gradient-to-br from-[#1E0A3C] to-[#120524]"
            >
              <Rays />
              <Beams />
              <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-8">
                <div className="flex-1 w-full flex items-center justify-center mb-6">
                  <Lens
                    hovering={hovering}
                    setHovering={setHovering}
                    zoomFactor={1.5}
                    lensSize={180}
                  >
                    <img
                      src={heroImage}
                      alt="GarudaHacks 6.0 main event"
                      className="w-full h-[280px] md:h-[340px] object-cover rounded-xl border border-[#C4A9FF]/30 shadow-2xl"
                    />
                  </Lens>
                </div>

                <motion.div
                  animate={{ filter: hovering ? "blur(3px)" : "blur(0px)" }}
                  transition={{ duration: 0.2 }}
                  className="relative z-20 mt-2"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C4A9FF]" />
                    <span className="text-[#C4A9FF] text-xs tracking-widest uppercase font-medium">
                      Aftermovie
                    </span>
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight leading-snug">
                    Relive the Moment
                  </h3>
                  <p className="text-[#9b7ecb] text-sm mt-1.5 leading-relaxed max-w-sm">
                    6,000+ builders, 30 sleepless hours.
                  </p>
                </motion.div>
              </div>
            </BentoCard>

            <BentoCard
              className="md:col-span-5 md:row-span-1"
              innerClassName="bg-white"
            >
              <div className="p-6 md:p-7 h-full flex flex-col justify-center bg-repeat opacity-95">
                <p className="text-[#874FFE] text-xs tracking-widest uppercase font-bold mb-5">
                  By the numbers
                </p>
                <div className="grid grid-cols-2 gap-y-5 gap-x-3">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col gap-0.5">
                      <span className="text-[#221139] text-2xl md:text-3xl font-extrabold tracking-tight">
                        {value}
                      </span>
                      <span className="text-[#67339C] text-xs leading-tight font-medium">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>

            <BentoCard
              className="md:col-span-5 md:row-span-1"
              innerClassName="bg-[#F9F5FF]"
            >
              <div className="p-4 h-full flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-3 h-full">
                  {galleryImages.map((img, i) => (
                    <div
                      key={i}
                      className="relative rounded-lg overflow-hidden bg-[#EAE5F4] aspect-square border border-[#C4A9FF]/50"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </BentoCard>
          </ul>
        </div>
      </div>
    </section>
  );
}
