import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import TechStack from "@/components/sections/TechStack";
import Footer from "@/components/sections/Footer";

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
