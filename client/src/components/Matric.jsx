// Core React Import
import React from 'react' 

// Compact Telemetry Metric Item (Label with Icon + Italic Value)
function Matric({label, value, icon: Icon}) {
  return (
    // Metric Stack Container
    <div className="flex flex-col gap-1">
        {/* Top Label & Icon Row */}
        <span className="text-[10px] font-black text-gray-600 uppercase flex items-center gap-2">
            <Icon size={12}/> {label}
        </span>

        {/* Primary Metric Value (Falls back to "---" when empty) */}
        <span className="text-2xl font-black italic">{value || "---"}</span>      
    </div>
  );
}

export default Matric;