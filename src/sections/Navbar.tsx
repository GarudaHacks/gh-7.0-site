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
  { label: "Recap", href: "#recap" },
  { label: "2025", href: "2025.garudahacks.com" },
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
        className={`bg-[#1a1a2e]/80 backdrop-blur-md w-full border-b border-[rgba(124,58,237,0.2)] top-0 right-0 z-[100] fixed ${className}`}
      >
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[rgba(124,58,237,0.2)]">
          {points.map((point, i) => (
            <CornerCube
              key={i}
              className={`${point.pos} pointer-events-none`}
            />
          ))}
          <div className="flex items-center justify-between py-3 px-6 bg-transparent border-x border-[rgba(124,58,237,0.2)] relative">
            <div className="flex items-center h-8 shrink-0">
              <Image
                src="/image/GambarLogoGarudaHitam.png"
                alt="Garuda Hacks Logo"
                width={150}
                height={50}
                className="h-full w-auto object-contain brightness-200"
                priority
              />
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 font-medium text-center text-[#a0a0a0] text-[16px] hover:text-[#7CF5E9] transition-colors whitespace-nowrap"
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
                className="cursor-pointer rounded-[6px] border border-[#7c3aed] bg-[#7c3aed] text-[#f8f9fa] px-8 py-3 transition-all duration-200 ease-out hover:bg-[#874FFE] hover:border-[#874FFE] hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Apply Now
              </a>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-[#f8f9fa]"
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
        className={`md:hidden fixed inset-0 z-[105] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[110] bg-[#1a1a2e] border-t border-[rgba(124,58,237,0.2)] rounded-t-[12px] shadow-2xl transition-transform duration-300 ease-out px-6 py-2 ${
          mobileOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-center mb-2 p-2">
          <div className="w-18 h-1.5 rounded-full bg-[rgba(124,58,237,0.4)]" />
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-4 font-medium text-center text-[#a0a0a0] text-[16px] border-b border-[rgba(124,58,237,0.2)] active:bg-[rgba(124,58,237,0.1)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMobileOpen(false)}
            className="font-medium rounded-[6px] border border-[#7c3aed] bg-[#7c3aed] text-[16px] h-12 hover:bg-[#874FFE] text-[#f8f9fa] transition-colors text-center shadow-lg shadow-[rgba(124,58,237,0.3)] mt-2"
          >
            <p className="text-lg mt-2"> Apply Now</p>
          </a>
        </div>
      </div>
    </>
  );
}
