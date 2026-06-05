"use client";

import { useState } from "react";
import { XMarkIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import CornerCube from "@/components/Cornercube";

// ─── DUMMY DATA ────────────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  number: string;
  image: string;
  description: string;
  teamName: string;
}

const projects: Project[] = [
  {
    id: "proj-1",
    title: "Jedela",
    number: "01",
    image: "https://assets.aceternity.com/placeholder-checkered.png",
    description:
      "Jendela helps ex-convicts find jobs by connecting them with training centers and business partners...",
    teamName: "Team name",
  },
  {
    id: "proj-2",
    title: "Jedela",
    number: "02",
    image: "https://assets.aceternity.com/placeholder-checkered.png",
    description:
      "Jendela helps ex-convicts find jobs by connecting them with training centers and business partners...",
    teamName: "Team name",
  },
  {
    id: "proj-3",
    title: "Jedela",
    number: "03",
    image: "https://assets.aceternity.com/placeholder-checkered.png",
    description:
      "Jendela helps ex-convicts find jobs by connecting them with training centers and business partners...",
    teamName: "Team name",
  },
  {
    id: "proj-4",
    title: "Jedela",
    number: "04",
    image: "https://assets.aceternity.com/placeholder-checkered.png",
    description:
      "Jendela helps ex-convicts find jobs by connecting them with training centers and business partners...",
    teamName: "Team name",
  },
];

// ─── KOMPONEN CARD (Telah Di-upgrade UI/UX-nya) ────────────────────
function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <div
      className="flex flex-col gap-4 mx-4 w-[340px] shrink-0 group cursor-pointer bg-white border border-[#C4A9FF]/60 hover:border-[#874FFE] rounded-2xl p-5 shadow-sm hover:shadow-xl hover:shadow-[#C4A9FF]/20 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
      onClick={() => onOpen(project)}
    >
      {/* Background tint tipis pas di-hover biar makin premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F9F5FF]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header: Title & Number Badge */}
      <div className="relative z-10 flex justify-between items-center mb-1">
        <h3 className="font-bold text-[#221139] text-[19px] group-hover:text-[#874FFE] transition-colors duration-300">
          {project.title}
        </h3>
        <span className="font-bold text-[#874FFE] text-[14px] bg-[#F9F5FF] border border-[#C4A9FF]/50 px-2.5 py-1 rounded-md">
          {project.number}
        </span>
      </div>

      {/* Image / Placeholder */}
      <div className="relative z-10 w-full h-[190px] bg-[#EAE5F4] rounded-xl overflow-hidden border border-[#C4A9FF]/40 group-hover:border-[#C4A9FF] transition-colors">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAACVJREFUKFNjZCASMDKgAhjR5f7//89ITREjI4wNUw1y0zD1IAQAf3QJ/bT10nAAAAAASUVORK5CYII=";
            (e.target as HTMLImageElement).style.imageRendering = "pixelated";
          }}
        />
      </div>

      {/* Description */}
      <p className="relative z-10 font-medium text-[#5B4A7A] text-[15px] leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Button (Dibikin Full Width biar proporsi seimbang) */}
      <button className="relative z-10 mt-auto bg-[#F9F5FF] border border-[#C4A9FF] group-hover:bg-[#874FFE] group-hover:border-[#874FFE] transition-colors duration-300 text-[#221139] group-hover:text-white text-[14px] font-semibold py-3 px-4 rounded-xl w-full flex justify-between items-center">
        <span>{project.teamName}</span>
        <ArrowRightIcon className="w-4 h-4 stroke-[2.5]" />
      </button>
    </div>
  );
}

// ─── KOMPONEN MODAL (Tetap sama) ───────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#221139]/40 backdrop-blur-md" />

      <div
        className="relative z-10 bg-[#F9F5FF] border border-[#C4A9FF] rounded-2xl max-w-[520px] w-full p-6 md:p-8 shadow-lg shadow-[#C4A9FF]/50 animate-[gh-modal-in_0.22s_ease_both]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#221139] hover:text-[#67339C] transition-colors"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-[72px] h-[72px] rounded-lg overflow-hidden bg-[#EAE5F4] shrink-0 relative border border-[#C4A9FF]/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div>
            <h3 className="font-bold text-[#221139] text-[20px] leading-normal">
              {project.title}
            </h3>
            <p className="font-semibold text-[#874FFE] text-[15px] leading-normal mt-1">
              Team: {project.teamName}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-[#C4A9FF] mb-5" />
        <div className="font-medium text-[#221139] text-[15px] leading-relaxed">
          {project.description}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN SECTION ──────────────────────────────────────────────────
export default function SectionProjectPast() {
  const [selected, setSelected] = useState<Project | null>(null);

  const doubleProjects = [...projects, ...projects];

  const points = [
    { pos: "-left-[-31px] -top-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -top-[10px] hidden lg:hidden xl:flex" },
    {
      pos: "left-[7px] -top-[10px] lg:left-[111px] lg:-top-[10px] xl:left-[153px] xl:-top-[10px]",
    },
    {
      pos: "right-[7px] -top-[10px] lg:right-[111px] lg:-top-[10px] xl:right-[153px] xl:-top-[10px]",
    },
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    {
      pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]",
    },
    {
      pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]",
    },
  ];

  return (
    <section
      id="project-past"
      className="w-full relative border-b border-[#C4A9FF]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}

        <div className="py-14 md:py-[90px] flex flex-col gap-10 w-full border-r border-l border-[#C4A9FF] overflow-hidden">
          <div className="flex items-center justify-center px-6 w-full">
            <h2 className="font-bold text-[#221139] text-3xl md:text-[36px] leading-normal text-center tracking-tight">
              Project Past
            </h2>
          </div>

          <div className="relative flex w-full overflow-hidden">
            {/* Animasi jalan di-pause pas di hover biar user gampang baca dan klik */}
            <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-4">
              {doubleProjects.map((proj, index) => (
                <ProjectCard
                  key={`${proj.id}-${index}`}
                  project={proj}
                  onOpen={setSelected}
                />
              ))}
            </div>

            {/* Gradient untuk transisi masuk & keluar di pinggir layar */}
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#F9F5FF] via-[#F9F5FF]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#F9F5FF] via-[#F9F5FF]/80 to-transparent" /> */}
          </div>
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
