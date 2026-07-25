"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-muted border-t border-muted-foreground/10 pt-12 sm:pt-16 pb-6 sm:pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4 group">
                            <div className="p-1 bg-primary/10 border border-primary/20 rounded-md">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary fill-none stroke-[2] stroke-current" aria-hidden="true">
                                    <path d="M12 2C10.5 2 9 4.5 9 6.5C9 7.8 8 9 6 10C4 11 3 13.5 3 16C3 19.3 7 22 12 22C17 22 21 19.3 21 16C21 13.5 20 11 18 10C16 9 15 7.8 15 6.5C15 4.5 13.5 2 12 2Z" />
                                    <path d="M9 6.5H15" />
                                    <path d="M12 22V20" />
                                </svg>
                            </div>
                            <span className="text-lg sm:text-xl font-bold text-foreground">
                                Lanna <span className="text-primary font-extrabold font-serif">AI</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs">
                            {t.footer.desc}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm sm:text-base font-semibold text-foreground mb-4">{t.footer.product}</h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">{t.footer.features}</Link></li>
                            <li><Link href="#tech-stack" className="hover:text-primary transition-colors">{t.footer.technology}</Link></li>
                            <li><a href="http://chat.lanna-ai.com" className="hover:text-primary transition-colors">{t.footer.login}</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm sm:text-base font-semibold text-foreground mb-4">{t.footer.legal}</h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">{t.footer.terms}</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">{t.footer.dataDeletion}</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted-foreground/10 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-foreground text-[10px] sm:text-xs text-center md:text-left">
                        © {new Date().getFullYear()} {t.footer.rights} | {process.env.NEXT_PUBLIC_VERSION || 'dev'}
                    </p>
                </div>
            </div>
        </footer>
    );
}
