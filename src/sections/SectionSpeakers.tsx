"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { speaker } from "@/data/data";
import CornerCube from "@/components/Cornercube";

interface Speaker {
  id: number;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const speakers: Speaker[] = [speaker[0], speaker[1], speaker[2]];

function SpeakerCard({
  speaker,
  onOpen,
}: {
  speaker: Speaker;
  onOpen: (s: Speaker) => void;
}) {
  return (
    <div
      className="group cursor-pointer [perspective:1000px] shrink-0 w-[264px] snap-center"
      onClick={() => onOpen(speaker)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(speaker)}
      aria-label={`Open ${speaker.name} profile`}
    >
      <div className="relative w-full h-[339px] transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-[#F9F5FF] border border-[#C4A9FF] rounded-xl flex flex-col items-center overflow-hidden p-3 [backface-visibility:hidden]">
          <div className="bg-[#C4A9FF] flex items-end justify-end w-full h-[248px] rounded-lg p-3 relative overflow-hidden">
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />

            <div className="relative z-10 w-12 h-12 bg-[#AD87FF] rounded-full flex items-center justify-center shrink-0">
              <ArrowRightIcon
                className="h-5 w-5 stroke-[#F9F5FF]"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <div className="flex flex-col items-center py-3 w-full">
            <div className="flex items-center w-full">
              <p className="flex-1  font-medium text-[#221139] text-[18px] leading-normal break-words">
                {speaker.name}
              </p>
            </div>
            <div className="flex items-center w-full">
              <p className="flex-1  font-normal text-[#221139] text-[16px] leading-normal break-words">
                {speaker.role}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[#F9F5FF] border border-[#C4A9FF] rounded-xl flex flex-col items-center overflow-hidden p-3 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex flex-col items-center gap-2 w-full h-full">
            <div className="w-full">
              <p className=" font-semibold text-[#221139] text-[18px] leading-normal w-full">
                {speaker.name}
              </p>
              <p className=" font-medium text-[#8E47D6] text-[16px] leading-normal w-full">
                {speaker.role}
              </p>
            </div>

            <div className="flex items-start w-full flex-1 overflow-hidden">
              <p className=" font-normal text-[#221139] text-[16px] leading-snug break-words line-clamp-[8]">
                {speaker.bio}
              </p>
            </div>
            <p className=" font-medium text-[#AD87FF] text-[16px] mt-2 self-start">
              Click to read full bio →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: Speaker;
  onClose: () => void;
}) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-100 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#221139]/40 backdrop-blur-md" />

      <div
        className="relative z-10 bg-[#F9F5FF] border border-[#C4A9FF] rounded-2xl max-w-[520px] w-full p-6 md:p-8 shadow-lg active:shadow-lg shadow-[#C4A9FF]/50 active:shadow-[#C4A9FF]/50 animate-[gh-modal-in_0.22s_ease_both] active:animate-[gh-modal-in_0.22s_ease_both]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${speaker.name} full profile`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#221139] hover:text-[#67339C] transition-colors"
          aria-label="Close"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden bg-[#C4A9FF] shrink-0 relative">
            <img
              src={speaker.photo}
              alt={speaker.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* <span className="absolute inset-0 flex items-center justify-center  font-bold text-[#221139] text-2xl pointer-events-none">
              {speaker.name.charAt(0)}
            </span> */}
          </div>
          <div>
            <h3 className="font-semibold text-[#221139] text-[20px] leading-normal">
              {speaker.name}
            </h3>
            <p className="font-normal text-[#67339C] text-[15px] leading-normal">
              {speaker.role}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-[#C4A9FF] mb-5" />
        <div className="font-normal text-[#221139] text-[15px] leading-relaxed whitespace-pre-line">
          {speaker.bio}
        </div>
      </div>
    </div>
  );
}

export default function SectionSpeakers() {
  const [selected, setSelected] = useState<Speaker | null>(null);

  const points = [
    // dott atas
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },
    // dott atas
    { pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]" },
    { pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]" },
    // dott bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    // dott bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];

  return (
    <section
      id="speakers"
      className="w-full relative border-b border-[#C4A9FF]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}
        <div className="pl-6 md:pl-0 py-14 md:py-[40px] flex flex-col gap-[14px] items-start w-full border-r border-l border-[#C4A9FF] overflow-hidden">
          <div className="flex items-center justify-center px-3 py-2 w-full">
            <h2 className="flex-1 font-bold text-[#221139] text-[24px] md:text-[48px] leading-normal text-center">
              Speakers
            </h2>
          </div>

          <div
            className="no-scrollbar flex gap-[32px] items-center justify-start md:justify-center w-full pb-4 md:pb-0 md:flex-wrap overflow-x-auto snap-x snap-mandatory [-webkit-overflow-scrolling:touch] w-screen -ml-6 pl-6 md:w-full md:ml-0 md:pl-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {speakers.map((s) => (
              <SpeakerCard key={s.id} speaker={s} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <SpeakerModal speaker={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
