import { forwardRef } from "react";
import { Box, Typography, Button, Chip, Stack } from "@mui/material";

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

          {/* Chips */}
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
        </Box>

        {/* Right Visual */}
        <Box
          sx={{
            flex: "0 0 420px", width: { xs: "100%", md: 420 },
            height: { xs: 280, md: 420 }, position: "relative", mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            sx={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, #E6F1FB 0%, #E1F5EE 100%)",
              borderRadius: 6, display: "flex", alignItems: "center",
              justifyContent: "center", overflow: "hidden",
            }}
          >
            <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
              <Box sx={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "rgba(24,95,165,0.08)", animation: "pulse 3s ease-in-out infinite" }} />
              <Box sx={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(24,95,165,0.10)", animation: "pulse 3s ease-in-out infinite 0.5s" }} />
              <Box sx={{ zIndex: 2, textAlign: "center" }}>
                <Typography sx={{ fontSize: 80 }}>🦾</Typography>
                <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#185FA5", mt: 1.5 }}>
                  Neuro Grip
                </Typography>
                <Typography sx={{ fontSize: 13, color: "#4A5568", mt: 0.5 }}>Soft Robotic Glove</Typography>
              </Box>
              <Box sx={{ position: "absolute", top: 32, right: 32, background: "#fff", borderRadius: 3, px: 2, py: 1.25, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", fontSize: 13, fontWeight: 500, color: "#0F6E56" }}>
                ✓ AICTE Certified
              </Box>
              <Box sx={{ position: "absolute", bottom: 32, left: 32, background: "#fff", borderRadius: 3, px: 2, py: 1.25, boxShadow: "0 4px 16px rgba(0,0,0,0.08)", fontSize: 13, fontWeight: 500, color: "#185FA5" }}>
                🔬 Research Backed
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default HeroSection;