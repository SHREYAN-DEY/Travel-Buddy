import React from 'react'
import { Globe } from 'lucide-react'

export default function Navbar() {
    return (
        <div className='fixed top-0 left-0 w-full z-[100] px-6 py-4 pointer-events-none'>
            <div className={`max-w-[1440px] mx-auto px-6 h-6 rounded-2xl transition-all duration-500 border pointer-events-auto`}>
                <div className='flex items-center justify-between h-full'>
                    {/* Logo */}
                    <a href="#" className='flex items-center gap-4 group'>
                        <div className='w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:rotate-90 transition-transform duration-500'>
                            <Globe className='text-white size={18}' />
                        </div>
                        <div className='flex flex-col'>
                            <span className='textlg front-back text-white tracking-tighter leading-none italic uppercase'>
                                Wander <span className='text-blue-500 text-shadow-glow'>AI</span>

                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
