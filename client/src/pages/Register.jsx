import {
    Activity,
    Compass,
    Globe,
    Target,
    ShieldCheck,
    User,
    Mail,
    Lock,
    Zap,
    MapPin,
    Loader2,
    ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import TacticalInput from "../components/TacticalInput";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {

    const { register } = useAuth();
    const navigate = useNavigate();

    const [form, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        country: "IND"
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // validate the input
    const validate = () => {
        const errs = {};
        if (form.name.length < 2) errs.name = "ENTRY_REQUIRED: NAME";
        if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "INVALID_UPLINK: EMAIL";
        if (form.password.length < 6) errs.password = "SECURITY_BRANCH: PASSKEY_TOO_SHORT";
        return errs;
    };

    // handels form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setLoading(true);

        try {
            await register(form);
            toast.success(`Welcome aboard, ${form.name.split(" ")[0]}`);
            navigate("/dashboard");
        }
        catch (err) {
            setErrors({ general: err.response?.data?.error || "Connection Failure ..." })
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020203] flex flex-col lg:flex-row font-sans selection:bg-blue-600 selection:text-white text-gray-400 overflow-x-hidden">

            {/* Left Panel */}
            <div className="hidden lg:flex lg:w-[50%] bg-[#050507] relative flex-col justify-between p-12 xl:p-16 overflow-hidden border-r border-white/5">

                {/* Background Overlay With */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/real-carbon-fibre.png')] opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#020203] via-transparent to-[#020203]" />

                {/* Brand Header */}
                <Link to="/" className="relative z-10 flex items-center gap-3 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:border-blue-500 transition-all duration-500">
                        <Globe size={24} className="text-blue-600" />
                    </div>
                    <span className="text-2xl font-black italic uppercase tracking-tighter text-white">
                        Wander <span className="text-blue-600 not-italic">AI.</span>
                    </span>
                </Link>

                {/* Hero Content */}
                <div className="relative z-10 max-w-xl">

                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}>

                        <h2 className="text-5xl xl:text-7xl font-black leading-[0.85] tracking-tighter mb-8 text-white uppercase italic">
                            The World, <br />{" "}
                            <span className="text-blue-600 not-italic">Tailored</span>
                        </h2>
                        <p className="text-base xl:text-lg text-gray-500 mb-12 leading-relaxed font-medium">
                            Join the next generation of explorers using neural logistics to
                            reach coordinates beyond the map.
                        </p>
                    </motion.div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* Precision Card */}
                        <div className="group p-6 xl:p-8 rounded-[32px] border border-white/10 hover:border-blue-500/30 hover:bg-white/5 transition-all">
                            <Target
                                size={28}
                                className="text-blue-500 mb-4 group-hover:rotate-45 transition-all"
                            />
                            <h4 className="font-black text-white uppercase italic text-xs tracking-widest mb-1">
                                Precision
                            </h4>
                            <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em]">
                                Neural Node Routing
                            </p>
                        </div>

                        {/* Real Time Card */}
                        <div className="group p-6 xl:p-8 rounded-[32px] border border-white/10 hover:border-blue-500/30 hover:bg-white/5 transition-all">
                            <Activity
                                size={28}
                                className="text-blue-500 mb-4 group-hover:rotate-45 transition-all"
                            />
                            <h4 className="font-black text-white uppercase italic text-xs tracking-widest mb-1">
                                Real Time
                            </h4>
                            <p className="text-[10px] text-gray-600 uppercase font-bold tracking-[0.2em]">
                                Active Field Telemetry
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Link */}
                <div className="relative z-10 text-[10px] font-black text-gray-700 uppercase tracking-[0.05em] hover:text-white/90 transition-all duration-700">
                    &copy;2026 Wander AI // Global Deployment Active
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 flex items-center justify-center px-4 py-10 sm:p-8 lg:p-12 relative bg-[#020203]">
                <div className="w-full max-w-115 relative">

                    {/* Mobile Brand Header */}
                    <div className="flex lg:hidden justify-start px-1 sm:px-2 mb-8">
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-xl flex items-center justify-center border border-white/10">
                                <Globe size={20} className="text-blue-600" />
                            </div>
                            <span className="text-xl font-black italic uppercase tracking-tighter text-white">
                                Wander <span className="text-blue-600 not-italic">AI.</span>
                            </span>
                        </a>
                    </div>

                    {/* Header */}
                    <div className="mb-8 sm:mb-12 text-center lg:text-left px-1 sm:px-2">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600/10 border border-blue-500/20 text-blue-500 rounded-lg text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-8 shadow-[0_0_20px_rgba(37,99,235,0.1)]">
                            <Compass size={14} className="animate-spin-slow shrink-0" /> New Mission
                            Deployment
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black text-white italic uppercase tracking-tighter mb-3 sm:mb-4">
                            Create a Profile
                        </h1>
                        <p className="text-gray-600 font-black italic uppercase tracking-tighter text-xs sm:text-sm">
                            Existing Account ?{" "}
                            <Link to="/login" className="text-blue-500 hover:text-blue-400 transition-all underline-offset-4">
                                Login Now
                            </Link>
                        </p>
                    </div>

                    {/* Main Form Card */}
                    <div className="bg-[#08080a] rounded-3xl sm:rounded-[40px] border border-white/5 p-1.5 sm:p-2 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent" />

                        {/* Conditional Rendering */}
                        {errors.general && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mx-6 mt-6 p-4 bg-red-950/20 rounded-2xl border border-red-900/20 text-[10px] font-black uppercase tracking-widest flex items-center gap-4 ">
                                <ShieldCheck size={18} className="animate-pulse" />
                            </motion.div>
                        )}

                        <form className="p-5 sm:p-8 space-y-5" onSubmit={handleSubmit}>
                            <TacticalInput
                                label="Identity Label"
                                icon={User}
                                type="text"
                                placeholder="Marco Polo"
                                value={form.name}
                                error={errors.name}
                                onChange={(e) => setFormData({ ...form, name: e.target.value })}
                            />
                            <TacticalInput
                                label="Email Address"
                                icon={Mail}
                                type="email"
                                placeholder="admin@onlineittuts.com"
                                value={form.email}
                                error={errors.email}
                                onChange={(e) => setFormData({ ...form, email: e.target.value })}
                            />
                            <TacticalInput
                                label="Security Passkey"
                                icon={Lock}
                                type="password"
                                placeholder="••••••••••"
                                value={form.password}
                                error={errors.password}
                                onChange={(e) => setFormData({ ...form, password: e.target.value })}
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full group relative bg-blue-600 hover:bg-blue-500 text-white py-4 sm:py-6 rounded-2xl font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-950/20 mt-6 sm:mt-8 active:scale-95 disabled:opacity-50">
                                {loading ? (<Loader2/>) : <>
                                Register Now<ChevronRight/></>}
                            </button>
                        </form>
                    </div>

                    {/* Trusted Badges */}
                    <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-10 opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.02em] text-white">
                            <ShieldCheck size={14} className="text-blue-500" /> AES-256
                        </div>
                        <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.02em] text-white">
                            <Zap size={14} className="text-blue-500" /> INSTANT SYNC
                        </div>
                        <div className="flex items-center gap-2 font-black text-[9px] uppercase tracking-[0.02em] text-white">
                            <MapPin size={14} className="text-blue-500" /> GLOBAL NODE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;