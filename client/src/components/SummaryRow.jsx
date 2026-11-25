import React from "react";

// Key-Value Telemetry Row for Sidebar Footer Totals & Status
function SummaryRow({ label, value, highlight, color = "text-white" }) {
  return (
    <div className="flex justify-between items-end">
      {/* Metric Label */}
      <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
        {label}
      </span>

      {/* Metric Value (Enlarged & Italicized when highlight=true) */}
      <span
        className={`font-black ${highlight ? "text-2xl italic leading-none" : "text-xs"} ${color}`}
      >
        {value}
      </span>
    </div>
  );
}

export default SummaryRow;