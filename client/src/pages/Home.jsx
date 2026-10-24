import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

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
                            <div className="flex flex-wrap gap-6">
                                <a href="#" className="px-12 py-6 bg-blue-500 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] flex items-center gap-3">
                                    Initialize Mission <ArrowRight size={18} />
                                </a>
                                <button className="px-12 py-6 border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all flex items-center gap-3">
                                    <Play size={16} fill="correctColor" />
                                    System Demo
                                </button>
                            </div>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div className="relative rounded-[40px] overflow-hidden border border-white/10 bg-[#0a0a0b] shadow-2xl">
                            <img src="https://unsplash.com/photos/light-trails-on-zion-national-park-road-c02GSy_ayDg" alt="image" className="w-full h-[600px] object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
