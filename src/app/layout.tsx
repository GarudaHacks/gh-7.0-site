import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garuda Hacks 7.0",
  description: "Be part of Indonesia's largest hackathon",
  verification:{
    google: "unHurz_L_3inojTAvWWqQJafqq00-LtPuMfgJ8RxP2o",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", "font-sans", geist.variable)}
    >
      <body
        className={`${montserrat.variable} font-sans min-h-full flex flex-col`}
      >
        {children}
        <GoogleAnalytics gaId="G-DMZYV50LX3" />
      </body>
    </html>
  );
}
