import { forwardRef } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import FadeInSection from "./FadeInSection";

const StorySection = forwardRef(function StorySection({ id }, ref) {
  return (
    <Box
      id={id}
      ref={ref}
      component="section"
      sx={{ background: "#fff", py: { xs: 8, md: 12 }, px: "5vw", width: "100%" }}
    >
      <Box sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        <FadeInSection delay={0} duration={0.6}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#185FA5",
                mb: 3,
              }}
            >
              Our Story
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 28, md: 42 }, color: "#0d1117" }}
            >
              Building trust through purpose and provenance
            </Typography>
          </Box>
        </FadeInSection>

        <FadeInSection delay={0.1} duration={0.7}>
          <Box
            sx={{
              background: "#F8FAFF",
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              mb: 8,
              border: "1px solid #E8ECEF",
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                color: "#0d1117",
                fontWeight: 600,
                mb: 2,
              }}
            >
              Why we exist
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#4A5568", lineHeight: 1.8 }}>
              Founded to bridge the gap between hospital technology and accessible home care — so that recovery from stroke is not determined by geography or income.
            </Typography>
          </Box>
        </FadeInSection>

        <FadeInSection delay={0.15} duration={0.7}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 14px 40px rgba(24, 95, 165, 0.08)",
              overflow: "hidden",
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Typography sx={{ fontSize: 16, fontWeight: 700, color: "#185FA5", mb: 1.5 }}>
                Our Story 
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#4A5568", lineHeight: 1.8, mb: 3 }}>
                SwethaReddy Innovations Pvt. Ltd. was established in 2025 and is based in Tirupati, Andhra Pradesh. Founded to bridge the gap between hospital technology and accessible home care — so that recovery from stroke is not determined by geography or income.
              </Typography>

              <Box sx={{ display: "grid", gap: 2, mb: 3 }}>
                {[
                  { label: "Established", value: "2025" },
                  { label: "Registered office", value: "Tirupati, Andhra Pradesh, India" },
                  { label: "Mission", value: "Bridge hospital technology and home care so stroke recovery is not determined by geography or income." },
                  { label: "Trust signals", value: "MSME-registered and Startup India-recognized." },
                  { label: "Founder", value: "Mohitha — Electronics and Communication Engineering background, specialized in embedded intelligence, closed-loop control systems, and bio-robotics." },
                  { label: "Origin story", value: "Started to make stroke recovery accessible beyond hospitals and into everyday homes." },
                  { label: "Location", value: "Designed and developed in Tirupati, Andhra Pradesh. Proud Indian engineering, built for the Indian home." },
                ].map((item) => (
                  <Box key={item.label}>
                    <Typography sx={{ fontSize: 12, fontWeight: 700, color: "#0d1117", textTransform: "uppercase", letterSpacing: 1.5, mb: 0.75 }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontSize: 13, color: "#4A5568", lineHeight: 1.7 }}>
                      {item.value}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Typography sx={{ fontSize: 13, color: "#4A5568", lineHeight: 1.8 }}>
                The NeuroGrip story is anchored in trust: a real founder, a verifiable company, and an engineering team focused on delivering rehabilitation technology that works in the Indian context.
              </Typography>
            </CardContent>
          </Card>
        </FadeInSection>
      </Box>
    </Box>
  );
});

export default StorySection;
