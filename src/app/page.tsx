"use client";

import Heroes from "@/sections/Heroes";
import Navbar from "@/sections/Navbar";
import SpaceSection from "@/sections/SpaceSection";
import Footer from "@/sections/Footer";
import Image from "next/image";
import dynamic from "next/dynamic";
import Countdown from "@/sections/Countdown";
import SectionAboutUs from "@/sections/SectionAboutUs";
import SectionSpeakers from "@/sections/SectionSpeakers";
import SectionTracks from "@/sections/SectionTracks";
import SectionTheme from "@/sections/SectionTheme";
import GarudaByTheNumbers from "@/sections/GarudaByTheNumbers";
import SectionProjectPast from "@/sections/SectionProjects";
import SectionRecaps from "@/sections/section-recap";
import StickerPeel from "@/components/StickerPeel";
import { motion } from "framer-motion";
import SectionJudges from "@/sections/SectionJudges";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatMascot {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float-mascot {
          animation: floatMascot 4s ease-in-out infinite;
        }
      `}} />

      <Navbar />
      <Heroes />
      <Countdown />
      <SpaceSection />
      <SectionAboutUs />
      <SectionTheme />
      <SectionTracks />
      <GarudaByTheNumbers />
      <SectionSpeakers />
      <SectionJudges />
      <section id="projects">
        <SectionProjectPast/>
      </section>
      
      <SectionRecaps />
      
      <div className="relative w-full">
        <div className="absolute right-4 md:right-12 lg:right-[20px] -top-[80px] md:-top-[130px] z-[100] animate-float-mascot drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]">
          
          <motion.div
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.6}
            whileHover={{ cursor: "grab" }}
            whileDrag={{ cursor: "grabbing", scale: 1.05 }}
            className="w-[140px] md:w-[220px] lg:w-[220px] h-auto flex justify-end"
          >
            <StickerPeel
              imageSrc="/image/ghq_garudie_mascot.png"
              width={220} 
              rotate={0}
              peelBackHoverPct={12}
              peelBackActivePct={20}
              shadowIntensity={0.4}
              lightingIntensity={0.1}
              initialPosition={{ x: -100, y: 100 }}
              peelDirection={0}
            />
          </motion.div>

        </div>
        
        <Footer />
      </div>
    </div>
  );
}