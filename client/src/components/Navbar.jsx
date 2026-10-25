import React from 'react'
import {
    Activity,
    Briefcase,
    Compass,
    Cpu,
    Globe,
    LayoutDashboard,
    Wallet,
    User,
    LogOut,
    Menu,
} from 'lucide-react';

import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { path: "/dashboard", label: "OVERVIEW", icon: <LayoutDashboard size={14} /> },
    { path: "/plan", label: "PLANNER", icon: <Compass size={14} /> },
    { path: "/budget", label: "AUDIT", icon: <Wallet size={14} /> },
    { path: "/trips", label: "JOURNEYS", icon: <Briefcase size={14} /> },
];

export default function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full z-[100] px-6 py-4 pointer-events-none'>
            <div className={`max-w-[1440px] mx-auto px-6 h-6 rounded-2xl transition-all duration-500 border pointer-events-auto bg-transparent border-transparent`}>
                <div className='flex items-center justify-between h-full'>
                    {/* Logo */}
                    <a href="#" className='flex items-center gap-4 group'>
                        <div className='w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:rotate-90 transition-transform duration-500'>
                            <Globe className='text-white' size={18} />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-lg front-back text-white tracking-tighter leading-none italic uppercase'>
                                Wander{" "}
                                <span className='text-blue-500 text-shadow-glow'>AI</span>
                                <div className='flex items-center gap-1 mt-0.5'>
                                    <Cpu size={8} className='text-blue-500/50' />
                                    <span className='text-[7px] font-black text-blue-500/50 tracking-[0.4em] uppercase'>OS_CORE_V0.5</span>
                                </div>
                            </span>
                        </div>
                    </a>

                    {/* Navigation Conditional Based */}
                    <div className='hidden md:flex items-center gap-1 bg-black/20 p-2 rounded-xl border border-white/5 backdrop-blur-sm '>
                        {navLinks.map(({ path, label, icon }) => (
                            <a href='#' className={`flex items-center gap-2 px-5 py-2 rounded-lg text-[9px] font-black transition-all duration-300 tracking-[0.15em] hover:text-blue-200 hover:drop-shadow-[0_0_25px_rgba(183, 243, 255, 0.68)]`}>
                                {icon}
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* User Action */}
                    <div className='flex items-center gap-4'>
                        {/* Conditional Rendering */}
                        <>
                            {/* Profile */}
                            <div className='hidden lg:flex items-center gap-3 bg-white/2 border border-white/5 py-1.5 pl-2 pr-4 rounded-xl hover:bg-white/50 transition-all cursor-pointer group-user'>
                                <div className='w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center border'>
                                    <User size={12} className='text-gray-400 group-hover:/user:text-blue-500' />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] font-black text-white leading-none mb-1 uppercase tracking-tight">
                                        Admin
                                    </p>
                                </div>
                            </div>

                            {/* Session logout */}
                            <button className="w-10 h-10 rounded-xl bg-white/2 text-gray-500 hover:text-rose-500 hover:bg-rose-500/10 border-white/5 hover:border-rose-500/20 transition-all flex items-center justify-center" title="Terminate Session">
                                <LogOut size={16} />
                            </button>

                            {/* Mobile Toggle */}
                            <button className="md:hidden w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                                <Menu size={18} />
                            </button>
                        </>
                        {/* Else */}
                        <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2">
                            Login
                            <Activity size={12} className="animate-pulse" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <AnimatePresence>
                {/* Conditional Rendering */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: -0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden absolute top-[85px] left-6 right-6 bg-black/90 backdrop-blur-2xl rounded-2xl border-white/10 p-4 shadow-2xl pointer-auto"
                >
                    <div className="flex flex-col gap-1">
                        {navLinks.map(({ path, label, icon }) => (
                            <a href='#' className={`flex items-center gap-4 p-4 rounded-xl text-[11px] font-black uppercase tracking-wide transition-all`}>
                                {icon}
                                {label}
                            </a>
                        ))}
                    </div>
                    <div className="h-px bg-white/5 my-2 mx-2">
                        <button className="flex items-center gap-4 p-4 rounded-xl text-[11px] font-black uppercase tracking-widest text-rose-500 hover:bg-rose-500/10 transition-all">
                            <LogOut size={16}/>
                            Terminate Session
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </nav>
    )
}
