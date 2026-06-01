import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CareerSection from "./components/CareerSection";
import PreOrderSection from "./components/PreOrderSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section) => {
    setActiveNav(section);
    const el = sectionRefs.current[section];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ref = (name) => (el) => {
    sectionRefs.current[name] = el;
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
      {/* Global keyframe for hero pulse animation */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Sora:wght@600;700;800&display=swap');
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.7; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>

      <Navbar activeNav={activeNav} scrollTo={scrollTo} scrolled={scrolled} />

      <HeroSection ref={ref("Home")} scrollTo={scrollTo} />
      <AboutSection ref={ref("About")} />
      <CareerSection ref={ref("Career")} scrollTo={scrollTo} />
      <PreOrderSection ref={ref("Pre-order")} scrollTo={scrollTo} />
      <TeamSection />
      <ContactSection ref={ref("Contact")} />
      <Footer scrollTo={scrollTo} />
    </Box>
  );
}