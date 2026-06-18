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
  { label: "2025", href: "https://2025.garudahacks.com/" },
];

export default function Navbar({ className = "" }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Effect untuk mengunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // FIX BARBAR VERSI 2: Deteksi tombol Back via Performance API (Anti-BFcache)
  useEffect(() => {
    const navigationEntries = window.performance.getEntriesByType(
      "navigation",
    ) as PerformanceNavigationTiming[];
    const isBackNavigation =
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "back_forward";

    if (isBackNavigation) {
      // Menimpa URL dengan dirinya sendiri memaksa browser bypass cache visual dan reload bersih
      window.location.href = window.location.pathname + window.location.search;
    }
  }, []);

  // Effect untuk menghitung posisi scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const threshold = hero ? hero.offsetHeight : 800;

      if (window.scrollY > threshold - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Cek posisi pertama kali saat komponen mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full top-0 right-0 z-[100] fixed transition-all duration-300 ${
          scrolled
            ? "bg-[#F9F5FF] border-b border-[#C4A9FF] text-[#221139]"
            : "bg-transparent border-transparent text-white"
        } ${className}`}
      >
        <div
          className={`mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] transition-all duration-300 ${
            scrolled ? "border-x border-[#C4A9FF]" : "border-x-0"
          }`}
        >
          {scrolled &&
            points.map((point, i) => (
              <CornerCube
                key={i}
                className={`${point.pos} pointer-events-none`}
              />
            ))}

          <div
            className={`flex items-center gap-1 py-3 px-6 ${
              scrolled ? "border-x border-[#C4A9FF]" : "border-x-0"
            }`}
          >
            {/* Logo Section */}
            <div className="flex flex-1 justify-start">
              <div className="flex items-center h-8 shrink-0">
                <Image
                  src="/image/GH-logo.svg"
                  alt="Garuda Hacks Logo"
                  width={32}
                  height={32}
                  className={`h-full w-auto object-contain transition-all duration-300 ${
                    scrolled ? "" : "brightness-0 invert"
                  }`}
                  priority
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center justify-center flex-[2] gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 font-medium text-center text-[16px] transition-colors whitespace-nowrap ${
                    scrolled ? "hover:text-[#8E47D6]" : "hover:text-purple-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Apply Now Button */}
            <div className="hidden md:flex flex-1 justify-end items-center">
              <a
                href="https://portal.garudahacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-[6px] border border-[#7c3aed] bg-[#8e47d6] text-white px-8 py-3 transition-all duration-200 ease-out [box-shadow:inset_0_-1.5px_1px_#8e47d6,inset_0_-6px_1px_#712cb6] hover:translate-y-[1px] hover:[box-shadow:inset_0_4px_4px_#67339c]"
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex flex-1 justify-end items-center">
              <button
                type="button"
                className={`p-2 ${scrolled ? "text-[#221139]" : "text-white"}`}
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
        </div>
      </nav>

      {/* Mobile Drawer and Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`md:hidden fixed inset-0 z-[105] bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-[110] transition-transform duration-300 ease-out px-6 py-2 rounded-t-[12px] shadow-2xl ${
          mobileOpen ? "translate-y-0" : "translate-y-full"
        } ${
          scrolled
            ? "bg-[#F9F5FF] border-t border-[#C4A9FF]"
            : "bg-purple-950/90 backdrop-blur-md text-white border-t border-white/10"
        }`}
      >
        <div className="flex justify-center mb-2 p-2">
          <div
            className={`w-18 h-1.5 rounded-full ${
              scrolled ? "bg-[#C4A9FF]" : "bg-white/20"
            }`}
          />
        </div>

        <div className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-4 font-medium text-center text-[16px] border-b transition-colors ${
                scrolled
                  ? "text-[#221139] border-[#C4A9FF]/40 active:bg-purple-50"
                  : "text-white border-white/10 active:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://portal.garudahacks.com"
            target="_blank"
            rel="noopener noreferrer"
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
