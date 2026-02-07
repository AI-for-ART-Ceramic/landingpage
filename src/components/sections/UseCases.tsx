"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function UseCases() {
    const { t } = useLanguage();

    // Map icons to use cases based on index or type
    const icons = [TrendingUp, Users, CheckCircle2];
    const colors = ["emerald", "blue", "indigo"];

    return (
        <section id="use-cases" className="py-24 bg-muted/30 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
                        {t.useCases.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t.useCases.subtitle}
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {t.useCases.items.map((useCase, index) => {
                        const Icon = icons[index % icons.length];
                        const color = colors[index % colors.length];

                        return (
                            <motion.div
                                key={index}
                                variants={item}
                                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-muted hover:border-primary/20"
                            >
                                <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
                                    <Icon className={`w-24 h-24 text-${color}-600`} />
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl bg-${color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className={`w-6 h-6 text-${color}-600`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {useCase.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-6 min-h-[80px]">
                                        {useCase.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {useCase.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className={`px-3 py-1 text-xs font-medium rounded-full bg-${color}-50 text-${color}-700`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="flex items-center text-sm font-semibold text-primary hover:text-primary-hover transition-colors group/btn">
                                        {t.useCases.readMore}
                                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
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
