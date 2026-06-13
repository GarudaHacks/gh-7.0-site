"use client";

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import CornerCube from "@/components/Cornercube";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tracks", href: "#tracks" },
  { label: "FAQ", href: "#faq" },
  { label: "2025", href: "#2025" },
];

export default function Navbar({ className = "" }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const points = [
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    {
      pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]",
    },
    {
      pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`bg-[#F9F5FF] w-full border-b border-[#C4A9FF] top-0 right-0 z-[100] fixed ${className}`}
      >
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
          {points.map((point, i) => (
            <CornerCube
              key={i}
              className={`${point.pos} pointer-events-none`}
            />
          ))}
          <div className="flex items-center justify-between py-3 px-6 bg-[#F9F5FF] border-x border-[#C4A9FF] relative">
            <div className="flex items-center h-8 shrink-0">
              <Image
                src="/image/GambarLogoGarudaHitam.png"
                alt="Garuda Hacks Logo"
                width={150}
                height={50}
                className="h-full w-auto object-contain"
                priority
              />
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 font-medium text-center text-[#221139] text-[16px] hover:text-[#8E47D6] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <a
                href="https://portal.garudahacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-[6px] border border-[#7c3aed] bg-[#8e47d6] text-white px-8 py-3 transition-all duration-200 ease-out [box-shadow:inset_0_-1.5px_1px_#8e47d6,inset_0_-6px_1px_#712cb6] hover:translate-y-[1px] hover:[box-shadow:inset_0_4px_4px_#67339c]"
              >
                Apply Now
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-[#221139]"
              onClick={(e) => {
                e.stopPropagation();
                setMobileOpen(!mobileOpen);
              }}
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 z-[105] bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[110] bg-[#F9F5FF] border-t border-[#C4A9FF] rounded-t-[12px] shadow-2xl transition-transform duration-300 ease-out px-6 py-2 ${
          mobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center mb-2 p-2">
          <div className="w-18 h-1.5 rounded-full bg-[#C4A9FF]" />
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-4 font-medium text-center text-[#221139] text-[16px] border-b border-[#C4A9FF]/40 active:bg-purple-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMobileOpen(false)}
            className="btn-bold font-medium rounded-[6px] border border-[#7c3aed] bg-[#8e47d6] text-[16px] h-12 hover:bg-[#8036CB] text-white transition-colors text-center shadow-lg shadow-purple-200 mt-2"
          >
            <p className="text-lg mt-2"> Apply Now</p>
          </a>
        </div>
      </div>
    </>
  );
}