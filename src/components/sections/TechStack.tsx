"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Layout, Server, HardDrive } from "lucide-react";

export default function TechStack() {
    const { t } = useLanguage();

    const stack = [
        { 
            category: t.techStack.categories.frontend, 
            icon: Layout,
            items: ["Next.js 15", "React 19", "Tailwind CSS v4", "SWR", "Framer Motion"] 
        },
        { 
            category: t.techStack.categories.backend, 
            icon: Server,
            items: ["Python 3.11+", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy"] 
        },
        { 
            category: t.techStack.categories.ai, 
            icon: Cpu,
            items: ["Google Gemini", "OpenAI GPT-4o", "LangChain", "Sentiment NLP"] 
        },
        { 
            category: t.techStack.categories.infra, 
            icon: HardDrive,
            items: ["Docker", "Nginx", "Webhook security", "Microservices"] 
        },
    ];

    return (
        <section id="tech-stack" className="py-16 sm:py-20 lg:py-28 bg-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                        {t.techStack.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {stack.map((group) => {
                        const Icon = group.icon;
                        return (
                            <div 
                                key={group.category} 
                                className="bg-white border border-muted p-6 rounded-xl hover:border-primary/20 hover:shadow-sm transition-all duration-300 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    {/* Icon & title */}
                                    <div className="flex items-center gap-3 pb-3 border-b border-muted">
                                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <h3 className="text-base font-bold text-foreground">
                                            {group.category}
                                        </h3>
                                    </div>
                                    
                                    {/* Item specs list */}
                                    <ul className="space-y-2.5">
                                        {group.items.map((item) => (
                                            <li 
                                                key={item} 
                                                className="text-xs text-muted-foreground flex items-center gap-2 font-mono"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
