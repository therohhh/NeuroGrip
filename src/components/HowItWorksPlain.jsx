import { Box, Typography } from "@mui/material";
import { HOW_IT_WORKS_PLAIN } from "../constants/data";
import FadeInSection from "./FadeInSection";

export default function HowItWorksPlain() {
  return (
    <Box component="section" sx={{ py: { xs: 3, md: 5 }, px: "5vw", background: "#F8FAFF" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <FadeInSection delay={0} duration={0.6}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1 }}>
              How It Works
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 28 }, color: "#0d1117", mb: 1 }}>
              How NeuroGrip Helps You Recover
            </Typography>
            <Box sx={{ width: 40, height: 3, background: "linear-gradient(90deg, #185FA5, #00C9A7)", borderRadius: 2, my: 1.5, mx: "auto" }} />
            <Typography sx={{ fontSize: 14, color: "#4A5568", maxWidth: 480, mx: "auto", lineHeight: 1.6 }}>
              No medical jargon. Here's exactly what happens when you use NeuroGrip.
            </Typography>
          </Box>
        </FadeInSection>

        <Box sx={{ position: "relative" }}>
          <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "linear-gradient(180deg, #B5D4F4, #00C9A7)", transform: "translateX(-50%)", zIndex: 0 }} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 1, md: 1.5 } }}>
            {HOW_IT_WORKS_PLAIN.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeInSection key={item.step} delay={i * 0.1} duration={0.65} direction={isLeft ? "right" : "left"}>
                  <Box sx={{ display: "flex", flexDirection: { xs: "row", md: isLeft ? "row" : "row-reverse" }, alignItems: "center", gap: { xs: 2, md: 5 }, position: "relative", zIndex: 1 }}>
                    <Box sx={{ flex: 1, background: "#fff", border: "1.5px solid #E8ECEF", borderRadius: 3, p: { xs: 1.5, md: 2 }, boxShadow: "0 2px 12px rgba(24,95,165,0.06)", transition: "all 0.3s", "&:hover": { boxShadow: "0 8px 28px rgba(24,95,165,0.12)", transform: "translateY(-3px)" } }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 0.75 }}>
                        <Box sx={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #185FA5, #00C9A7)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Typography sx={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 12 }}>{item.step}</Typography>
                        </Box>
                        <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#0d1117" }}>{item.title}</Typography>
                      </Box>
                      <Typography sx={{ fontSize: 13, color: "#4A5568", lineHeight: 1.6 }}>{item.desc}</Typography>
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "flex" }, width: 14, height: 14, flexShrink: 0, borderRadius: "50%", background: "#185FA5", border: "3px solid #fff", boxShadow: "0 0 0 2px #185FA5", zIndex: 2 }} />
                    <Box sx={{ flex: 1, display: { xs: "none", md: "block" } }} />
                  </Box>
                </FadeInSection>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}