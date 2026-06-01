import { forwardRef } from "react";
import {
  Box, Typography, Grid, Card, CardContent,
} from "@mui/material";
import { FEATURES, HOW_IT_HELPS, HOW_IT_WORKS, TRUST_ITEMS } from "../constants/data";

const SectionLabel = ({ children }) => (
  <Typography
    sx={{
      fontSize: 12, fontWeight: 600, letterSpacing: 2,
      textTransform: "uppercase", color: "#185FA5", mb: 1.5,
    }}
  >
    {children}
  </Typography>
);

const Divider = ({ center = false }) => (
  <Box
    sx={{
      width: 48, height: 4,
      background: "linear-gradient(90deg, #185FA5, #00C9A7)",
      borderRadius: 2, my: 2,
      mx: center ? "auto" : 0,
    }}
  />
);

const AboutSection = forwardRef(function AboutSection(_, ref) {
  return (
    <Box
      ref={ref}
      component="section"
      sx={{ background: "#F8FAFF", py: { xs: 8, md: 12 }, px: "5vw" }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <SectionLabel>About</SectionLabel>
          <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 42 }, color: "#0d1117" }}>
            What is Neuro Grip?
          </Typography>
          <Divider center />
          <Typography sx={{ fontSize: 17, color: "#4A5568", maxWidth: 640, mx: "auto", lineHeight: 1.7 }}>
            Neuro Grip is a soft robotic hand glove that uses advanced actuator technology to assist
            patients suffering from hand paralysis, stroke, or motor disorders — enabling natural
            movement through intelligent mechanical support.
          </Typography>
        </Box>

        {/* How It Works */}
        <Box
          sx={{
            background: "#fff", borderRadius: 4, p: { xs: 3, md: 5 },
            mb: 8, border: "1px solid #E8ECEF",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: 22, color: "#0d1117", mb: 3.5 }}>
            How It Works
          </Typography>
          <Grid container spacing={3}>
            {HOW_IT_WORKS.map(({ title, desc }) => (
              <Grid item xs={12} sm={6} md={3} key={title}>
                <Box
                  sx={{
                    p: 2.5,
                    borderLeft: "3px solid #185FA5",
                    background: "#F8FAFF",
                    borderRadius: "0 12px 12px 0",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#185FA5", mb: 1 }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6 }}>
                    {desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Key Features */}
        <SectionLabel>Key Features</SectionLabel>
        <Grid container spacing={2.5} sx={{ mb: 8 }}>
          {FEATURES.map((f) => (
            <Grid item xs={12} sm={6} md={3} key={f.title}>
              <Card
                sx={{
                  p: 1, height: "100%",
                  transition: "box-shadow 0.2s, transform 0.2s",
                  "&:hover": { boxShadow: "0 8px 32px rgba(24,95,165,0.10)", transform: "translateY(-3px)" },
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 36, mb: 2 }}>{f.icon}</Typography>
                  <Typography
                    sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 17, color: "#0d1117", mb: 1 }}
                  >
                    {f.title}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6 }}>
                    {f.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Patient Journey */}
        <SectionLabel>Patient Journey</SectionLabel>
        <Typography variant="h3" sx={{ fontSize: 22, color: "#0d1117", mb: 3 }}>
          How Neuro Grip Helps
        </Typography>
        <Grid container spacing={2.5} sx={{ mb: 8 }}>
          {HOW_IT_HELPS.map((p, i) => (
            <Grid item xs={12} md={4} key={p.phase}>
              <Box
                sx={{
                  background: p.color, borderRadius: 4, p: 3.5, height: "100%",
                }}
              >
                <Typography
                  sx={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: p.accent, mb: 1.25 }}
                >
                  Phase {i + 1} — {p.phase}
                </Typography>
                <Typography
                  sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#0d1117", mb: 1.25 }}
                >
                  {p.label}
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6 }}>
                  {p.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Why Trust Us */}
        <SectionLabel>Why Trust Us</SectionLabel>
        <Grid container spacing={2.5}>
          {TRUST_ITEMS.map(({ icon, title, desc }) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <Box
                sx={{
                  background: "#fff", border: "1px solid #E8ECEF",
                  borderRadius: 4, p: 3, display: "flex", gap: 2, alignItems: "flex-start",
                }}
              >
                <Typography sx={{ fontSize: 28 }}>{icon}</Typography>
                <Box>
                  <Typography
                    sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#0d1117", mb: 0.75 }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: "#4A5568", lineHeight: 1.6 }}>
                    {desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
});

export default AboutSection;