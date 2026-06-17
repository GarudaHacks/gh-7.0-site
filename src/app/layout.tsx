import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garudahacks 7.0",
  description: "Comingsoon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased bg-[#0F1117]", "font-sans", geist.variable)}
    >
      <body className={`${montserrat.variable} font-sans min-h-full flex flex-col bg-[#0F1117] text-[#f8f9fa]`}>{children}</body>
    </html>
  );
}
