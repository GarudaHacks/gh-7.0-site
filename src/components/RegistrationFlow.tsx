"use client";

import React, { useState } from "react";
import { UsersIcon, UserPlusIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface RegistrationProps {
  onBack: () => void;
}

export default function RegistrationFlow({ onBack }: RegistrationProps) {
  const [teamStatus, setTeamStatus] = useState<"unselected" | "hasTeam" | "solo">("unselected");

  return (
    <div className="w-full max-w-4xl bg-[#1E0A3C] border border-[#C4A9FF]/50 rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-[#8B5CF6]/20 relative overflow-y-auto max-h-[85vh]">
      
      {/* Tombol Back to Cockpit */}
      {teamStatus === "unselected" && (
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-[#C4A9FF] hover:text-white font-medium transition-colors text-sm bg-[#120524] px-4 py-2 rounded-lg border border-[#C4A9FF]/20 hover:border-[#C4A9FF]"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Cockpit
        </button>
      )}

      <div className="text-center mb-8 mt-6 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">Team Setup</h2>
        <p className="text-[#9b7ecb] mt-2">Every great mission needs a crew. What's your status?</p>
      </div>

      {teamStatus === "unselected" && (
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-8">
          <button 
            onClick={() => setTeamStatus("hasTeam")}
            className="flex-1 group flex flex-col items-center justify-center gap-3 p-8 bg-gradient-to-b from-[#874FFE]/20 to-transparent border border-[#874FFE]/50 hover:border-[#C4A9FF] rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_#874FFE66]"
          >
            <UsersIcon className="w-12 h-12 text-[#C4A9FF] group-hover:text-white transition-colors" />
            <span className="font-bold text-lg">I Have a Team</span>
            <span className="text-xs text-[#9b7ecb]">Register your squad</span>
          </button>
          
          <button 
            onClick={() => setTeamStatus("solo")}
            className="flex-1 group flex flex-col items-center justify-center gap-3 p-8 bg-gradient-to-b from-[#120524] to-transparent border border-[#67339C]/50 hover:border-[#874FFE] rounded-2xl transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_#874FFE33]"
          >
            <UserPlusIcon className="w-12 h-12 text-[#9b7ecb] group-hover:text-white transition-colors" />
            <span className="font-bold text-lg">I Need a Team</span>
            <span className="text-xs text-[#9b7ecb]">Enter Matchmaking</span>
          </button>
        </div>
      )}

      {teamStatus === "hasTeam" && (
        <div className="bg-[#120524] p-8 rounded-2xl border border-[#C4A9FF]/30 max-w-xl mx-auto animate-[fadeIn_0.3s_ease]">
          <h4 className="text-2xl font-bold mb-6 text-white border-b border-[#C4A9FF]/20 pb-4">Create Your Squad</h4>
          <div className="flex flex-col gap-5 text-left">
            <div>
              <label className="block text-sm font-medium text-[#C4A9FF] mb-2">Team Name</label>
              <input 
                type="text" 
                placeholder="e.g. Code Blooded" 
                className="w-full bg-[#1E0A3C] border border-[#C4A9FF]/40 rounded-xl p-3.5 text-white outline-none focus:border-[#874FFE] focus:ring-1 focus:ring-[#874FFE] transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#C4A9FF] mb-2">Invite Members (Emails)</label>
              <textarea 
                placeholder="member1@email.com, member2@email.com..." 
                rows={3}
                className="w-full bg-[#1E0A3C] border border-[#C4A9FF]/40 rounded-xl p-3.5 text-white outline-none focus:border-[#874FFE] focus:ring-1 focus:ring-[#874FFE] transition-all resize-none"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button 
                onClick={() => setTeamStatus("unselected")}
                className="px-6 py-3 rounded-xl border border-[#C4A9FF]/40 text-[#C4A9FF] hover:bg-[#C4A9FF]/10 font-semibold transition-colors"
              >
                Change Status
              </button>
              <button className="flex-1 bg-[#874FFE] hover:bg-[#6c3fda] py-3 rounded-xl font-bold text-white shadow-[0_0_15px_#874FFE66] transition-colors">
                Initialize Team
              </button>
            </div>
          </div>
        </div>
      )}

      {teamStatus === "solo" && (
        <div className="animate-[fadeIn_0.3s_ease] max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-2xl font-bold">Matchmaking Radar</h4>
            <button 
              onClick={() => setTeamStatus("unselected")}
              className="text-sm font-semibold text-[#C4A9FF] hover:text-white bg-[#C4A9FF]/10 px-4 py-2 rounded-lg"
            >
              ← Change Status
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="bg-gradient-to-r from-[#120524] to-[#1E0A3C] p-5 rounded-xl border border-[#C4A9FF]/30 flex flex-col justify-between hover:border-[#874FFE] transition-colors">
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-wider bg-[#874FFE]/20 text-[#C4A9FF] px-2 py-1 rounded">Team Recruiting</span>
                <p className="font-bold text-lg mt-2 text-white">"ByteMe"</p>
                <p className="text-sm text-[#9b7ecb] mt-1">Looking for: <strong className="text-white">UI/UX Designer</strong></p>
              </div>
              <button className="w-full bg-[#874FFE]/20 border border-[#874FFE] hover:bg-[#874FFE] text-white py-2 rounded-lg text-sm font-semibold transition-all">
                Request to Join
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-[#120524] to-[#1E0A3C] p-5 rounded-xl border border-[#C4A9FF]/30 flex flex-col justify-between hover:border-[#874FFE] transition-colors">
              <div className="mb-4">
                <span className="text-[10px] uppercase tracking-wider bg-[#059669]/20 text-[#34d399] px-2 py-1 rounded">Solo Hacker</span>
                <p className="font-bold text-lg mt-2 text-white">Alex Wong</p>
                <p className="text-sm text-[#9b7ecb] mt-1">Skills: <strong className="text-white">Next.js, Tailwind</strong></p>
              </div>
              <button className="w-full bg-[#C4A9FF]/10 border border-[#C4A9FF]/30 hover:bg-[#C4A9FF] hover:text-[#1E0A3C] text-white py-2 rounded-lg text-sm font-semibold transition-all">
                Send Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}