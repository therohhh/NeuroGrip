import { forwardRef } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import FadeInSection from "./FadeInSection";

const BADGES = [
  { icon: "🔬", label: "In Development" },
  { icon: "📋", label: "AICTE Licensed" },
  { icon: "🏥", label: "Medical Grade" },
];

const PreOrderSection = forwardRef(function PreOrderSection({ scrollTo }, ref) {
  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        background: "linear-gradient(135deg, #0d1117 0%, #1B3A6B 100%)",
        py: { xs: 8, md: 12 },
        px: "5vw",
      }}
    >
      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center" }}>

        {/* Coming Soon badge */}
        <FadeInSection delay={0} duration={0.6}>
          <Box
            sx={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 100,
              px: 2.5, py: 1, mb: 3,
            }}
          >
            <Typography sx={{ color: "#B5D4F4", fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>
              🚧 COMING SOON
            </Typography>
          </Box>
        </FadeInSection>

        <FadeInSection delay={0.15} duration={0.7}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 30, md: "clamp(30px, 5vw, 52px)" },
              fontWeight: 800, color: "#fff", lineHeight: 1.2, mb: 2.5,
            }}
          >
            Neuro Grip is Under Development
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.3} duration={0.7}>
          <Typography
            sx={{
              fontSize: 17, color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: 580, mx: "auto", mb: 4.5,
            }}
          >
            We're working hard to bring you the most advanced soft robotic hand glove for
            rehabilitation. Pre-orders will open soon. Be the first to know when we launch.
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.45} duration={0.7}>
          <Button
            variant="contained"
            onClick={() => scrollTo("Contact")}
            sx={{
              background: "#185FA5", fontSize: 16,
              px: 4, py: 1.75,
              "&:hover": { background: "#1B3A6B" },
            }}
          >
            Notify Me at Launch
          </Button>
        </FadeInSection>

        {/* Badges */}
        <FadeInSection delay={0.6} duration={0.7}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, sm: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 6 }}
          >
            {BADGES.map(({ icon, label }) => (
              <Box key={label} sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: 28, mb: 0.75 }}>{icon}</Typography>
                <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </FadeInSection>
      </Box>
    </Box>
  );
});

export default PreOrderSection;