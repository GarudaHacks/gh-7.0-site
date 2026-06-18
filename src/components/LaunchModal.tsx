"use client";

import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import InstructionFlow from "./InstructionFlow";

type LaunchState = "idle" | "shaking" | "launching" | "arrived";
type FlowType = "start" | "instruction" | null;

export default function LaunchModal({ onClose }: { onClose: () => void }) {
  const [launchState, setLaunchState] = useState<LaunchState>("idle");
  const [selectedFlow, setSelectedFlow] = useState<FlowType>(null);

  const handleLaunch = (flow: FlowType) => {
    setLaunchState("shaking");
    
    // Mesin panas & bergetar (keluar asap)
    setTimeout(() => {
      setLaunchState("launching");
      
      // Meluncur (Warp speed & Flash putih)
      setTimeout(() => {
        if (flow === "start") {
          // Kalau "start", arahin ke portal setelah animasi kelar
          window.location.href = "https://portal.garudahacks.com";
          
          // Reset state ke idle buat jaga-jaga kalau user pencet 'back' di browser
          setTimeout(() => {
            setLaunchState("idle");
            setSelectedFlow(null);
          }, 500);
        } else {
          // Kalau "instruction", tampilin komponennya
          setLaunchState("arrived");
          setSelectedFlow(flow);
        }
      }, 900);
    }, 1500);
  };

  const handleBackToCockpit = () => {
    setLaunchState("idle");
    setSelectedFlow(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F0622]/90 backdrop-blur-md overflow-hidden perspective-1000">
      
      {/* ── CSS KHUSUS ANIMASI ROKET, ASAP, & WARP ── */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cockpitShake {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-3px, 5px) rotate(-1deg); }
          50% { transform: translate(4px, -3px) rotate(1.5deg); }
          75% { transform: translate(-5px, -2px) rotate(-1.5deg); }
        }
        @keyframes warpSpeed {
          0% { transform: scale(1) translateZ(0); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: scale(8) translateZ(800px); opacity: 0; }
        }
        @keyframes smokeBlast {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translateY(150px) scale(3); opacity: 0; }
        }
        @keyframes whiteFlash {
          0% { opacity: 0; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-shake-intense {
          animation: cockpitShake 0.15s infinite;
        }
        .warp-line {
          position: absolute;
          width: 3px;
          height: 150px;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
          animation: warpSpeed 0.3s infinite linear;
        }
        .smoke-cloud {
          position: absolute;
          bottom: -10%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(135,79,254,0.9) 0%, rgba(135,79,254,0) 70%);
          filter: blur(15px);
          animation: smokeBlast 0.6s infinite ease-out;
        }
      `}} />

      {/* Tombol Close Utama (Dibuat lebih responsif di mobile) */}
      <button
        onClick={onClose}
        aria-label="Close panel"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#C4A9FF]/40 text-[#C4A9FF] bg-[#1E0A3C] text-base md:text-lg cursor-pointer transition-all duration-200 hover:bg-[#C4A9FF] hover:text-[#221139] hover:rotate-90 shadow-lg"
      >
        <XMarkIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* ── FASE 1: COCKPIT & LAUNCHING ── */}
      {(launchState === "idle" || launchState === "shaking" || launchState === "launching") && (
        <div 
          className={`relative inline-flex items-center justify-center transition-transform duration-[900ms] ease-in
            ${launchState === 'shaking' ? 'animate-shake-intense' : ''}
            ${launchState === 'launching' ? 'scale-[25] opacity-0 duration-[900ms]' : 'animate-[fadeIn_0.4s_ease]'}
          `}
        >
          <img
            src="/image/steering_2.svg"
            alt="Cockpit panel"
            className="w-[95vw] md:w-[min(90vw,900px)] h-auto min-h-[250px] object-contain pointer-events-none select-none drop-shadow-2xl"
          />

          {/* Efek Asap Roket pas lagi Getar (Mau Takeoff) */}
          {launchState === "shaking" && (
            <div className="absolute inset-x-0 -bottom-20 h-64 flex items-center justify-center pointer-events-none overflow-visible z-[-1]">
              <div className="smoke-cloud w-48 h-48 md:w-64 md:h-64" style={{ left: '30%', animationDelay: '0s' }} />
              <div className="smoke-cloud w-64 h-64 md:w-80 md:h-80" style={{ left: '50%', animationDelay: '0.2s' }} />
              <div className="smoke-cloud w-48 h-48 md:w-64 md:h-64" style={{ left: '70%', animationDelay: '0.1s' }} />
            </div>
          )}

          {/* Efek Garis Bintang Warp Speed & Flash Putih pas Launching */}
          {launchState === "launching" && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none origin-center z-50">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i} 
                  className="warp-line" 
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    animationDelay: `${Math.random() * 0.1}s`
                  }} 
                />
              ))}
              {/* Flash putih buat transisi mulus */}
              <div className="fixed inset-0 bg-white pointer-events-none" style={{ animation: 'whiteFlash 0.9s ease-in-out forwards' }} />
            </div>
          )}

          {/* Tombol Pilihan Menu (Dibuat responsif ukurannya) */}
          {launchState === "idle" && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 items-center z-10 w-full px-4">
              <button
                onClick={() => handleLaunch("start")}
                className="block w-[120px] sm:w-[200px] md:w-[220px] py-3 md:py-[14px] text-center bg-gradient-to-r from-[#874FFE] to-[#67339C] rounded-lg text-white font-bold text-[12px] md:text-[18px] tracking-[0.1em] uppercase shadow-[0_0_20px_#874FFE80] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_#C4A9FF]"
              >
                Start Now
              </button>

              <button
                onClick={() => handleLaunch("instruction")}
                className="block w-[130px] sm:w-[200px] md:w-[220px] py-3 md:py-[14px] text-center bg-[#120524]/80 border-2 border-[#874FFE]/50 rounded-lg text-[#C4A9FF] font-bold text-[12px] md:text-[16px] tracking-[0.1em] uppercase backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-[#874FFE]/30 hover:border-[#C4A9FF] hover:text-white"
              >
                Instruction
              </button>
            </div>
          )}
        </div>
      )}

      {/* ── FASE 2: TIBA DI TUJUAN (ARRIVED) ── */}
      {/* Cuma dirender kalau user milih instruction */}
      {launchState === "arrived" && selectedFlow === "instruction" && (
        <div className="w-full px-4 flex items-center justify-center animate-[fadeIn_0.5s_ease-out]">
         <InstructionFlow 
            onBack={handleBackToCockpit} 
            // Kalau dari dalem instruction user klik register, kita panggil animasi start
            onRegister={() => {
              setLaunchState("idle"); // Reset bentar buat nampilin cockpit
              setTimeout(() => handleLaunch("start"), 50); // Langsung lempar ke animasi warp
            }} 
          />
        </div>
      )}
    </div>
  );
}