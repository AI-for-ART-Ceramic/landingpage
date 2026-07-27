"use client";

import {
  BarChart,
  Image as ImageIcon,
  LayoutDashboard,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import {
  CeramicMark,
  ConversationPath,
  InsightRing,
} from "@/components/visuals/CeramicVisuals";
import { SectionDivider } from "@/components/visuals/SectionDivider";

const icons = [
  MessageSquare,
  BarChart,
  ImageIcon,
  LayoutDashboard,
  ShieldCheck,
  Zap,
];

export default function Features() {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  useGsapReveal(sectionRef, { stagger: 0.08 });

  return (
    <section
      id="features"
      ref={sectionRef}
      data-language={language}
      className="section-studio bg-muted/20"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <InsightRing data-gsap-float className="absolute -left-24 top-24 hidden h-72 w-72 text-primary/10 lg:block" />
        <CeramicMark
          variant="bowl"
          data-gsap-float
          className="absolute -right-12 bottom-24 hidden h-64 w-64 rotate-[-9deg] text-secondary/35 lg:block"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div className="lg:self-start">
            <h2
              data-gsap-reveal
              className="section-title-studio max-w-2xl text-foreground"
            >
              {t.features.title}
            </h2>
            <p
              data-gsap-reveal
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.features.subtitle}
            </p>
            <ConversationPath className="mt-8 w-full max-w-md text-primary/45" />
          </div>

          <div>
            {t.features.items.map((feature, index) => {
              const Icon = icons[index] ?? MessageSquare;

              return (
                <article
                  key={feature.title}
                  data-gsap-reveal
                  className="feature-flow-card group"
                >
                  <div className="feature-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-start">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-[0_7px_0_var(--primary-hover)] transition-transform duration-300 group-hover:-translate-y-1">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      <SectionDivider data-gsap-divider fill="var(--foreground)" variant="swell" />
    </section>
  );
}
