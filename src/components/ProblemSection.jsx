import { Box, Typography, Grid } from "@mui/material";
import FadeInSection from "./FadeInSection";

const STATS = [
  { number: "1.8M", label: "new stroke survivors every year in India" },
  { number: "60%", label: "discontinue therapy within 3–6 months" },
];

export default function ProblemSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: "5vw",
        background: "#fff",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 10 },
          }}
        >
          {/* LEFT — Stats stacked vertically */}
          <Box sx={{ flex: 1 }}>
            <FadeInSection delay={0} duration={0.7}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {STATS.map((s, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
                    <Box
                      sx={{
                        width: 4,
                        flexShrink: 0,
                        alignSelf: "stretch",
                        background: i === 0
                          ? "linear-gradient(180deg, #185FA5, #00C9A7)"
                          : "linear-gradient(180deg, #00C9A7, #185FA5)",
                        borderRadius: 2,
                        minHeight: 60,
                      }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Sora', sans-serif",
                          fontWeight: 800,
                          fontSize: { xs: 48, md: 56 },
                          color: "#0d1117",
                          lineHeight: 1,
                          mb: 1,
                        }}
                      >
                        {s.number}
                      </Typography>
                      <Typography sx={{ fontSize: 16, color: "#4A5568", lineHeight: 1.5 }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </FadeInSection>
          </Box>

          {/* RIGHT — Message card */}
          <Box sx={{ flex: 1.5 }}>
            <FadeInSection delay={0.2} duration={0.7} direction="left">
              <Box
                sx={{
                  background: "linear-gradient(135deg, #F0F4FF 0%, #1044c0 100%)",
                  borderRadius: 5,
                  p: { xs: 4, md: 5 },
                  border: "1px solid #E8ECEF",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: { xs: 15, md: 17 },
                    fontWeight: 700,
                    color: "#0d1117",
                    lineHeight: 1.5,
                    mb: 3,
                    fontStyle: "italic",
                  }}
                >
                  "You are doing everything you can. NeuroGrip makes sure your efforts actually count."
                </Typography>
                <Box
                  sx={{
                    background: "#fff",
                    borderRadius: 3,
                    px: 3,
                    py: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 2,
                    border: "1px solid #E8ECEF",
                  }}
                >
                  <Typography sx={{ fontSize: 24 }}>🏠</Typography>
                  <Typography sx={{ fontSize: 15, color: "#0d1117", fontWeight: 500 }}>
                    One device. No monthly clinic fees. No commute.
                  </Typography>
                </Box>
              </Box>
            </FadeInSection>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}