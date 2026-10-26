import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TacticalModule from '../components/TacticalModule';
import VerticalHighlight from '../components/VerticalHighlight';


function Home() {
    return (
        <div>
            <Navbar />
            {/* Hero section in home */}
            <Hero />
            {/* Tactical Modules Updates */}
            <TacticalModule />
            {/* Vertical Highlights */}
            <VerticalHighlight />


        </div>
    );
}

export default Home;