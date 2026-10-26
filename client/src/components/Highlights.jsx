import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Fingerprint, Globe, Play, ShieldCheck, Zap, Lock, Layers } from 'lucide-react';


const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Highlights() {
    return (
        <>
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

                    {/* Vertical Highlight */}
                    <motion.div {...fadeInUp} className="group md:col-span-4 bg-blue-600 rounded-[3rem] p-12 relative overflow-hidden group-shadow-[0_0_50px_rgba(37,99,235,0.15)]">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <ShieldCheck size={64} className="text-white group-hover:rotate-12 transition-transform duration-500" />
                            <div className="">
                            <h3 className="text-4xl font-black text-white italic uppercase mb-4 tracking-tight">
                                SafeNode <br />
                                Protocol
                            </h3>
                            <p className="text-blue-100 text-sm font-bold uppercase tracking-widest opacity-80">
                                {" "}
                                Tracking 4k+ nodes for maximum environmental stability.
                            </p>
                        </div>
                        </div>
                        
                        <Globe size={350} className="absolute -bottom-20 -right-20 text-white/10 group-hover:rotate-90 group-hover:text-white/20 transition-all duration-1000" />
                    </motion.div>

                    {/* Encryption */}
                    <motion.div {...fadeInUp} className="md:col-span-8 bg-[#08080a] border border-white/5 rounded-[3rem] p-12 flex items-center justify-between group relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-px bg-blue-600" />
                                <span className="text-[10px] font-black uppercase text-blue-500 tracking-[0.3em]">Security Uplink</span>
                            </div>
                            <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-4">
                                256-bit AES <br />
                                <span className="text-gray-700">Encrypted cloud</span>
                            </h3>
                            <div className="flex gap-4">
                                <Fingerprint size={24} className="text-blue-600/40" />
                                <Lock size={24} className="text-blue-600/40" />
                            </div>
                        </div>
                        <Layers size={200} className="text-blue-600/5 group-hover:text-blue-600/10 group-hover:rotate-90 transition-all duration-1000 mr-10" />
                    </motion.div>
                </div>

            </section>
        </>
    );
}
