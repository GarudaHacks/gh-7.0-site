import { byTheNumbers } from "@/data/data";
import Image from "next/image";

export default function GarudaByTheNumbers() {
  return (
    <section className="w-full border-b border-[#C4A9FF] relative">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-x border-[#C4A9FF]">
        <div className="py-[40px] border-x border-[#C4A9FF]">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 p-6">
            <h3 className="text-[#221139] md:col-span-3 text-center font-bold text-[24px] md:text-[48px]">
              Garuda Hacks Prize Pool
            </h3>
          </div>

          {/* Grid Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-4 px-4 md:px-12">
            {byTheNumbers.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col justify-between min-h-[220px] p-6 rounded-xl border border-[#C4A9FF] bg-[#F9F5FF]/40 backdrop-blur-sm shadow-sm overflow-hidden group hover:border-[#874FFE] hover:shadow-md transition-all duration-300"
              >
                <div className="relative z-10 min-h-[90px] flex items-center">
                  {item.number ? (
                    <h3 className="font-bold text-[72px] md:text-[84px] text-[#8036CB] leading-none tracking-tighter select-none">
                      {item.number}
                    </h3>
                  ) : item.logo ? (
                    <div className="relative w-[200px] h-[70px]">
                      <Image
                        src={`/sponsors/${item.logo}.png`}
                        alt={`${item.title} Logo`}
                        fill
                        draggable={false}
                        className="object-contain object-left select-none"
                        priority
                      />
                    </div>
                  ) : null}
                </div>

                <div className="relative z-10 mt-4">
                  <p className="font-['Montserrat',sans-serif] font-semibold text-[18px] text-[#874FFE] leading-tight">
                    {item.unit} <br />
                    <span className="font-medium opacity-70">
                      {item.description}
                    </span>
                  </p>
                </div>

                <div className="absolute -right-4 top-10 w-[180px] h-[180px] pointer-events-none z-0">
                  <div className="relative w-full h-full opacity-40 rounded-full group-hover:opacity-100 group-active:opacity-100 group-hover:scale-110 group-active:scale-110 group-hover:-rotate-12 group-active:-rotate-12 transition-all duration-500 ease-out">
                    <Image
                      src={`/image/${item.iconBaseName}.svg`}
                      alt="Decoration Outline"
                      fill
                      draggable={false}
                      className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0 group-active:opacity-0 select-none"
                    />

                    <Image
                      src={`/image/${item.hoverIcon}.svg`}
                      alt="Decoration Filled"
                      fill
                      draggable={false}
                      className="object-contain absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-active:opacity-100 select-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
