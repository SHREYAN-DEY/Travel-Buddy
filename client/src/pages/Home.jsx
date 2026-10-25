import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TacticalModule from '../components/TacticalModule';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <TacticalModule/>

            {/* Tactical Modules Updates */}
            {/* <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <motion.div {...fadeInUp} className="md:col-span-8 bg-[#08080a] border border-white/5 rounded-[3rem] p-12 group overflow-hidden relative">
                    <div className=""></div>
                    </motion.div>
                </div>
            </section> */}
        </div>
    );
}
