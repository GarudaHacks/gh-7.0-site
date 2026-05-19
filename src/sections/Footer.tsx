const footerColumns = [
  {
    title: "Garuda Hacks © 2026",
    isBrand: true,
    links: [
      { label: "Join Now", href: "#" },
      { label: "Guide Book", href: "#" },
    ],
  },
  {
    title: "About",
    links: [{ label: "Download", href: "#" }],
  },
  {
    title: "Project",
    links: [
      { label: "Discord", href: "#" },
      { label: "GH 2025", href: "#" },
    ],
  },
  {
    title: "Track",
    links: [
      { label: "Blog", href: "#" },
      { label: "About", href: "#" },
      { label: "Team", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", href: "#" },
      { label: "Medium", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Tiktok", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#8E47D6]">
      <div className="mx-auto max-w-[1440px] px-4 md:px-12 lg:px-[120px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF]">
        <div className="py-4 pb-[120px] md:pb-[440px] border-r border-l border-r-[#C4A9FF] border-l-[#C4A9FF]">
          <div className="px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12 pt-2 border-b border-[#C4A9FF]">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-6">
                <div
                  className={`py-2 ${col.isBrand ? "border-r border-[#C4A9FF]" : ""}`}
                >
                  <div className="px-2 py-0.5">
                    <span
                      className={`text-[#F9F5FF] text-[16px] md:text-[18px] ${
                        col.isBrand ? "font-bold" : "font-medium"
                      }`}
                    >
                      {col.title}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <div key={link.label} className="flex flex-col">
                      <a
                        href={link.href}
                        className="px-2 py-0.5 font-medium text-[#F9F5FF] text-[16px] md:text-[18px] hover:text-[#C4A9FF] transition-colors"
                      >
                        {link.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
