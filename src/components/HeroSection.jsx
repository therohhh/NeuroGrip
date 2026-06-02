import { forwardRef } from "react";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";
import FadeInSection from "./FadeInSection";
import heroImg from "../assets/hero.jpg";
const TAGS = [
  { label: "🤖 Soft Robotics" },
  { label: "🏥 Medical Grade" },
  { label: "⚡ Neuro-Adaptive" },
  { label: "🔬 Research Backed" },
];

const HeroSection = forwardRef(function HeroSection({ scrollTo }, ref) {
  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        pt: { xs: "100px", md: "120px" },
        pb: { xs: 6, md: 10 },
        px: "5vw",
        maxWidth: 1200,
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0, md: "60px" },
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left */}
        <Box sx={{ flex: 1 }}>
          {/* Badge */}
          <FadeInSection delay={0} duration={0.6}>
            <Box
              sx={{
                display: "inline-flex", alignItems: "center", gap: 1,
                background: "#F0F4FF", border: "1px solid #B5D4F4",
                borderRadius: 100, px: 2, py: 0.75, mb: 3,
              }}
            >
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", background: "#185FA5" }} />
              <Typography sx={{ fontSize: 13, fontWeight: 500, color: "#185FA5" }}>
                AICTE Licensed Innovation
              </Typography>
            </Box>
          </FadeInSection>

          <FadeInSection delay={0.15} duration={0.7}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: 36, sm: 48, md: "clamp(36px, 5.5vw, 64px)" },
                lineHeight: 1.1, color: "#0d1117", mb: 2.5,
              }}
            >
              Restoring Grip.<br />
              <span style={{ color: "#185FA5" }}>Restoring Life.</span>
            </Typography>
          </FadeInSection>

          <FadeInSection delay={0.3} duration={0.7}>
            <Typography
              sx={{
                fontSize: { xs: 16, md: 18 }, color: "#4A5568",
                lineHeight: 1.7, mb: 4, maxWidth: 520,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Neuro Grip is a soft robotic hand glove designed to assist and rehabilitate
              patients with limited hand mobility — giving them back the independence they deserve.
            </Typography>
          </FadeInSection>

          {/* Chips */}
          <FadeInSection delay={0.45} duration={0.7}>
            <Box sx={{ mb: 4, display: "flex", flexWrap: "wrap", gap: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
              {TAGS.map((t) => (
                <Chip
                  key={t.label}
                  label={t.label}
                  size="small"
                  sx={{
                    background: "#F0F4FF", color: "#185FA5",
                    border: "1px solid #B5D4F4", fontWeight: 500,
                    fontSize: 13, borderRadius: "100px",
                  }}
                />
              ))}
            </Box>
          </FadeInSection>

          <FadeInSection delay={0.6} duration={0.7}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent={{ xs: "center", md: "flex-start" }}>
              <Button
                variant="contained"
                onClick={() => scrollTo("About")}
                sx={{ background: "#0d1117", "&:hover": { background: "#1B3A6B" }, px: 3.5, py: 1.5 }}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                onClick={() => scrollTo("Contact")}
                sx={{
                  color: "#0d1117", borderColor: "#0d1117", px: 3.5, py: 1.5,
                  "&:hover": { background: "#0d1117", color: "#fff" },
                }}
              >
                Get in Touch
              </Button>
            </Stack>
          </FadeInSection>
        </Box>

        {/* Right Visual */}
        <FadeInSection delay={0.3} duration={0.9} direction="left">
          <Box
            sx={{
              flex: "0 0 auto",
              width: { xs: "100%", md: 420 },
              minHeight: { xs: 360, md: 420 },
              position: "relative",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #E6F1FB 0%, #E1F5EE 100%)",
                borderRadius: 6,
                overflow: "hidden",
              }}
            >
              {heroImg ? (
                <Box
                  component="img"
                  src={heroImg}
                  alt="Neuro Grip soft robotic rehabilitation glove"
                  loading="lazy"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: { xs: "contain", md: "cover" },
                    objectPosition: "center",
                  }}
                />
              ) : null}

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {!heroImg && (
                  <>
                    <Box sx={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "rgba(24,95,165,0.08)", animation: "pulse 3s ease-in-out infinite" }} />
                    <Box sx={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(24,95,165,0.10)", animation: "pulse 3s ease-in-out infinite 0.5s" }} />
                  </>
                )}

              </Box>
            </Box>
          </Box>
        </FadeInSection>
      </Box>
    </Box>
  );
});

export default HeroSection;