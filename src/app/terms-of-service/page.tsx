import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
                <div className="space-y-6">
                    <p className="text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using Lanna AI, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">2. Use of Service</h2>
                        <p>
                            You agree to use the Service only for lawful purposes and in accordance with these Terms. You are responsible for all activity that occurs under your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">3. Intellectual Property</h2>
                        <p>
                            The Service and its original content, features, and functionality are and will remain the exclusive property of Lanna AI and its licensors.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall Lanna AI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">5. Termination</h2>
                        <p>
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">6. Changes</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
