import Image from "next/image";
import { contributors } from "../data/data";
import Link from "next/link";

export default function CarrouselGithub() {
  const doubleContributors = [...contributors, ...contributors];

  return (
    <section className="w-full bg-transparent overflow-hidden">
      <div className="">
        <div className="py-4">
          <div className="relative flex w-full overflow-hidden">
            <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-2">
              {doubleContributors.map((username, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center mx-6 group cursor-pointer"
                >
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-[8px] overflow-hidden border-2 border-[#C4A9FF] group-hover:border-[#8E47D6] group-hover:scale-110 transition-all duration-300 bg-white shadow-sm">
                    <Image
                      src={`https://github.com/${username}.png`}
                      alt={username}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <span className="mt-2 text-[12px] font-['Montserrat',sans-serif] font-medium text-[#AD87FF] group-hover:text-[#8E47D6]">
                    @{username}
                  </span>
                </div>
              ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-backdrop-blur-md to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-backdrop-blur-md to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
