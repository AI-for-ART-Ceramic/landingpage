<<<<<<< HEAD
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
=======
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
>>>>>>> develop

export default function TermsOfService() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <h1 className="text-4xl font-bold text-primary mb-8">{t.termsOfService.title}</h1>
                <div className="space-y-6">
                    <p className="text-sm text-muted-foreground">{t.termsOfService.lastUpdated} {new Date().toLocaleDateString()}</p>

                    {t.termsOfService.sections.map((section, index) => (
                        <section key={index}>
                            <h2 className="text-2xl font-semibold text-secondary mb-4">{section.title}</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                {section.content}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
