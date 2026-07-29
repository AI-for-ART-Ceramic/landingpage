"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t, language, toggleLanguage } = useLanguage();
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: t.navbar.evaluation, href: process.env.NEXT_PUBLIC_EVALUATION_FORM_URL || "#", external: true },
        { name: t.navbar.features, href: pathname === "/" ? "#features" : "/#features" },
        { name: t.navbar.techStack, href: pathname === "/" ? "#tech-stack" : "/#tech-stack" },
    ];

    return (
        <nav className="fixed left-0 right-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
            <div className="mx-auto max-w-7xl rounded-full border border-foreground/10 bg-background/85 px-4 shadow-[0_12px_38px_rgba(43,51,59,0.09)] backdrop-blur-xl sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="Lanna AI logo"
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
                            priority
                        />
                        <span className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                            Lanna <span className="text-primary font-extrabold">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) =>
                            link.external ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link text-sm font-medium text-muted-foreground"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link text-sm font-medium text-muted-foreground"
                                >
                                    {link.name}
                                </Link>
                            )
                        )}

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            aria-label={language === 'en' ? "Switch to Thai language" : "สลับเป็นภาษาอังกฤษ"}
                            className="flex items-center gap-1.5 rounded-full border border-foreground/10 bg-paper px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-secondary-hover hover:bg-secondary"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{language === 'en' ? 'TH' : 'EN'}</span>
                        </button>

                        <a
                            href="https://ceramix.lanna-ai.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border border-primary-hover bg-primary px-4 py-2 text-sm font-semibold text-white shadow-[0_5px_0_var(--primary-hover)] transition-all hover:-translate-y-0.5 hover:bg-primary-hover"
                        >
                            {t.navbar.launchCeramix}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            aria-label={language === 'en' ? "Switch to Thai language" : "สลับเป็นภาษาอังกฤษ"}
                            className="flex items-center gap-1 rounded-full border border-foreground/10 bg-paper px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <button
                            onClick={toggleMenu}
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                            className="p-2 text-muted-foreground hover:text-foreground"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 overflow-hidden rounded-3xl border border-foreground/10 bg-background shadow-xl md:hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) =>
                                link.external ? (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md"
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            )}
                            <a
                                href="https://ceramix.lanna-ai.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center mt-4 px-4 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {t.navbar.launchApp}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
