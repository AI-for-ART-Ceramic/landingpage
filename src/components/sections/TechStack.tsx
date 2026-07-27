"use client";

import { Cpu, HardDrive, Layout, Server } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import {
  ConversationPath,
} from "@/components/visuals/CeramicVisuals";
import { SectionDivider } from "@/components/visuals/SectionDivider";

export default function TechStack() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapReveal(sectionRef, { stagger: 0.09 });

  const stack = [
    {
      category: t.techStack.categories.frontend,
      icon: Layout,
      items: [
        "Next.js 15",
        "React 19",
        "Tailwind CSS v4",
        "SWR",
        "Framer Motion",
      ],
    },
    {
      category: t.techStack.categories.backend,
      icon: Server,
      items: ["Python 3.11+", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy"],
    },
    {
      category: t.techStack.categories.ai,
      icon: Cpu,
      items: [
        "Google Gemini",
        "OpenAI GPT-4o",
        "LangChain",
        "Sentiment NLP",
      ],
    },
    {
      category: t.techStack.categories.infra,
      icon: HardDrive,
      items: ["Docker", "Nginx", "Webhook security", "Microservices"],
    },
  ];

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      data-language={language}
      className="section-studio tech-stack-section bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="relative">
            <h2
              data-gsap-reveal
              className="section-title-studio max-w-lg text-foreground"
            >
              {t.techStack.title}
            </h2>
            <ConversationPath
              flip
              className="mt-8 w-full text-primary/35"
            />
          </div>

          <div className="border-b border-foreground/15">
            {stack.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.category}
                  data-gsap-reveal
                  className="tech-ledger-row group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-primary/25 bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-foreground">
                      {group.category}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-foreground/10 bg-paper px-3 py-1.5 font-mono text-[0.68rem] text-muted-foreground transition-colors group-hover:border-secondary-hover/50"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <SectionDivider data-gsap-divider fill="var(--primary)" variant="clay" />
    </section>
  );
}
