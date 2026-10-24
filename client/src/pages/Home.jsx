import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div>
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-44 pb-32 px-6 border border-white/5">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/real-carbon-fibre.png')] opacity-20 pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 className="text-7xl md:text-[110px] font-black tracking-tight leading-[0.85] text-white uppercase italic mb-10">
                                Future of <br /> {" "}
                                <span className="text-blue-600 not-italic">Exploration</span>
                            </h1>
                            <p className="text-xl text-gray-500 max-w-xl mb-12 font-medium">
                                The world's first autonomous travel architect. We don't just book trips; we synthesize experiences using real-time global intelligence.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}
