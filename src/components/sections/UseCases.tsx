"use client";

import { ArrowRight, TrendingUp, Users, GraduationCap } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { CeramicMark, ConversationPath } from "@/components/visuals/CeramicVisuals";
import { SectionDivider } from "@/components/visuals/SectionDivider";

const icons = [TrendingUp, Users, GraduationCap];

export default function UseCases() {
    const { t, language } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    useGsapReveal(sectionRef, { stagger: 0.12 });

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
        <section
            id="use-cases"
            ref={sectionRef}
            data-language={language}
            className="section-studio bg-foreground text-background"
        >
            <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
                <div className="clay-grid absolute inset-0" />
                <CeramicMark data-gsap-float variant="tall" className="absolute -right-12 top-16 hidden h-80 w-80 text-primary lg:block" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                    <h2 data-gsap-reveal className="section-title-studio max-w-3xl text-background">
                        {t.useCases.title}
                    </h2>
                    <p data-gsap-reveal className="max-w-xl text-base leading-relaxed text-background/65 sm:text-lg">
                        {t.useCases.subtitle}
                    </p>
                </div>

                <ConversationPath className="my-10 w-full text-secondary/70 sm:my-14" />

                <div className="grid gap-6 lg:grid-cols-3">
                    {t.useCases.items.map((useCase, index) => {
                        const Icon = icons[index] ?? TrendingUp;
                        const outcome = outcomes[index % outcomes.length];

                        return (
                            <article
                                key={useCase.title}
                                data-gsap-reveal
                                className="story-panel group flex min-h-[430px] flex-col justify-between p-6 text-foreground sm:p-8"
                            >
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-[0_7px_0_var(--primary-hover)]">
                                            <Icon className="h-5 w-5" aria-hidden="true" />
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div className="mt-9">
                                        <span className="block text-5xl font-black tracking-[-0.05em] text-foreground">
                                            {outcome.metric}
                                        </span>
                                        <span className="mt-1 block text-xs font-bold uppercase tracking-[0.14em] text-primary">
                                            {outcome.label}
                                        </span>
                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold tracking-tight">
                                        {useCase.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {useCase.description}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-8">
                                    <div className="mb-6 flex flex-wrap gap-2">
                                        {useCase.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-full border border-foreground/10 bg-muted/40 px-2.5 py-1 text-xs font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <button className="group/btn flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-hover">
                                        {t.useCases.readMore}
                                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
            <SectionDivider data-gsap-divider fill="var(--background)" variant="deep" />
        </section>
    );
}
