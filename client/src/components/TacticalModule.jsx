import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Play, Zap } from 'lucide-react';


const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function TacticalModule() {
    return (
        <>
            {/* Tactical Modules Updates */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <motion.div {...fadeInUp} className="md:col-span-8 bg-[#08080a] border border-white/5 rounded-[3rem] p-12 group overflow-hidden relative">
                        <div className="flex justify-between items-start mb-20">
                            <div className="p-5 bg-blue-600/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-all duration-500">
                                <Cpu size={40} className="text-blue-50" />
                            </div>
                            <div className="text-right">
                                <span className="block text-[10px] font-b;
                                text-blue-500 uppercase tracking-[0.4em]">Process Node</span>
                                <span className="block text-[9px] font-mono text-gray-700 uppercase tracking-widest">Latency: 0.82ms</span>
                            </div>
                        </div>
                        <h3 className="text-5xl font-black text-white italic uppercase tracking-tighter">
                            Neural <br />
                            <span>Syntehsis</span>
                        </h3>
                        <p className="text-gray-500 text-xl max-w-md font-medium leading-relaxed">
                            Autonomous multi-vector routing. Our engine generates 14-day itineraries accross global nodes in under 800ms
                        </p>
                        <div className="absolute -right-16 -bottom-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                            <Zap size={500} />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
