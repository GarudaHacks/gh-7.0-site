"use client";

import Image from "next/image";
import CornerCube from "@/components/Cornercube";
import { motion } from "framer-motion";

type SponsorSize = "Large" | "Medium" | "Small";

interface Sponsor {
  name: string;
  size: SponsorSize;
  logoSrc: string;
  href?: string;
}

const defaultSponsors: Sponsor[] = [
  {
    name: "HMIF UMN",
    size: "Large",
    logoSrc: "/sponsors/UMN.PNG",
    href: "https://hmif.umn.ac.id",
  },
  {
    name: "Centong Biru Cafe",
    size: "Medium",
    logoSrc: "/sponsors/centong-biru.PNG",
    href: "https://www.instagram.com/centongbiru.cafe",
  },
  {
    name: "JAPFA",
    size: "Medium",
    logoSrc: "/sponsors/japfa.png",
    href: "https://www.japfacomfeed.co.id",
  },
  {
    name: "LG Sinarmas",
    size: "Medium",
    logoSrc: "/sponsors/LGSM.png",
    href: "https://www.lgsinarmas.com",
  },
  {
    name: "Build Club",
    size: "Small",
    logoSrc: "/sponsors/build-club.png",
    href: "https://buildclub.ai",
  },
  {
    name: "Generation Girl",
    size: "Small",
    logoSrc: "/sponsors/generation-girl.png",
    href: "https://generationgirl.org",
  },
  {
    name: "Paragon",
    size: "Small",
    logoSrc: "/sponsors/paragon.png",
    href: "https://www.paragon-innovation.com",
  },
  {
    name: "Wings-Mie Sedap",
    size: "Small",
    logoSrc: "/sponsors/mie-sedap.png",
    href: "https://wingscorp.com/brand-detail/mie-sedaap/",
  },
  {
    name: "Wings-Aquviva",
    size: "Small",
    logoSrc: "/sponsors/aquviva.png",
    href: "https://aquviva.co.id",
  },
  {
    name: "Wings-Teh Lemon Madu",
    size: "Small",
    logoSrc: "/sponsors/lemon.png",
    href: "https://wingscorp.com",
  },
  {
    name: "Advan",
    size: "Small",
    logoSrc: "/sponsors/advan.png",
    href: "https://advandigital.com",
  },
];

interface SponsorsProps {
  className?: string;
  sponsors?: Sponsor[];
  title?: string;
  description?: string;
  rowsPerTier?: number[];
}

const sizeStyles: Record<
  SponsorSize,
  { box: string; padding: string; nameSize: string; nudge: string }
> = {
  Large: {
    box: "w-[200px] h-[210px] sm:w-[230px] sm:h-[250px] md:w-[260px] md:h-[290px]",
    padding: "p-4 md:p-5",
    nameSize: "text-[14px] md:text-[18px]",
    nudge: "", // Nudge dihilangkan agar logo benar-benar center presisi di tengah card
  },
  Medium: {
    box: "w-[140px] h-[80px] sm:w-[180px] sm:h-[100px] md:w-[210px] md:h-[120px]",
    padding: "p-4 md:p-6",
    nameSize: "text-[12px] md:text-[14px]",
    nudge: "",
  },
  Small: {
    box: "w-[110px] h-[66px] sm:w-[122px] sm:h-[72px] md:w-[130px] md:h-[80px]",
    padding: "p-2 md:p-3",
    nameSize: "text-[10px] md:text-[12px]",
    nudge: "",
  },
};

interface Tier {
  size: SponsorSize;
  sponsors: Sponsor[];
}

function chunkBalanced<T>(items: T[], perRow: number): T[][] {
  if (items.length === 0) return [];
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += perRow) {
    rows.push(items.slice(i, i + perRow));
  }
  if (rows.length > 1 && rows[rows.length - 1].length === 1) {
    const last = rows.pop()!;
    rows[rows.length - 1] = [...rows[rows.length - 1], ...last];
  }
  return rows;
}

export default function Sponsors({
  className = "",
  sponsors = defaultSponsors,
  title = "Our Sponsors",
  description = "Thank you to our beloved sponsors for supporting the event and making it possible.",
  rowsPerTier = [3, 4, 7],
}: SponsorsProps) {
  const tiers: Tier[] = (["Large", "Medium", "Small"] as SponsorSize[])
    .map((size) => ({
      size,
      sponsors: sponsors.filter((s) => s.size === size),
    }))
    .filter((t) => t.sponsors.length > 0);

  const points = [
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },
    {
      pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]",
    },
    {
      pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]",
    },
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    {
      pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]",
    },
    {
      pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]",
    },
  ];

  let globalIdx = 0;

  const renderCard = (sponsor: Sponsor, size: SponsorSize) => {
    const style = sizeStyles[size];
    const delay = (globalIdx++ % 12) * 0.05;

    const card = (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, delay, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className={`${style.box} group relative shrink-0 rounded-[8px] border border-[#C4A9FF] bg-[#F9F5FF] flex flex-col overflow-hidden shadow-sm hover:border-[#874FFE] hover:shadow-md transition-all active:border-[#874FFE]`}
      >
        {/* Container Utama Gambar: Padding dinormalisasi (pb-0) supaya logo penuh dan center */}
        <div
          className={`w-full h-full flex flex-col items-center justify-center relative ${style.padding}`}
        >
          <div
            className={`relative w-full h-full flex items-center justify-center ${style.nudge}`}
          >
            <Image
              src={sponsor.logoSrc}
              alt={sponsor.name}
              fill
              draggable={false}
              className="object-contain transition-transform duration-300 group-hover:scale-[1.04] group-active:scale-[1.04] select-none"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* FIX UTAMA: Label nama sponsor di-set tersembunyi secara default (translate-y-full).
            Akan bergeser naik (translate-y-0) HANYA ketika di-hover (Desktop) ATAU ketika di-active/disentuh jari (Mobile). */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-300 bg-[#874FFE] text-[#F9F5FF] text-center py-[4px] md:py-1 px-1 z-10">
          <span
            className={`font-semibold ${style.nameSize} leading-tight block truncate`}
          >
            {sponsor.name}
          </span>
        </div>
      </motion.div>
    );

    return sponsor.href ? (
      <a
        key={sponsor.name}
        href={sponsor.href}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 cursor-pointer block"
      >
        {card}
      </a>
    ) : (
      <div key={sponsor.name} className="shrink-0">
        {card}
      </div>
    );
  };

  return (
    <section
      className={`w-full relative border-b border-[#C4A9FF] ${className}`}
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        <div className="flex flex-col gap-8 md:gap-12 border-r border-l border-[#C4A9FF] px-2 md:px-12 py-12 md:py-[120px]">
          {/* heading */}
          <div className="flex flex-col gap-3 text-center px-4">
            <h2 className="font-semibold text-gray-800 tracking-tight leading-[1.1] text-[24px] md:text-[28px]">
              {title}
            </h2>
            <p className="font-medium text-[#221139] text-[14px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* pyramid */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {tiers.map((tier, tierIdx) => {
              const perRow =
                rowsPerTier[tierIdx] ?? rowsPerTier[rowsPerTier.length - 1];
              const rows = chunkBalanced(tier.sponsors, perRow);

              return (
                <div
                  key={tier.size}
                  className="flex flex-col items-center gap-3 md:gap-4 w-full"
                >
                  {rows.map((row, rowIdx) => (
                    <div
                      key={rowIdx}
                      className="flex flex-wrap items-center justify-center gap-2 md:gap-3 w-full"
                    >
                      {row.map((s) => renderCard(s, tier.size))}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
