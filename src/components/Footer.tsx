"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-muted border-t border-muted-foreground/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Sparkles className="w-5 h-5 text-primary fill-current" />
                            <span className="text-xl font-bold text-foreground">
                                Lanna AI
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">{t.footer.product}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">{t.footer.features}</Link></li>
                            <li><Link href="#tech-stack" className="hover:text-primary transition-colors">{t.footer.technology}</Link></li>
                            <li><a href="http://chat.lanna-ai.com" className="hover:text-primary transition-colors">{t.footer.login}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">{t.footer.legal}</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">{t.footer.terms}</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">{t.footer.dataDeletion}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-xs">
                        © {new Date().getFullYear()} {t.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
