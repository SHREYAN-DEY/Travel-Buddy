// Core React & UI Icon Imports
import React from 'react';
import { 
    MapPin, 
    Calendar, 
    Users, 
    Wallet, 
    Share2 
} from 'lucide-react';

// Animation & Custom Component Imports
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeaderBadge from '../components/HeaderBadge';

export default function TripDetail() {
    return (
        // Main Page Wrapper
        <div className="min-h-screen bg-[#050506] text-white font-sans selection:bg-blue-500/30">
            {/* Global Top Navigation Bar */}
            <Navbar />

            {/* Hero Banner Section */}
            <section className="relative h-[70vh] w-full flex items-end pb-20 overflow-hidden">
                {/* Full-Bleed Background Cover Image & Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1607836046730-3317bd58a31b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" className="w-full h-full object-cover scale-105" />

                    <div className="absolute inset-0 bg-linear-to-r from-[#050506] via-[#050506]/20 to-transparent">
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                </div>

                {/* Foreground Hero Content & Telemetry Badges */}
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>

                        {/* Trip Status Pill & Location Tag */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-1.5 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">
                                Confirmed Trip
                            </span>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <MapPin size={14} className="text-blue-500" /> Destination
                            </p>
                        </div>

                        {/* Main Destination Heading */}
                        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-[0.85] mb-10">
                            City Name <span className="text-blue-600">.</span>
                        </h1>

                        {/* Trip Metadata Badges, Budget Card & Share Action */}
                        <div className="flex flex-wrap items-center gap-6">
                            <HeaderBadge icon={Calendar} label="Duration" value={`Days`} />
                            <HeaderBadge icon={Users} label="Group" value={`Travelers`} />

                            {/* Total Investment Highlight Card */}
                            <div className="bg-blue-600/10 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-2xl flex items-center gap-4 group-hover:bg-blue-600/20 transition-all shadow-2xl">
                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                                    <Wallet size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[8px] font-bold text-blue-400 uppercase tracking-[0.2em]">
                                        Total Investment
                                    </span>
                                    <span className="text-xl font-black text-white tracking-tighter">
                                        Total Cost
                                        <span className="text-[10px] text-blue-400 ml-2 font-bold uppercase italic">
                                            Budget
                                        </span>
                                    </span>
                                </div>
                            </div>

                            {/* Share Trip Button */}
                            <div className="ml-auto flex gap-3">
                                <button className="p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/20 transition-all">
                                    <Share2 size={20} />             
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}