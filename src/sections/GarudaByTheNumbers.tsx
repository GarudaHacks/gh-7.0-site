import { byTheNumbers } from "@/data/data";
import Image from "next/image";
import CarrouselGithub from "../components/CarrouselGithub";

export default function GarudaByTheNumbers() {
  return (
    <section className="w-full border-b border-[#C4A9FF] relative">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
        <div className="py-[60px] md:py-[80px] lg:py-[120px] border-x border-[#C4A9FF]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 p-12">
            <h3 className="text-[#221139] md:col-span-3 text-center font-semibold text-[20px] md:text-[26px] lg:text-[32px]">
              Garuda Hacks by the numbers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 px-4 md:px-12">
            {byTheNumbers.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between min-h-[200px] border border-[#C4A9FF] rounded-[12px] p-6 bg-transparent backdrop-blur-sm group transition-all duration-300 hover:border-[#874FFE] hover:shadow-lg hover:shadow-[#874FFE] group-hover:overflow-visible overflow-hidden"
              >
                <div className="relative z-10">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[72px] md:text-[84px] text-[#221139] leading-none tracking-tighter">
                    {item.number}
                  </h3>
                </div>

                <div className="relative z-10 mt-4">
                  <p className="font-['Montserrat',sans-serif] font-semibold text-[18px] text-[#221139] leading-tight">
                    {item.unit} <br />
                    <span className="font-medium opacity-70">
                      {item.description}
                    </span>
                  </p>
                </div>

                <div className="absolute -right-4 -bottom-6 w-[180px] h-[180px] pointer-events-none z-0">
                  <div className="relative w-full h-full opacity-40 group-hover:opacity-100 group-hover:scale-164 group-hover:-rotate-12 transition-all duration-500 ease-out">
                    <Image
                      src={`/image/${item.iconBaseName}.svg`}
                      alt="Decoration Outline"
                      fill
                      className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    />

                    <Image
                      src={`/image/${item.hoverIcon}.svg`}
                      alt="Decoration Filled"
                      fill
                      className="object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <CarrouselGithub />
        </div>
      </div>
    </section>
  );
}
