<<<<<<< HEAD
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
=======
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
>>>>>>> develop

export default function PrivacyPolicy() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <h1 className="text-4xl font-bold text-primary mb-8">{t.privacyPolicy.title}</h1>
                <div className="space-y-6">
                    <p className="text-sm text-muted-foreground">{t.privacyPolicy.lastUpdated} {new Date().toLocaleDateString()}</p>

                    <section>
<<<<<<< HEAD
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Lanna AI  (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services (collectively, the &quot;Service&quot;).
=======
                        <h2 className="text-2xl font-semibold text-secondary mb-4">{t.privacyPolicy.intro.title}</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            {t.privacyPolicy.intro.content}
>>>>>>> develop
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-secondary mb-4">{t.privacyPolicy.infoCollection.title}</h2>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                            {t.privacyPolicy.infoCollection.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-secondary mb-4">{t.privacyPolicy.usage.title}</h2>
                        <p className="text-foreground/80 mb-2">{t.privacyPolicy.usage.intro}</p>
                        <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                            {t.privacyPolicy.usage.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-secondary mb-4">{t.privacyPolicy.security.title}</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            {t.privacyPolicy.security.content}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-secondary mb-4">{t.privacyPolicy.thirdParty.title}</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            {t.privacyPolicy.thirdParty.content}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-secondary mb-4">{t.privacyPolicy.contact.title}</h2>
                        <p className="text-foreground/80 leading-relaxed">
                            {t.privacyPolicy.contact.content} <a href={`mailto:${t.privacyPolicy.contact.email}`} className="text-primary hover:underline font-semibold">{t.privacyPolicy.contact.email}</a>
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
