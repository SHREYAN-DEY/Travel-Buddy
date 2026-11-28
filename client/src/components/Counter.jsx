import React from 'react'

export default function Counter({ label, value=0, setter }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-xl p-3 px-7 flex flex-col items-center gap-2 group hover:border-blue-500/30 transition-all">
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">{label}
            </span>
            <div className="w-full flex items-center justify-between">
                <button type="button" onClick={() => setter && setter((prev) => Math.max(0, prev - 1))} className="text-gray-500 hover:text-white transition-all font-bold text-2xl cursor-pointer">
                    -
                </button>
                <span className="text-lg font-black text-white">{value}</span>
                <button type="button" onClick={() => setter && setter((prev) => prev + 1)} className="text-gray-500 hover:text-white transition-all font-bold text-2xl cursor-pointer">
                    +
                </button>
            </div>
        </div>
    )
}
