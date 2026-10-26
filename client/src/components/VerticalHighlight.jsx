import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Play, ShieldCheck, Zap } from 'lucide-react';


const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function VerticalHighlight() {
    return (
        <>
            <motion.div {...fadeInUp} className="md:col-span-4 bg-blue-600 rounded-[3rem] p-12 relative overflow-hidden group-shadow-[0_0_50px_rgba(37,99,235,0.15)]">
                <div className="relative z-10 h-full flex flex-col justify-between">
                    <ShieldCheck size={64} className="" />
                </div>
            </motion.div>
        </>
    );
}
