"use client";

export default function SectionTheme() {
  return (
    <section
      id="theme"
      className="w-full relative border-b border-[rgba(124,58,237,0.2)]"
    >
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[120px] border-r border-l border-t border-r-[rgba(124,58,237,0.2)] border-l-[rgba(124,58,237,0.2)]">
        <div className="px-4 md:px-12 py-16 md:py-[120px] border-r border-l border-r-[rgba(124,58,237,0.2)] border-l-[rgba(124,58,237,0.2)] flex flex-col gap-6 md:gap-8 items-start w-full">
          <div className="flex flex-col gap-2 items-start w-full">
            <div className="flex items-start justify-center w-full">
              <div className="flex-1 flex items-center justify-center px-3 py-2">
                <h2 className="flex-1  font-bold text-[#f8f9fa] text-2xl md:text-[48px] leading-normal text-center">
                  Introducing Our Theme
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-center w-full">
              <div className="flex flex-col gap-3 items-center justify-center text-[#f8f9fa] text-center px-4 md:px-[54px] py-0.5 w-full">
                <p className="font-medium text-lg md:text-[24px] leading-normal min-w-full">
                  This is Our Theme for This Years Hackathon
                </p>
                <p className="font-normal text-sm md:text-[16px] leading-relaxed max-w-[688px] w-full">
                As the world faces rising healthcare inequality, increasing climate-related disasters, global food insecurity, and growing concerns over public safety, nations are being challenged to build stronger and more resilient systems for the future.
Indonesia faces structural challenges across health equity, public safety, and food production. Long-term national stability depends on how we strengthen these three foundational pillars. We must build reliable systems that protect public health, minimize regional vulnerabilities, and stabilize the agricultural economy so every community can thrive.
This year’s theme focuses on developing sustainable solutions for Health, Safety, and Resilience, and Agriculture. You are challenged to create functional tools that address regional disparities and support vulnerable populations. Your work will directly contribute to building a more stable, self-sufficient, and secure future for Indonesia.

                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
