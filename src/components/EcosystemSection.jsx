import { forwardRef } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ECOSYSTEM_CARDS } from "../constants/data";
import FadeInSection from "./FadeInSection";

const EcosystemSection = forwardRef(function EcosystemSection({ id }, ref) {
  return (
    <Box
      id={id}
      ref={ref}
      component="section"
      sx={{
        py: { xs: 4, md: 6 },
        px: "5vw",
        background: "#fff",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <FadeInSection delay={0} duration={0.6}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1 }}
            >
              The Ecosystem
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 22, md: 30 }, color: "#0d1117", mb: 1 }}
            >
              The NeuroGrip Ecosystem
            </Typography>
            <Box sx={{ width: 40, height: 3, background: "linear-gradient(90deg, #185FA5, #00C9A7)", borderRadius: 2, my: 1.5, mx: "auto" }} />
          </Box>
        </FadeInSection>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            alignItems: "stretch",
          }}
        >
          {ECOSYSTEM_CARDS.map((card, i) => (
            <FadeInSection key={card.title} delay={i * 0.12} duration={0.65}>
              <Box
                sx={{
                  flex: 1,
                  background: "#F8FAFF",
                  border: "1.5px solid #E8ECEF",
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                  position: "relative",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 32px rgba(24,95,165,0.12)",
                    borderColor: "#B5D4F4",
                  },
                }}
              >
                {card.badge && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12, right: 12,
                      background: "#FFF3CD",
                      border: "1px solid #F5C518",
                      borderRadius: 100,
                      px: 1.5, py: 0.4,
                    }}
                  >
                    <Typography sx={{ fontSize: 10, fontWeight: 700, color: "#856404", letterSpacing: 0.5 }}>
                      {card.badge}
                    </Typography>
                  </Box>
                )}

                <Typography sx={{ fontSize: 32, mb: 2 }}>{card.icon}</Typography>

                <Typography
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#0d1117",
                    mb: 1,
                    lineHeight: 1.4,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography sx={{ fontSize: 13, color: "#4A5568", lineHeight: 1.6, mb: 2 }}>
                  {card.desc}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#185FA5",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {card.cta}
                </Typography>
              </Box>
            </FadeInSection>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default EcosystemSection;