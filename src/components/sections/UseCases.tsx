"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

// Static color mapping to prevent dynamic Tailwind class resolution failures
const colorMap = [
    {
        bg: "bg-emerald-500/10",
        text: "text-emerald-600",
        bgBadge: "bg-emerald-500/10",
        textBadge: "text-emerald-700",
        borderHover: "hover:border-emerald-500/30",
        icon: TrendingUp
    },
    {
        bg: "bg-blue-500/10",
        text: "text-blue-600",
        bgBadge: "bg-blue-500/10",
        textBadge: "text-blue-700",
        borderHover: "hover:border-blue-500/30",
        icon: Users
    },
    {
        bg: "bg-indigo-500/10",
        text: "text-indigo-600",
        bgBadge: "bg-indigo-500/10",
        textBadge: "text-indigo-700",
        borderHover: "hover:border-indigo-500/30",
        icon: GraduationCap
    }
];

export default function UseCases() {
    const { t, language } = useLanguage();

    // Prominent metrics highlighting concrete outcomes for each vertical
    const outcomes = [
        {
            metric: "95%",
            label: language === "en" ? "Response Time Cut" : "ลดเวลาการตอบกลับ"
        },
        {
            metric: "3.2x",
            label: language === "en" ? "Qualified Leads" : "ลีดมีคุณภาพมากขึ้น"
        },
        {
            metric: "87%",
            label: language === "en" ? "Student Conversion" : "นักเรียนสมัครสำเร็จ"
        }
    ];

    return (
        <section id="use-cases" className="py-16 sm:py-20 lg:py-28 bg-muted/20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                        {t.useCases.title}
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {t.useCases.subtitle}
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                >
                    {t.useCases.items.map((useCase, index) => {
                        const style = colorMap[index % colorMap.length];
                        const Icon = style.icon;
                        const outcome = outcomes[index % outcomes.length];

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className={`group relative bg-white rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-muted ${style.borderHover} flex flex-col justify-between`}
                            >
                                <div>
                                    {/* Outlined Icon Accent */}
                                    <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true">
                                        <Icon className="w-20 h-20" />
                                    </div>

                                    {/* Vertical Icon */}
                                    <div className={`w-12 h-12 rounded-lg ${style.bg} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                                        <Icon className={`w-6 h-6 ${style.text}`} />
                                    </div>

                                    {/* Big Outcome Metric */}
                                    <div className="mb-4">
                                        <span className="text-3xl sm:text-4xl font-black text-foreground block tracking-tight">
                                            {outcome.metric}
                                        </span>
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider block mt-1">
                                            {outcome.label}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                        {useCase.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                        {useCase.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {useCase.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`px-2.5 py-1 text-xs font-semibold rounded-full ${style.bgBadge} ${style.textBadge}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action link */}
                                    <button className="flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/btn">
                                        {t.useCases.readMore}
                                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
