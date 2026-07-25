"use client";

import Link from "next/link";
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
        { name: t.navbar.features, href: pathname === "/" ? "#features" : "/#features" },
        { name: t.navbar.techStack, href: pathname === "/" ? "#tech-stack" : "/#tech-stack" },
        { name: t.navbar.useCases, href: pathname === "/" ? "#use-cases" : "/#use-cases" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-1.5 bg-primary/10 border border-primary/20 rounded-lg group-hover:scale-105 transition-transform duration-300">
                            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary fill-none stroke-[2] stroke-current" aria-hidden="true">
                                <path d="M12 2C10.5 2 9 4.5 9 6.5C9 7.8 8 9 6 10C4 11 3 13.5 3 16C3 19.3 7 22 12 22C17 22 21 19.3 21 16C21 13.5 20 11 18 10C16 9 15 7.8 15 6.5C15 4.5 13.5 2 12 2Z" />
                                <path d="M9 6.5H15" />
                                <path d="M12 22V20" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                            Lanna <span className="text-primary font-extrabold font-serif">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            aria-label={language === 'en' ? "Switch to Thai language" : "สลับเป็นภาษาอังกฤษ"}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 hover:bg-muted text-sm font-medium text-foreground transition-colors"
                        >
                            <Globe className="w-4 h-4" />
                            <span>{language === 'en' ? 'TH' : 'EN'}</span>
                        </button>

                        <a
                            href="http://Ceramix.lanna-ai.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-full hover:bg-primary-hover transition-colors shadow-sm"
                        >
                            {t.navbar.launchCeramix}
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-3">
                        <button
                            onClick={toggleLanguage}
                            aria-label={language === 'en' ? "Switch to Thai language" : "สลับเป็นภาษาอังกฤษ"}
                            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-muted/50 hover:bg-muted text-xs font-medium text-foreground transition-colors"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span>{language.toUpperCase()}</span>
                        </button>

                        <button
                            onClick={toggleMenu}
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
                        className="md:hidden bg-background border-b border-muted overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="http://chat.lanna-ai.com"
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
