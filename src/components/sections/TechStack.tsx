"use client";

export default function TechStack() {
    const stack = [
        { category: "Frontend", items: ["Next.js 15", "React", "Tailwind CSS", "SWR", "Recharts"] },
        { category: "Backend", items: ["Python 3.11+", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy"] },
        { category: "AI Core", items: ["OpenAI GPT-4o", "Google Gemini", "LangChain", "Sentiment Analysis"] },
        { category: "Infrastructure", items: ["Docker", "Nginx", "Microservices", "Secure Webhooks"] },
    ];

    return (
        <section id="tech-stack" className="py-24 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-16">
                    Built with Modern Technology
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stack.map((group) => (
                        <div key={group.category} className="space-y-4">
                            <h3 className="text-lg font-semibold text-amber-400 border-b border-slate-800 pb-2">
                                {group.category}
                            </h3>
                            <ul className="space-y-2">
                                {group.items.map((item) => (
                                    <li key={item} className="text-slate-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
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
