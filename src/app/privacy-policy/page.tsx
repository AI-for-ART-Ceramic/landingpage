import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-300 font-sans">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <div className="space-y-6">
                    <p className="text-sm text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">1. Introduction</h2>
                        <p>
                            Welcome to Lanna AI  (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services (collectively, the &quot;Service&quot;).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">2. Information We Collect</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Personal Information:</strong> Name, email address, contact details when you register or contact us.</li>
                            <li><strong>Usage Data:</strong> Information on how you interact with our Service, including IP address, browser type, and pages visited.</li>
                            <li><strong>Conversation Data:</strong> Anonymized data from chat interactions processed by our AI for the purpose of providing the service.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul className="list-disc pl-5 space-y-2 mt-2">
                            <li>Provide, operate, and maintain our Service.</li>
                            <li>Improve, personalize, and expand our Service.</li>
                            <li>Analyze usage patterns to enhance user experience.</li>
                            <li>Communicate with you regarding updates, support, and marketing (with your consent).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">4. Data Security</h2>
                        <p>
                            We implement enterprise-grade security measures to protect your data. However, no transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">5. Third-Party Services</h2>
                        <p>
                            Our Service may integrate with third-party platforms (e.g., LINE, Facebook). We are not responsible for the privacy practices of these third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-amber-400 mb-4">6. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at: <a href="mailto:aiforartceramic@gmail.com" className="text-sky-400 hover:underline">aiforartceramic@gmail.com</a>

                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
