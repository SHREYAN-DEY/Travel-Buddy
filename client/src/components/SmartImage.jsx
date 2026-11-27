// Core React & Icon Imports
import React, { useState } from 'react'
import { Loader2 } from 'lucide-react';

// Reusable Image Component with Loading Spinner & Fallback Support
export function SmartImage({ src, alt, className }) {
    // Track image load state ('loading' | 'loaded')
    const [status, setStatus] = useState('loading');

    // Default fallback image if src is missing or fails to load
    const fallback = 'https://images.unsplash.com/photo-1779610908286-7f4e7cfc6dca?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'

    return (
        // Image Wrapper Container
        <div className={`relative overflow-hidden bg-[#0a0a0b] ${className}`}>
            {/* Loading Spinner Overlay */}
            {status === "loading" && (<div className="absolute inset-0 flex items-center justify-center z-20 bg-[#0a0a0b]">
                <Loader2 className="w-6 h-6 text-blue-500 animate-spin opacity-50" />
            </div>)}

            {/* Target Image with Smooth Fade & Scale Transition */}
            <img 
            src={src || fallback} 
            alt={alt} 
            onLoad={() => setStatus('loaded')}
            onError={(e) => {
                e.currentTarget.src = fallback;
                setStatus('loaded');
            }}
            className={`w-full h-full object-cover transition-all duration-1000 ${status === "loaded" ? "opacity-100 scale-100" : "opacity-0 scale-110"} `} />
        </div>
    );
}