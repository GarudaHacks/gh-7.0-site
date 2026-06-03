"use client";

import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface InstructionProps {
  onBack: () => void;
  onRegister: () => void;
}

const PlanetBase = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-[0_0_15px_rgba(135,79,254,0.5)]">
    <circle cx="50" cy="50" r="45" fill="#67339C" />
    <path d="M 20 40 Q 40 20 60 50 T 90 40 A 45 45 0 0 1 20 80 Z" fill="#874FFE" opacity="0.6"/>
    <circle cx="35" cy="35" r="5" fill="#C4A9FF" opacity="0.8" />
  </svg>
);

const PlanetRing = () => (
  <svg viewBox="0 0 120 100" className="w-20 h-16 drop-shadow-[0_0_15px_rgba(196,169,255,0.5)]">
    <ellipse cx="60" cy="50" rx="55" ry="15" fill="none" stroke="#C4A9FF" strokeWidth="6" transform="rotate(-15 60 50)" />
    <circle cx="60" cy="50" r="35" fill="#874FFE" />
    <ellipse cx="60" cy="50" rx="55" ry="15" fill="none" stroke="#EAE5F4" strokeWidth="2" strokeDasharray="8 4" transform="rotate(-15 60 50)" />
  </svg>
);

const SpaceMoon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
    <circle cx="50" cy="50" r="45" fill="#C4A9FF" />
    <circle cx="30" cy="40" r="8" fill="#874FFE" opacity="0.4" />
    <circle cx="65" cy="30" r="12" fill="#874FFE" opacity="0.3" />
    <circle cx="55" cy="70" r="10" fill="#874FFE" opacity="0.5" />
  </svg>
);

const steps = [
  {
    title: "Assemble Squad",
    desc: "Form a team of 1-4 members. Choose your allies wisely, bring diverse skills, or find teammates via our matchmaking hub.",
    icon: <PlanetBase />
  },
  {
    title: "Hack & Build",
    desc: "You have exactly 48 hours. Drink your coffee, write clean code, and turn your wild ideas into working prototypes.",
    icon: <PlanetRing />
  },
  {
    title: "Pitch to Win",
    desc: "Submit your repo and a demo video. Present your project live to top industry judges and claim the ultimate prize.",
    icon: <SpaceMoon />
  }
];

export default function InstructionFlow({ onBack, onRegister }: InstructionProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full max-w-6xl bg-[#1E0A3C] border border-[#C4A9FF]/50 rounded-3xl p-6 md:p-10 text-white shadow-2xl shadow-[#8B5CF6]/30 relative overflow-y-auto max-h-[90vh] overflow-x-hidden">
      
      <button 
        onClick={onBack}
        className="relative z-50 flex items-center gap-2 text-[#C4A9FF] hover:text-white font-medium transition-colors text-sm bg-[#120524] px-4 py-2 rounded-lg border border-[#C4A9FF]/20 hover:border-[#C4A9FF] w-fit mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back to Cockpit
      </button>

      <div className="text-center mb-10 relative z-10">
        <span className="text-[#C4A9FF] text-xs font-bold tracking-[0.2em] uppercase">Flight Manual</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">Expedition Route</h2>
        <p className="text-[#9b7ecb] mt-3 max-w-xl mx-auto">
          Navigate through the stations to understand your mission.
        </p>
      </div>

      {activeStep < steps.length ? (
        <div className="flex flex-col items-center w-full">
          
          <div className="relative w-full max-w-3xl mx-auto mb-16 md:mb-20 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-[#C4A9FF]/10 -translate-y-1/2 rounded-full" />
            <div 
              className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-[#874FFE] to-[#C4A9FF] -translate-y-1/2 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_#874FFE]"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
            
            <div className="relative flex justify-between z-10">
              {steps.map((_, idx) => (
                <div key={idx} className="relative flex flex-col items-center justify-center">
                  {idx === activeStep && (
                    <div className="absolute -top-12 animate-bounce flex flex-col items-center">
                      <span className="bg-[#874FFE] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_#874FFE] whitespace-nowrap">
                        You're Here
                      </span>
                      <div className="w-2 h-2 bg-[#874FFE] rotate-45 -mt-1" />
                    </div>
                  )}
                  
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-500 ${
                    idx <= activeStep ? "bg-[#874FFE] text-white shadow-[0_0_15px_#874FFE]" : "bg-[#120524] text-[#C4A9FF]/50 border-2 border-[#C4A9FF]/20"
                  }`}>
                    {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-10">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              const isFuture = idx > activeStep;

              return (
                <div 
                  key={idx} 
                  className={`flex flex-col items-center text-center p-6 md:p-8 rounded-2xl transition-all duration-700 ease-in-out ${
                    isActive ? "bg-[#120524] border-2 border-[#874FFE] shadow-[0_0_30px_rgba(135,79,254,0.3)] scale-100 opacity-100" : 
                    isPast ? "bg-[#1E0A3C] border border-[#C4A9FF]/20 scale-95 opacity-50 grayscale" : 
                    "bg-[#1E0A3C] border border-[#C4A9FF]/10 scale-95 opacity-30 blur-[4px] select-none"
                  }`}
                >
                  <div className="mb-6 scale-125">
                    {step.icon}
                  </div>
                  <h3 className={`font-bold text-xl md:text-2xl mb-3 ${isActive ? 'text-white' : 'text-[#C4A9FF]'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#9b7ecb] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => setActiveStep(prev => prev + 1)}
            className="bg-[#874FFE] hover:bg-[#6c3fda] text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(135,79,254,0.5)] hover:scale-105 hover:shadow-[0_0_30px_rgba(135,79,254,0.8)] uppercase tracking-widest text-sm"
          >
            {activeStep === steps.length - 1 ? "Complete Route" : "Next Station"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center animate-[fadeIn_0.8s_ease-out] py-10">
          <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#874FFE] to-[#C4A9FF] flex items-center justify-center shadow-[0_0_50px_#874FFE] mb-8 animate-pulse">
            <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">Are You Ready?</h2>
          <p className="text-[#C4A9FF] mb-10 max-w-lg text-center text-lg">
            Your expedition route is fully mapped. The hackathon awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg justify-center">
            <button 
              onClick={onBack}
              className="flex-1 px-6 py-4 rounded-xl border-2 border-[#C4A9FF]/40 text-[#C4A9FF] hover:bg-[#C4A9FF]/10 font-bold transition-all text-center uppercase tracking-wider text-sm"
            >
              Stay in Cockpit
            </button>
            <button 
              onClick={onRegister}
              className="flex-1 bg-[#874FFE] hover:bg-[#6c3fda] py-4 px-6 rounded-xl font-bold text-white shadow-[0_0_25px_#874FFE88] transition-all hover:scale-105 text-center uppercase tracking-wider text-sm"
            >
              Start Expedition
            </button>
          </div>
        </div>
      )}
    </div>
  );
}