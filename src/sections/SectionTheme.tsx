"use client";

export default function SectionTheme() {
  return (
    <section
      id="theme"
      className="w-full relative border-b border-[#C4A9FF]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="px-4 md:px-12 py-16 md:py-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF] flex flex-col gap-6 md:gap-8 items-start w-full">
          <div className="flex flex-col gap-2 items-start w-full">
            <div className="flex items-start justify-center w-full">
              <div className="flex-1 flex items-center justify-center px-3 py-2">
                <h2 className="flex-1  font-bold text-[#221139] text-2xl md:text-[32px] leading-normal text-center">
                  Introducing Our Theme
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center text-[#221139] text-center px-4 md:px-[54px] py-0.5 w-full">
                <p className="font-medium text-lg md:text-[24px] leading-normal min-w-full">
                  This is Our Theme for This Years Hackathon
                </p>
                <p className="font-normal text-sm md:text-[16px] leading-relaxed max-w-[688px] w-full">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
