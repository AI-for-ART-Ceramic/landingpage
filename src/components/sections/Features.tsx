"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart, Image as ImageIcon, LayoutDashboard, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
    const { t } = useLanguage();

    const features = [
        {
            title: t.features.items[0].title,
            description: t.features.items[0].description,
            icon: MessageSquare,
            color: "amber",
        },
        {
            title: t.features.items[1].title,
            description: t.features.items[1].description,
            icon: BarChart,
            color: "sky",
        },
        {
            title: t.features.items[2].title,
            description: t.features.items[2].description,
            icon: ImageIcon,
            color: "rose",
        },
        {
            title: t.features.items[3].title,
            description: t.features.items[3].description,
            icon: LayoutDashboard,
            color: "violet",
        },
        {
            title: t.features.items[4].title,
            description: t.features.items[4].description,
            icon: ShieldCheck,
            color: "emerald",
        },
        {
            title: t.features.items[5].title,
            description: t.features.items[5].description,
            icon: Zap,
            color: "orange",
        },
    ];

    return (
        <section id="features" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
                        {t.features.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t.features.subtitle}
                    </p>
                </div>

                <motion.div
                    key={t.features.title}
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
                            className="p-8 rounded-2xl bg-white border border-muted hover:border-primary/50 hover:bg-white/80 transition-all group shadow-sm"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-6 group-hover:bg-${feature.color}-500/20 transition-colors`}>
                                <feature.icon className={`w-6 h-6 text-${feature.color}-600 group-hover:scale-110 transition-transform`} />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}