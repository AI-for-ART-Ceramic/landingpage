"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, BarChart3, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
                <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/80 border border-muted-foreground/20 mb-6"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-sm font-medium text-primary">
                            {t.hero.badge}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        {t.hero.titlePrefix}{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
                            {t.hero.titleHighlight}
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        {t.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="https://ceramix.lanna-ai.com"
                            className="w-full sm:w-auto px-8 py-4 text-white bg-primary rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105"
                        >
                            {t.hero.getStarted}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#features"
                            className="w-full sm:w-auto px-8 py-4 text-muted-foreground bg-white/50 border border-muted rounded-xl font-semibold hover:bg-white hover:text-foreground transition-all backdrop-blur-sm"
                        >
                            {t.hero.explore}
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
                    <div className="p-1 rounded-2xl bg-gradient-to-b from-muted to-transparent">
                        <div className="bg-white/90 backdrop-blur-xl rounded-xl border border-muted p-6 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="p-4 rounded-lg bg-muted/30 border border-muted">
                                    <Bot className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <h3 className="font-semibold text-foreground">{t.hero.stats.chatbot.title}</h3>
                                    <p className="text-sm text-muted-foreground text-balance">{t.hero.stats.chatbot.desc}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-muted/30 border border-muted">
                                    <BarChart3 className="w-8 h-8 text-secondary mx-auto mb-3" />
                                    <h3 className="font-semibold text-foreground">{t.hero.stats.analytics.title}</h3>
                                    <p className="text-sm text-muted-foreground text-balance">{t.hero.stats.analytics.desc}</p>
                                </div>
                                <div className="p-4 rounded-lg bg-muted/30 border border-muted">
                                    <Lock className="w-8 h-8 text-accent mx-auto mb-3" />
                                    <h3 className="font-semibold text-foreground">{t.hero.stats.security.title}</h3>
                                    <p className="text-sm text-muted-foreground text-balance">{t.hero.stats.security.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
