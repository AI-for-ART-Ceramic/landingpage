import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <Sparkles className="w-5 h-5 text-amber-500 fill-current" />
                            <span className="text-xl font-bold text-slate-100">
                                Lanna AI
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Intelligent customer analysis platform empowering businesses with AI-driven insights and automated engagement.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-100 mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="#features" className="hover:text-amber-400 transition-colors">Features</Link></li>
                            <li><Link href="#tech-stack" className="hover:text-amber-400 transition-colors">Technology</Link></li>
                            <li><a href="http://chat.lanna-ai.com" className="hover:text-amber-400 transition-colors">Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-100 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-amber-400 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-amber-400 transition-colors">Data Deletion</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-xs">
                        © {new Date().getFullYear()} Lanna AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
