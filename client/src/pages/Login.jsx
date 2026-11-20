import React from "react";
import {
  Fingerprint,
  Globe,
  Mail,
  Radar,
  ShieldCheck,
  Lock,
  BadgeCheck
} from "lucide-react";

import { motion } from "framer-motion";
import TacticalInput from "../components/TacticalInput.jsx";

function Login() {
  return (
    <div className="min-h-screen bg-[#020203] flex flex-col lg:flex-row font-sans selection:bg-blue-600 selection:text-white text-gray-400 overflow-x-hidden">

      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#050507] relative flex-col justify-between p-12 xl:p-16 overflow-hidden border-r border-white/5">

        {/* Tactical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] right-[-10%] w-[400px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full" />

        {/* Brand Header */}
        <a href="#" className="relative z-10 flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:border-blue-500 transition-all duration-500">
            <Globe size={24} className="text-blue-500" />
          </div>
          <span className="text-2xl font-black italic uppercase tracking-tighter text-white">
            Wander <span className="text-blue-600 not-italic">AI.</span>
          </span>
        </a>

        {/* Content Section */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <h2 className="text-5xl xl:text-7xl font-black leading-[0.85] tracking-tighter mb-8 text-white uppercase italic">
              Welcome <br />{" "}
              <span className="text-blue-600 not-italic">Back User</span>
            </h2>
            <p className="text-base xl:text-lg text-gray-500 mb-12 leading-relaxed font-medium">
              Synchronize your profile to access your AI-generated itineraries,
              live field telemetry, and encrypted travel vaults.
            </p>

            {/* Tactical Bento Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 xl:p-6 bg-white/[0.03] backdrop-blur-md rounded-[32px] border border-white/5 group hover:border-blue-500/30 transition-all">
                <Radar className="text-blue-500 mb-4 animate-pulse" size={24} />
                <h4 className="font-black text-white uppercase italic text-xs tracking-widest mb-1">
                  Live Sync
                </h4>
                <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">
                  Global Node Connectivity
                </p>
              </div>
              <div className="p-5 xl:p-6 bg-white/[0.03] backdrop-blur-md rounded-[32px] border border-white/5 group hover:border-blue-500/30 transition-all">
                <Fingerprint className="text-blue-500 mb-4 animate-pulse" size={24} />
                <h4 className="font-black text-white uppercase italic text-xs tracking-widest mb-1">
                  Encrypted
                </h4>
                <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">
                  AES-256 Vault Active
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Meta */}
        <div className="group relative z-10 text-[9px] font-black text-gray-700 uppercase tracking-[0.04em] flex gap-8 xl:gap-12">
          <span className="transition-all duration-700 group-hover:text-white">Core_System v5.2</span>
          <span className="transition-all duration-700 group-hover:text-white">Verified_Uplink</span>
          <span className="text-blue-900 transition-all duration-700 group-hover:text-blue-400">ID: WAI-LOG-902</span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 sm:p-8 lg:p-12 relative bg-[#020203]">
        <div className="w-full max-w-[440px]">

          {/* Mobile Brand Header */}
          <div className="flex lg:hidden justify-start px-1 sm:px-2 mb-8">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10">
                <Globe size={20} className="text-blue-500" />
              </div>
              <span className="text-xl font-black italic uppercase tracking-tighter text-white">
                Wander <span className="text-blue-600 not-italic">AI.</span>
              </span>
            </a>
          </div>

          {/* Form header */}
          <div className="mb-8 sm:mb-12 text-center lg:text-left px-1 sm:px-2">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
              <ShieldCheck size={14} className="shrink-0" /> Authorization Terminal Required
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-white italic uppercase tracking-tighter mb-3 sm:mb-4">
              Credentials
            </h1>

            <p className="text-gray-600 font-bold uppercase text-[11px] sm:text-xs tracking-widest">
              {" "}
              Unregistered User{" "}
              <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
                Create an Account
              </a>
            </p>
          </div>

          {/* Form Body */}
          <div className="bg-[#08080a] rounded-3xl sm:rounded-[40px] border border-white/5 p-1.5 sm:p-2 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-30" />

            {/* Main Form */}
            <form className="p-5 sm:p-8 space-y-5">
              <TacticalInput
                label="User Email"
                icon={Mail}
                type="email"
                placeholder="admin@onlineittuts.com"
              />

              <div className="space-y-3">
                <div className="flex justify-between items-center px-1 gap-2">
                  <label htmlFor="" className="text-[10px] font-black text-gray-600 uppercase tracking-widest">
                    Security Passkey
                  </label>
                  <a href="#" className="text-[9px] font-black text-blue-600 uppercase tracking-widest hover:text-blue-400 shrink-0">
                    Forgot Password
                  </a>
                </div>
                <TacticalInput
                  icon={Lock}
                  type="password"
                  placeholder="........"
                />
              </div>
              <button
                type="submit"
                className="w-full group relative bg-blue-600 hover:bg-blue-500 text-white py-4 sm:py-6 rounded-2xl font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-950/20 mt-6 sm:mt-8 active:scale-95 disabled:opacity-50"
              >
                Login Now
              </button>
            </form>
          </div>

          {/* Secondary Auth Options */}
          <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <button className="flex items-center justify-center gap-3 py-3.5 sm:py-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <BadgeCheck size={15}/> Google-ID
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 sm:py-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <Fingerprint size={15} /> Biometric
            </button>
          </div>

          <p className="mt-8 sm:mt-12 text-center text-[8px] sm:text-[9px] font-black text-gray-800 uppercase tracking-[0.25em] sm:tracking-[0.5em] hover:text-white/90 transition-all duration-700">
            Encrypted End-to-End // wanderAI Architecture
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;