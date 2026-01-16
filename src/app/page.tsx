import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Features />
      <TechStack />
      <Footer />
    </main>
  );
}
