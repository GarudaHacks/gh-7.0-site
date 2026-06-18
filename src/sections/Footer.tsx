"use client";

import { FaGithub, FaYoutube, FaInstagram, FaEnvelope, FaDiscord } from "react-icons/fa";

// ─── DATA FOOTER YANG LEBIH TERTATA ───
const footerLinks = [
  {
    title: "Garuda Hacks",
    links: [
      { label: "Devpost", href: "#" },
      { label: "Team & Board", href: "#" },
      { label: "Past Projects", href: "#" },
      { label: "Sponsorship", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guide Book 7.0", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Alumni Network", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    
    <footer className="w-full bg-[#08031a] relative overflow-hidden text-white border-t border-[#C4A9FF]/20">
      
    
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[120px] relative z-10">
        
      
        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          
      
          <div className="flex flex-col gap-6 md:col-span-1 lg:col-span-2">
            
         
            <div className="flex items-center gap-3 mb-2">
            <img
    src="/image/GH-logo.svg"
    alt="Garuda Hacks Logo"
    className="h-10 md:h-12 w-auto object-contain"
    onError={(e) => {
      (e.target as HTMLImageElement).style.display = "none";
    }}
  />
              <span className="font-bold ml-5 text-3xl tracking-tight">Garuda Hacks</span>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg text-white">
                Empowering Southeast Asia's
              </p>
              <p className="font-semibold text-lg text-white">
                Next Generation of Builders.
              </p>
              <p className="text-[#C4A9FF] mt-2 font-medium">
                contact@garudahacks.com
              </p>
            </div>

            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-[#08031a] transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-[#08031a] transition-all">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-[#08031a] transition-all">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-[#08031a] transition-all">
                <FaDiscord className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white hover:bg-white hover:text-[#08031a] transition-all">
                <FaEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title} className="flex flex-col gap-5">
              <h3 className="font-bold text-[17px] text-white tracking-wide">
                {col.title}
              </h3>
              <div className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-medium text-[15px] text-[#9b7ecb] hover:text-[#C4A9FF] hover:translate-x-1 transition-all w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* ── BAGIAN BAWAH: COPYRIGHT & LEGAL ── */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#9b7ecb] text-sm">
          <p className="text-center md:text-left leading-relaxed">
            © 2026 Garuda Hacks. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-2 md:mt-0 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}