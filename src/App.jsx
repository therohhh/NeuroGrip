import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustTicker from "./components/TrustTicker";
import ProblemSection from "./components/ProblemSection";
import AboutSection from "./components/AboutSection";
import HowItWorksPlain from "./components/HowItWorksPlain";
import EcosystemSection from "./components/EcosystemSection";
import CareerSection from "./components/CareerSection";
import PreOrderSection from "./components/PreOrderSection";
import StorySection from "./components/StorySection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section) => {
    setActiveNav(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      sx={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "#fff",
        color: "#0d1117",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@600;700;800&display=swap');
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 92px; }
        section { scroll-margin-top: 92px; }
      `}</style>

      {/* 1. Navbar */}
      <Navbar activeNav={activeNav} scrollTo={scrollTo} scrolled={scrolled} />

      {/* 2. Hero */}
      <HeroSection id="Home" scrollTo={scrollTo} />

      {/* 3. Trust Ticker */}
      <TrustTicker />

      {/* 4. Problem */}
      <ProblemSection />

      {/* 5. About (KEEP) */}
      <AboutSection id="About" />

      {/* 6. How It Works – Plain Language */}
      <HowItWorksPlain />

      {/* 7. Ecosystem Preview */}
      <EcosystemSection id="The Ecosystem" />

      {/* 8. Career (KEEP) */}
      <CareerSection id="Career" scrollTo={scrollTo} />

      {/* 9. Pre-order / Early Access */}
      <PreOrderSection id="Pre-order" scrollTo={scrollTo} />

      {/* 10. Our Story */}
      <StorySection id="Our Story" />

      {/* 11. Team (KEEP) */}
      <TeamSection />

      {/* 12. Contact (KEEP + WhatsApp) */}
      <ContactSection id="Contact" />

      {/* 12. FAQ */}
      <FAQSection id="FAQ" />

      {/* 13. Footer */}
      <Footer scrollTo={scrollTo} />
    </Box>
  );
}