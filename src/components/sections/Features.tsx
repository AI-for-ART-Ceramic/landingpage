"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart, Image as ImageIcon, LayoutDashboard, ShieldCheck, Zap } from "lucide-react";

const features = [
    {
        title: "Advanced AI Chatbot",
        description: "24/7 automated responses with context-aware smart buying agents that guide customers from inquiry to purchase.",
        icon: MessageSquare,
        color: "amber",
    },
    {
        title: "Business Intelligence",
        description: "Track daily orders, identify peak times, and analyze customer demographics and purchasing patterns.",
        icon: BarChart,
        color: "sky",
    },
    {
        title: "Generative AI Images",
        description: "Generate product previews on the fly using Google Gemini AI tailored to customer requirements.",
        icon: ImageIcon,
        color: "rose",
    },
    {
        title: "Smart Dashboard",
        description: "Real-time visualization of key metrics, active users, and sentiment scores in one central hub.",
        icon: LayoutDashboard,
        color: "violet",
    },
    {
        title: "Enterprise Security",
        description: "Verified signatures for LINE/Facebook webhooks with strict input validation and secure data handling.",
        icon: ShieldCheck,
        color: "emerald",
    },
    {
        title: "Strategic Recommendations",
        description: "AI-generated suggestions for marketing and inventory management based on deep data analysis.",
        icon: Zap,
        color: "orange",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export default function Features() {
    return (
        <section id="features" className="py-24 bg-slate-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 mb-6">
                        Everything You Need to Scale
                    </h2>
                    <p className="text-lg text-slate-400">
                        Lanna AI combines powerful natural language processing with deep analytics to transform how you interact with customers.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={item}
                            className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-amber-500/50 hover:bg-slate-800 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-6 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                                <feature.icon className={`w-6 h-6 text-${feature.color}-400 group-hover:scale-110 transition-transform`} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-100 mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}