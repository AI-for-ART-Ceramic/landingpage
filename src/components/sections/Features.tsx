"use client";

import { motion } from "framer-motion";
import { MessageSquare, BarChart, Image as ImageIcon, LayoutDashboard, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
};

// Static color mapping to prevent dynamic Tailwind class resolution failures
const colorMap: Record<string, { bg: string; bgHover: string; text: string }> = {
    amber: {
        bg: "bg-amber-500/10",
        bgHover: "group-hover:bg-amber-500/20",
        text: "text-amber-600",
    },
    sky: {
        bg: "bg-sky-500/10",
        bgHover: "group-hover:bg-sky-500/20",
        text: "text-sky-600",
    },
    rose: {
        bg: "bg-rose-500/10",
        bgHover: "group-hover:bg-rose-500/20",
        text: "text-rose-600",
    },
    violet: {
        bg: "bg-violet-500/10",
        bgHover: "group-hover:bg-violet-500/20",
        text: "text-violet-600",
    },
    emerald: {
        bg: "bg-emerald-500/10",
        bgHover: "group-hover:bg-emerald-500/20",
        text: "text-emerald-600",
    },
    orange: {
        bg: "bg-orange-500/10",
        bgHover: "group-hover:bg-orange-500/20",
        text: "text-orange-600",
    },
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
        <section id="features" className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                        {t.features.title}
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {t.features.subtitle}
                    </p>
                </div>

                <motion.div
                    key={t.features.title}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {features.map((feature) => {
                        const colors = colorMap[feature.color] || colorMap.amber;
                        return (
                            <motion.div
                                key={feature.title}
                                variants={item}
                                className="p-6 sm:p-8 rounded-xl bg-white border border-muted hover:border-primary/30 hover:shadow-md transition-all duration-300 group shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    <div className={`w-12 h-12 rounded-lg ${colors.bg} ${colors.bgHover} flex items-center justify-center mb-6 transition-colors duration-300`}>
                                        <feature.icon className={`w-6 h-6 ${colors.text} group-hover:scale-105 transition-transform duration-300`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}