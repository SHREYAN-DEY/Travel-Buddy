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
            {/* Hero section in home */}
            <Hero />
            {/* Tactical Modules Updates */}
            <TacticalModule/>

            
        </div>
    );
}
