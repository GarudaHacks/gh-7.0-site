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

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Heroes />
      <Countdown />
      <SpaceSection />
      <SectionAboutUs />
      <SectionSpeakers />
      <SectionTheme />
      <SectionTracks />
      <GarudaByTheNumbers />
      <Footer />
    </div>
  );
}
