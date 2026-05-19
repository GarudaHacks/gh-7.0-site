import CornerCube from "@/components/Cornercube";
import Image from "next/image";

export default function Heroes() {
  const points = [
    // dott bawah
    { pos: "-left-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },
    { pos: "-right-[-31px] -bottom-[10px] hidden lg:hidden xl:flex z-40" },

    // dott bawah
    { pos: "left-[7px] -bottom-[10px] lg:left-[111px] lg:-bottom-[10px] xl:left-[153px] xl:-bottom-[10px]" },
    { pos: "right-[7px] -bottom-[10px] lg:right-[111px] lg:-bottom-[10px] xl:right-[153px] xl:-bottom-[10px]" },
  ];
  return (
    <section className="w-full relative border-b border-[#C4A9FF]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
        {points.map((point, i) => (
          <CornerCube key={i} className={`${point.pos} pointer-events-none`} />
        ))}
        <div className="flex flex-col items-center border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] justify-center gap-6 p-[120px] relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

          <div className="relative flex flex-col items-center justify-center p-auto gap-auto">
            <div className="flex flex-col items-center justify-center px-12 py-12 md:py-32 gap-4">
              <h1 className="font-bold text-[#221139] text-center text-[64px] md:text-[80px] lg:text-[120px] leading-none whitespace-nowrap">
                Garuda <br className="block md:hidden" /> Hacks 7.0
              </h1>
              <div className="flex flex-col items-center gap-0">
                <p className="font-medium text-[#221139] text-[16px] md:text-[18px] text-center">
                  July 24 - 26 | 2026 <br className="block md:hidden" /> at
                  Universitas Multimedia Nusantara
                </p>
                <p className="font-medium text-[#221139] text-[16px] md:text-[18px] text-center">
                  Be part of Indonesia's largest hackathon
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-center flex-wrap z-20">
              <a
                href="#apply"
                className="btn-custom w-[220px] md:w-[180px] font-['Montserrat',sans-serif] font-medium text-[16px] text-center "
              >
                Apply Now
              </a>
              <a
                href="#guidebook"
                className="btn-custom w-full md:w-[180px] font-['Montserrat',sans-serif] font-medium text-[16px] text-center "
              >
                Guide Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
