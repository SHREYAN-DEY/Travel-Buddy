// Core React Import
import React from 'react'

// Itinerary Activity Timeline Card Component
export default function TimelineCard({ time, period, icon: Icon, data, onFocus }) {
    return (
        // Outer Interactive Card Container
        <div className="group bg-[#19191b] border border-white/5 rounded-4xl p-8 hover:bg-white/4 transition-all cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-start gap-8">

                {/* Left Column: Time Slot & Period Icon Badge */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="text-xs font-black text-blue-500 uppercase tracking-widest">
                        {time}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-all">
                        <Icon size={18} />
                    </div>
                </div>

                {/* Middle Column: Period Tag, Activity Title & Description */}
                <div className="flex-1">
                    <p className="text-[9px] font-black uppercase text-gray-600 mb-2"> {period} Strategy</p>
                    <h3 className="text-3xl font-black uppercase italic leading-none mb-4 group-hover:text-blue-500 transition-all"> Activity
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                        Description
                    </p>
                </div>

                {/* Right Column: Estimated Cost & Location Pill */}
                <div className="md:text-right flex md:flex-col items-center md:items-end justify-between gap-4">
                    <p className="text-3xl font-black italic text-white">
                        Estimated Cost
                    </p>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 group-hover:border-blue-500/30 transition-all">
                        <span className="text-[10px] font-bold uppercase text-gray-400">
                            Location
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}