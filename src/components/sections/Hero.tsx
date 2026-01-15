"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, BarChart3, Lock } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-6"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                        <span className="text-sm font-medium text-amber-200">
                            AI-Powered Customer Intelligence
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Transform Conversations into{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600">
                            Business Intelligence
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Lanna AI empowers your business with automated customer engagement,
                        smart buying agents, and deep analytics across LINE, Facebook, and Instagram.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="https://ceramix.lanna-ai.com"
                            className="w-full sm:w-auto px-8 py-4 text-slate-900 bg-amber-400 rounded-xl font-bold hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:scale-105"
                        >
                            Get Started Now
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#features"
                            className="w-full sm:w-auto px-8 py-4 text-slate-300 bg-slate-800/50 border border-slate-700 rounded-xl font-semibold hover:bg-slate-800 hover:text-white transition-all backdrop-blur-sm"
                        >
                            Explore Features
                        </a>
                    </motion.div>
                </div>

                {/* Feature Highlights Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 relative mx-auto max-w-5xl"
                >
                    <div className="p-1 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-900/0">
                        <div className="bg-slate-950/80 backdrop-blur-xl rounded-xl border border-slate-800 p-6 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                    <Bot className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                                    <h3 className="font-semibold text-slate-200">AI Chatbot</h3>
                                    <p className="text-sm text-slate-400 text-balance">24/7 Automated response & Smart buying agent</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                    <BarChart3 className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                                    <h3 className="font-semibold text-slate-200">Real-time Analytics</h3>
                                    <p className="text-sm text-slate-400 text-balance">Visual dashboard for sales & sentiment</p>
                                </div>
                                <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-800">
                                    <Lock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                                    <h3 className="font-semibold text-slate-200">Enterprise Security</h3>
                                    <p className="text-sm text-slate-400 text-balance">Secure data handling & privacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
