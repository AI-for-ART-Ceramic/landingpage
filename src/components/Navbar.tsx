"use client";

import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Use Cases", href: "#use-cases" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="p-1.5 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-lg group-hover:scale-110 transition-transform">
                            <Sparkles className="w-5 h-5 text-slate-900 fill-current" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500">
                            Lanna AI
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="http://Ceramix.lanna-ai.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-semibold text-slate-900 bg-amber-400 rounded-full hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20"
                        >
                            Launch Ceramix
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-slate-300 hover:text-white"
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
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800 rounded-md"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="http://chat.lanna-ai.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center mt-4 px-4 py-3 font-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Launch App
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
