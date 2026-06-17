"use client";

import Image from "next/image";
import { managingDirectors, teamGroups, type TeamMember } from "../data/data";

const FRAME_COUNT = 3;
const frameSrc = (n: number) => `/frames/frame_${n}.svg`;
const outlineSrc = (n: number) => `/frames/outline_frame_${n}.svg`;

function Portrait({
  member,
  frameIndex,
}: {
  member: TeamMember;
  frameIndex: number;
}) {
  const frame = (((frameIndex % FRAME_COUNT) + FRAME_COUNT) % FRAME_COUNT) + 1;

  const hasPhoto =
    member.photo &&
    member.photo.trim() !== "" &&
    member.photo !== "placeholder";

  return (
    <div className="group/tile relative z-10 shrink-0 cursor-pointer transition-all duration-300 hover:z-40 hover:-translate-y-2">
      <div className="relative h-[150px] w-[130px] md:h-[195px] md:w-[170px]">
        <div
          className="absolute inset-0 bg-[#E4D9FF] transition-transform duration-300 group-hover/tile:scale-[1.04] z-30"
          style={{
            WebkitMaskImage: `url(${frameSrc(frame)})`,
            maskImage: `url(${frameSrc(frame)})`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          {hasPhoto && (
            <Image
              src={`/team/${member.photo}`}
              alt={member.name}
              fill
              className="object-cover"
              sizes="170px"
            />
          )}
        </div>

        <Image
          src={outlineSrc(frame)}
          alt=""
          fill
          aria-hidden="false"
          className="pointer-events-none absolute inset-0 object-contain w-full transition-transform duration-300 group-hover/tile:scale-[1.04] z-20"
        />

        <div className="absolute -bottom-2 -right-2 z-50 h-9 w-9 drop-shadow-md transition-transform duration-300 group-hover/tile:scale-110 md:h-11 md:w-11">
          <Image src="/frames/logo-garuda.svg" alt="" fill aria-hidden="true" />
        </div>
      </div>

      <p className="mt-3 w-[130px] text-center text-[12px] font-semibold leading-tight text-[#221139] md:w-[170px] md:text-[14px]">
        {member.name}
      </p>
    </div>
  );
}

function TrainUnit() {
  let cursor = 0;

  return (
    <div className="flex shrink-0 items-start gap-6 md:gap-10">
      {managingDirectors.map((member, i) => (
        <Portrait
          key={`md-${member.name}-${i}`}
          member={member}
          frameIndex={cursor++}
        />
      ))}

      {teamGroups.map((group, gi) =>
        group.members.map((member, i) => (
          <Portrait
            key={`car-${group.team}-${member.name}-${i}-${gi}`}
            member={member}
            frameIndex={cursor++}
          />
        )),
      )}
    </div>
  );
}

export default function SectionTeam() {
  return (
    <section className="w-full relative border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
        <div className="border-x border-[#C4A9FF] py-[60px] md:py-[80px] lg:py-[120px]">
          {/* heading */}
          <div className="px-4 md:px-12 text-center">
            <h2 className="font-bold text-[#221139] text-[24px] md:text-[40px] lg:text-[48px] leading-[1.1]">
              Meet The GH 7.0 Team
            </h2>
          </div>

          <div className="relative mt-10 md:mt-14 overflow-hidden py-6">
            <div className="flex w-max animate-infinite-scroll items-start gap-16 hover:[animation-play-state:paused] md:gap-24">
              <TrainUnit />
              <TrainUnit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
