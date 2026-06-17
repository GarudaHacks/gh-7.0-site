"use client";

import Image from "next/image";
import CornerCube from "@/components/Cornercube";
import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  logoSrc: string;
  href?: string;
}

const defaultSponsors: Sponsor[] = [
  { name: "HMIF UMN", logoSrc: "/sponsors/UMN.PNG", href: "https://hmif.umn.ac.id" },
  { name: "Centong Biru Cafe", logoSrc: "/sponsors/centong-biru.PNG", href: "https://www.instagram.com/centongbiru.cafe" },
  { name: "Data Sorcerers", logoSrc: "/sponsors/data-sorcerers.png", href: "https://www.data-sorcerers.com" },
  { name: "JAPFA", logoSrc: "/sponsors/japfa.png", href: "https://www.japfacomfeed.co.id" },
  { name: "LG Sinarmas", logoSrc: "/sponsors/LGSM.png", href: "https://www.lgsinarmas.com" },
  { name: "Build Club", logoSrc: "/sponsors/build-club.png", href: "https://buildclub.ai" },
  { name: "Generation Girl", logoSrc: "/sponsors/generation-girl.png", href: "https://generationgirl.org" },
  { name: "Paragon", logoSrc: "/sponsors/lemon.png", href: "https://www.paragon-innovation.com" },
  { name: "Wings-Mie Sedap", logoSrc: "/sponsors/mie-sedap.png", href: "https://wingscorp.com/brand-detail/mie-sedaap/" },
  { name: "Wings-Aquviva", logoSrc: "/sponsors/aquviva.png", href: "https://aquviva.co.id" },
  { name: "Wings-Teh Lemon Madu", logoSrc: "/sponsors/lemon.png", href: "https://wingscorp.com" },
  { name: "Advan", logoSrc: "/sponsors/advan.png", href: "https://advandigital.com" },
];

interface SponsorsProps {
  className?: string;
  sponsors?: Sponsor[];
  title?: string;
  description?: string;
}

export default function Sponsors({
  className = "",
  sponsors = defaultSponsors,
  title = "Our Sponsors",
  description = "Terima kasih kepada para sponsor yang telah mendukung dan menjadi bagian dari perjalanan kami.",
}: SponsorsProps) {
  const points = [
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },
    { pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]" },
    { pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]" },
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];

  const renderCard = (sponsor: Sponsor, index: number) => {
    const delay = (index % 12) * 0.05;

    const card = (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
        whileHover={{ y: -6, scale: 1.02 }}
        className="group relative w-full h-[120px] md:h-[140px] lg:h-[160px] rounded-lg border border-[rgba(124,58,237,0.2)] bg-[rgba(26,26,46,0.6)] backdrop-blur-sm flex items-center justify-center overflow-hidden shadow-sm hover:border-[#7c3aed] hover:shadow-lg hover:bg-[rgba(26,26,46,0.8)] transition-all duration-300"
      >
        <div className="w-full h-full flex items-center justify-center p-4 relative">
          <Image
            src={sponsor.logoSrc}
            alt={sponsor.name}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-[#7c3aed] to-[rgba(124,58,237,0.8)] text-[#f8f9fa] text-center py-2 px-2 z-10">
          <span className="font-semibold text-xs md:text-sm leading-tight block truncate">
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
        className="w-full cursor-pointer"
      >
        {card}
      </a>
    ) : (
      <div key={sponsor.name} className="w-full">
        {card}
      </div>
    );
  };

  return (
    <section className={`w-full relative border-b border-[rgba(124,58,237,0.2)] bg-[#0F1117] ${className}`}>
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[rgba(124,58,237,0.2)]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        <div className="flex flex-col gap-8 md:gap-12 border-r border-l border-[rgba(124,58,237,0.2)] px-2 md:px-12 py-12 md:py-[120px]">
          {/* heading */}
          <div className="flex flex-col gap-3 text-center px-4">
            <h2 className="font-semibold text-[#f8f9fa] tracking-tight leading-[1.1] text-[28px] md:text-[36px]">
              {title}
            </h2>
            <p className="font-medium text-[#a0a0a0] text-[14px] md:text-[16px] leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* masonry grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full auto-rows-max">
            {sponsors.map((sponsor, index) => renderCard(sponsor, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
