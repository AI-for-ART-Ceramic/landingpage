"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TechStack() {
    const { t } = useLanguage();

    const stack = [
        { category: t.techStack.categories.frontend, items: ["Next.js 15", "React", "Tailwind CSS", "SWR", "Recharts"] },
        { category: t.techStack.categories.backend, items: ["Python 3.11+", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy"] },
        { category: t.techStack.categories.ai, items: ["OpenAI GPT-4o", "Google Gemini", "LangChain", "Sentiment Analysis"] },
        { category: t.techStack.categories.infra, items: ["Docker", "Nginx", "Microservices", "Secure Webhooks"] },
    ];

    return (
        <section id="tech-stack" className="py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
                    {t.techStack.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stack.map((group) => (
                        <div key={group.category} className="space-y-4">
                            <h3 className="text-lg font-semibold text-primary border-b border-muted pb-2">
                                {group.category}
                            </h3>
                            <ul className="space-y-2">
                                {group.items.map((item) => (
                                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
