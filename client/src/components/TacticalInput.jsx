
import React from "react";

function TacticalInput({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  id,
}) {
  return (
    <div className="space-y-3 group">
      <div className="flex justify-between items-center px-1">
        <label
          htmlFor={id}
          className="text-[10px] font-black text-gray-600 group-focus-within:text-blue-500 transition-all uppercase tracking-widest"
        >
          {label}
        </label>

        {error && (
          <div className="text-red-500 text-[9px] font-black uppercase tracking-tighter animate-pulse">
            {error}
          </div>
        )}
      </div>

      <div className="relative">
        {/* Left Icon */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-all group-focus-within:scale-110 pointer-events-none">
          {Icon && <Icon size={16} />}
        </div>

        {/* Input Field */}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full bg-[#030305] border ${
            error ? "border-red-900/50" : "border-white/5"
          } rounded-2xl py-5 pl-14 pr-16 text-white text-xs font-bold focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-800 placeholder:uppercase placeholder:tracking-[0.2em] shadow-inner`}
        />

        {/* Right Indicator */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 flex items-center justify-center bg-red-500 rounded-sm pointer-events-none">
          <span className="text-white text-[9px] font-black leading-none">
            •••
          </span>
        </div>

        {/* Focus Shadow */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none group-focus-within:shadow-[0_0_20px_rgba(37,99,235,0.03)] transition-all" />
      </div>

      {error && (
        <p id={`${id}-error`} className="text-red-500 text-[10px]">
          {error}
        </p>
      )}
    </div>
  );
}

export default TacticalInput;
