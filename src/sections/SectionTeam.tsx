"use client";

import Image from "next/image";
import { teamMembers, type TeamMember } from "../data/data";

// A single portrait photo sitting on a colored tile inside a carriage box.
function Portrait({
  member,
  variant,
}: {
  member: TeamMember;
  variant: "head" | "car";
}) {
  const tile =
    variant === "head" ? "bg-[#874FFE]" : "bg-[#5B95F5]";
  return (
    <div
      className={`group/tile relative shrink-0 cursor-pointer rounded-[16px] ${tile} p-2.5 transition-all duration-300 hover:z-30 hover:-translate-y-2 hover:scale-[1.06] hover:shadow-[0_14px_28px_rgba(34,17,57,0.35)] md:p-3`}
    >
      <div className="relative h-[150px] w-[115px] overflow-hidden rounded-[10px] bg-white/10 md:h-[185px] md:w-[145px]">
        <Image
          src={`/image/team/${member.photo}`}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover/tile:scale-105"
          sizes="145px"
        />
      </div>
    </div>
  );
}

// One complete train unit: lilac head (MDs) + one continuous blue box (members).
// Rendered twice in a row so the whole train loops seamlessly.
function TrainUnit({
  directors,
  members,
}: {
  directors: TeamMember[];
  members: TeamMember[];
}) {
  return (
    <div className="flex shrink-0 items-stretch">
      {/* LILAC HEAD — Managing Directors, angled nose */}
      <div
        className="relative z-10 flex shrink-0 items-center gap-3 rounded-r-[28px] bg-[#C4A9FF] py-5 pl-12 pr-5 md:gap-4 md:py-6 md:pl-20 md:pr-6"
        style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {directors.map((member, i) => (
          <Portrait key={`md-${member.name}-${i}`} member={member} variant="head" />
        ))}
      </div>

      {/* GAP between the head and the blue box (the head's RIGHT gap — smaller) */}
      <div className="w-6 shrink-0 md:w-10" aria-hidden="true" />

      {/* BLUE BOX — one continuous carriage holding all the members */}
      <div className="flex shrink-0 items-center gap-3 rounded-[28px] bg-[#4D8DF0] px-4 py-5 shadow-[0_10px_0_rgba(90,90,110,0.35)] md:gap-4 md:px-6 md:py-6">
        {members.map((member, i) => (
          <Portrait key={`car-${member.name}-${i}`} member={member} variant="car" />
        ))}
      </div>
    </div>
  );
}

export default function SectionTeam() {
  // First two members are the Managing Directors (lilac head).
  const directors = teamMembers.slice(0, 2);
  const members = teamMembers.slice(2);

  return (
    <section className="w-full relative border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
        <div className="border-x border-[#C4A9FF] py-[60px] md:py-[80px] lg:py-[120px]">
          {/* heading */}
          <div className="px-4 md:px-12">
            <h2 className="font-semibold text-[#221139] text-[24px] md:text-[40px] lg:text-[48px] leading-[1.1]">
              Meet The <br className="hidden md:block" />
              GH 7.0 Team
            </h2>
          </div>

          {/* the train — whole unit (head + blue box) scrolls and loops together */}
          <div className="relative mt-10 md:mt-14 overflow-hidden pb-4">
            <div className="flex w-max animate-infinite-scroll items-stretch hover:[animation-play-state:paused]">
              {/* two identical train units back-to-back => seamless -50% loop */}
              <TrainUnit directors={directors} members={members} />
              <div className="w-24 shrink-0 md:w-44" aria-hidden="true" />
              <TrainUnit directors={directors} members={members} />
              <div className="w-24 shrink-0 md:w-44" aria-hidden="true" />
            </div>

            {/* fade masks so the train slides in/out cleanly on both edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F9F5FF] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F9F5FF] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}