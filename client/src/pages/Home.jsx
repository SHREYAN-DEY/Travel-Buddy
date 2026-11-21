import React from 'react';
import { motion } from 'framer-motion';
import {
    Cpu,
    Fingerprint,
    Globe,
    ShieldCheck,
    Zap,
    Lock,
    Layers,
    ActivityIcon,
    Activity,
    CloudSun,
    Radar,
} from "lucide-react";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};


function Home() {
    return (
        <div className="overflow-x-hidden">
            <Navbar />

            {/* Hero section in home */}
            <Hero />

            {/* Tactical Modules Updates */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <motion.div {...fadeInUp} className="md:col-span-8 bg-[#08080a] border border-white/5 rounded-3xl sm:rounded-[3rem] p-7 sm:p-10 lg:p-12 group overflow-hidden relative">
                        <div className="flex justify-between items-start mb-12 sm:mb-20">
                            <div className="p-4 sm:p-5 bg-blue-600/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-all duration-500">
                                <Cpu size={32} className="text-blue-50 sm:w-10 sm:h-10" />
                            </div>
                            <div className="text-right">
                                <span className="block text-[10px] font-bold text-blue-500 uppercase tracking-[0.3em] sm:tracking-[0.4em]">Process Node</span>
                                <span className="block text-[9px] font-mono text-gray-700 uppercase tracking-widest">Latency: 0.82ms</span>
                            </div>
                        </div>
                        <h3 className="text-3xl sm:text-5xl font-black text-white italic uppercase tracking-tighter mb-3">
                            Neural <br />
                            <span>Syntehsis</span>
                        </h3>
                        <p className="text-gray-500 text-base sm:text-xl max-w-md font-medium leading-relaxed">
                            Autonomous multi-vector routing. Our engine generates 14-day itineraries accross global nodes in under 800ms
                        </p>
                        <div className="absolute -right-16 -bottom-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                            <Zap size={500} />
                        </div>
                    </motion.div>

                    {/* Vibe Check */}
                    <motion.div {...fadeInUp} className="md:col-span-4 bg-[#0a0505] border border-red-900/10 rounded-3xl sm:rounded-[3rem] p-7 sm:p-10 lg:p-12 flex flex-col justify-between gap-10 group hover:border-red-600/30 transition-all">
                        <div className="relative">
                            <ActivityIcon className="text-red-600 animate-pulse" size={44} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white uppercase italic mb-2">
                                Vibe-Check
                            </h3>
                            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest leading-relaxed">
                                Sentiment analysis of local hotspots and urban density.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* VerticalH. + Encry. */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-16">

                    {/* Vertical Highlight */}
                    <motion.div {...fadeInUp} className="group md:col-span-4 bg-blue-600 rounded-3xl sm:rounded-[3rem] p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.15)] min-h-[320px] sm:min-h-[380px]">
                        <div className="relative z-10 h-full flex flex-col justify-between gap-10">
                            <ShieldCheck size={56} className="text-white group-hover:rotate-12 transition-transform duration-500" />
                            <div>
                                <h3 className="text-3xl sm:text-4xl font-black text-white italic uppercase mb-3 sm:mb-4 tracking-tight">
                                    SafeNode <br />
                                    Protocol
                                </h3>
                                <p className="text-blue-100 text-xs sm:text-sm font-bold uppercase tracking-widest opacity-80">
                                    Tracking 4k+ nodes for maximum environmental stability.
                                </p>
                            </div>
                        </div>
                        <Globe size={350} className="absolute -bottom-20 -right-20 text-white/10 group-hover:rotate-90 group-hover:text-white/20 transition-all duration-1000 pointer-events-none" />
                    </motion.div>

                    {/* Encryption */}
                    <motion.div {...fadeInUp} className="md:col-span-8 bg-[#08080a] border border-white/5 rounded-3xl sm:rounded-[3rem] p-7 sm:p-10 lg:p-12 flex items-center justify-between group relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4 sm:mb-6">
                                <div className="w-8 sm:w-10 h-px bg-blue-600" />
                                <span className="text-[10px] font-black uppercase text-blue-500 tracking-[0.3em]">Security Uplink</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-black text-white italic uppercase tracking-tighter mb-4">
                                256-bit AES <br />
                                <span className="text-gray-700">Encrypted cloud</span>
                            </h3>
                            <div className="flex gap-4">
                                <Fingerprint size={24} className="text-blue-600/40" />
                                <Lock size={24} className="text-blue-600/40" />
                            </div>
                        </div>
                        <Layers size={200} className="hidden sm:block text-blue-600/5 group-hover:text-blue-600/10 group-hover:rotate-90 transition-all duration-1000 mr-4 lg:mr-10 shrink-0 pointer-events-none" />
                    </motion.div>
                </div>
            </section>

            {/* Autonomous Logistic */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#050507] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div {...fadeInUp}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg mb-8 sm:mb-10">
                            <Cpu size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">
                                Logic Engine
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-black text-white italic uppercase mb-8 sm:mb-12 leading-none">
                            Autonomous
                            <br />
                            <span className="text-blue-600 not-italic">Logistics</span>
                        </h2>
                        <div className="space-y-8 sm:space-y-10">
                            {[
                                {
                                    s: "01",
                                    t: "Constraint Ingestion",
                                    d: "Specify budget, duration, and sensory preferences.",
                                },
                                {
                                    s: "02",
                                    t: "Vector Synthesis",
                                    d: "AI cross-refernces millions of data points for optimal paths.",
                                },
                                {
                                    s: "03",
                                    t: "Live Deployement",
                                    d: "Dynamic updates sent to your device every 60 seconds."
                                },
                            ].map((step) => (
                                <div key={step.s} className="flex gap-5 sm:gap-8 group">
                                    <span className="text-blue-600 font-black text-2xl sm:text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
                                        {step.s}
                                    </span>
                                    <div>
                                        <h4 className="text-xl sm:text-2xl font-black text-white italic uppercase mb-1 sm:mb-2 tracking-tighter">
                                            {step.t}
                                        </h4>
                                        <p className="text-gray-500 text-base sm:text-lg">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070"
                            alt=""
                            className="w-full rounded-3xl sm:rounded-[3rem] grayscale opacity-40 border border-white/10"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="p-6 sm:p-10 bg-blue-600/10 backdrop-blur-3xl rounded-full border border-blue-500/20 shadow-2xl animate-pulse">
                                <Activity size={48} className="text-blue-500 sm:w-16 sm:h-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Atmospheric */}
            <section className="py-24 sm:py-36 lg:py-48 relative overflow-hidden text-center px-4 sm:px-6">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent" />
                <motion.div {...fadeInUp} className="relative z-10">
                    <CloudSun size={72} className="text-blue-500 mx-auto mb-8 sm:mb-10 sm:w-[100px] sm:h-[100px]" />
                    <h2 className="text-4xl sm:text-7xl font-black text-white italic uppercase tracking-tighter mb-6 sm:mb-10 leading-none">
                        Atmospheric <br />
                        <span className="text-blue-600 not-italic">Awareness.</span>
                    </h2>
                    <p className="text-gray-500 text-lg sm:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">
                        We track real-time weather and political tides, rerouting your
                        journey if conditions become sub-optimal. Your mission is never
                        static.
                    </p>
                </motion.div>
            </section>

            {/* Global Deployments */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#050507]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 sm:mb-20">
                        <h2 className="text-4xl sm:text-6xl font-black text-white italic uppercase leading-none tracking-tighter">
                            Global <br />
                            <span className="text-blue-600 not-italic">Deployments</span>
                        </h2>
                        <div className="bg-white/5 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-white/10 flex items-center gap-3 text-blue-500 text-[10px] font-black tracking-widest uppercase">
                            <Radar size={16} className="animate-spin-slow" /> Live
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
                                title: "Shibuya Crossing",
                                loc: "Tokyo, JP",
                            },
                            {
                                img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
                                title: "Montmartre Cafe",
                                loc: "Paris, FR",
                            },
                            {
                                img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
                                title: "Venice Canal",
                                loc: "Venice, IT",
                            },
                        ].map((node, i) => (
                            <motion.div key={i} {...fadeInUp} className="group relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl sm:rounded-[3rem] overflow-hidden border border-white/5">
                                <img src={node.img} alt="place img" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                                    <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] mb-1 sm:mb-2">
                                        {node.loc}
                                    </p>
                                    <h4 className="text-2xl sm:text-4xl text-white font-black italic uppercase">
                                        {node.title}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Satellite Network */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="flex-1 w-full">
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
                            alt=""
                            className="w-full rounded-3xl sm:rounded-[3rem] border border-white/10 mix-blend-screen opacity-50"
                        />
                    </div>
                    <div className="flex-1 w-full">
                        <h2 className="text-3xl sm:text-5xl font-black text-white italic uppercase tracking-tighter mb-6 sm:mb-8 leading-none">
                            Global Linkage Protocol
                        </h2>
                        <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-10 font-medium">
                            WanderAI connects to a mesh network of 400+ orbital satellites to
                            ensure your itinerary is updated even in zero-connectivity
                            deadzones.
                        </p>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <div className="p-6 sm:p-8 bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl">
                                <h4 className="text-white font-black uppercase text-xs mb-2 tracking-widest">
                                    Uptime
                                </h4>
                                <p className="text-2xl sm:text-3xl font-black text-blue-600 uppercase italic">
                                    99.99%
                                </p>
                            </div>
                            <div className="p-6 sm:p-8 bg-white/5 border border-white/5 rounded-2xl sm:rounded-3xl">
                                <h4 className="text-white font-black uppercase text-xs mb-2 tracking-widest">
                                    Latency
                                </h4>
                                <p className="text-2xl sm:text-3xl font-black text-blue-600 uppercase italic">
                                    12ms
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Terminal */}
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-[#030305]">
                <div className="max-w-5xl mx-auto bg-black rounded-2xl sm:rounded-[2.5rem] border border-white/10 p-6 sm:p-10 font-mono shadow-2xl relative overflow-x-auto">
                    <div className="flex gap-2 mb-6 sm:mb-8 border-b border-white/5 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                        <p className="text-blue-500">
                            [&gt;] Initializing Global Routing Table...
                        </p>
                        <p className="text-gray-600">
                            [&gt;] Fetching Real-Time Pricing (Flight_ID: AX-902)...
                        </p>
                        <p className="text-emerald-500">
                            [&gt;] OPTIMAL PATH DISCOVERED: 0.82s Total Processing Time
                        </p>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="pt-28 sm:pt-44 lg:pt-60 pb-24 sm:pb-32 lg:pb-40 px-4 sm:px-6 text-center">
                <motion.div {...fadeInUp}>
                    <h2 className="text-5xl sm:text-7xl md:text-[140px] font-black text-white uppercase italic tracking-tighter mb-10 sm:mb-16 leading-[0.85] sm:leading-[0.8]">
                        Plan Less <br />
                        <span className="text-blue-600 not-italic">Explore more</span>
                    </h2>
                    <a href="#" className="inline-block px-10 py-5 sm:px-20 sm:py-10 bg-white text-black rounded-2xl text-base sm:text-2xl font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-4 shadow-[0_40px_80px_rgba(255,255,255,0.1)]">
                        Initialize Mission
                    </a>
                </motion.div>
            </section>

            {/* Footer Final */}
            <footer className="py-12 sm:py-20 px-4 sm:px-6 border-t border-white/5 bg-black relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-12">

                    <div className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tighter">
                        Wander <span className="text-blue-600">AI</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                        <a href="#safety" className="hover:text-blue-600 transition-all duration-700">
                            Safety
                        </a>

                        <a href="#network" className="hover:text-blue-600 transition-all duration-700">
                            Network
                        </a>

                        <a href="#privacy" className="hover:text-blue-600 transition-all duration-700">
                            Privacy
                        </a>
                    </div>

                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest text-center hover:text-white/90 transition-all duration-700">
                        &copy; 2026 Wander AI // Distributed Architecture // Encrypted Mission Data
                    </p>

                </div>
            </footer>
        </div>
    );
}

export default Home;