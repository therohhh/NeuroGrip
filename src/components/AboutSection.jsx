import { forwardRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  FEATURES,
  HOW_IT_HELPS,
  HOW_IT_WORKS,
  TRUST_ITEMS,
  ICON_COMPONENTS,
} from "../constants/data";
import FadeInSection from "./FadeInSection";

const SectionLabel = ({ children }) => (
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
    {children}
  </Typography>
);

const Divider = ({ center = false }) => (
  <Box
    sx={{
      width: 48,
      height: 4,
      background: "linear-gradient(90deg, #185FA5, #00C9A7)",
      borderRadius: 2,
      my: 2,
      mx: center ? "auto" : 0,
    }}
  />
);

const AboutSection = forwardRef(function AboutSection({ id }, ref) {
  return (
    <Box
      id={id}
      ref={ref}
      component="section"
      sx={{
        background: "#F8FAFF",
        py: { xs: 8, md: 12 },
        px: "5vw",
        width: "100%",
      }}
    >
     <Box sx={{ maxWidth: "1200px", width: "100%", mx: "auto" }}>
        {/* Header */}
        <FadeInSection delay={0} duration={0.6}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <SectionLabel>About</SectionLabel>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: 28, md: 42 },
                color: "#0d1117",
              }}
            >
              What is Neuro Grip?
            </Typography>

            <Divider center />

            <Typography
              sx={{
                fontSize: 17,
                color: "#4A5568",
                maxWidth: 640,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Neuro Grip is a soft robotic hand glove that uses advanced
              actuator technology to assist patients suffering from hand
              paralysis, stroke, or motor disorders — enabling natural movement
              through intelligent mechanical support.
            </Typography>
          </Box>
        </FadeInSection>

       

        {/* Key Features */}
        <SectionLabel>Key Features</SectionLabel>

        <Grid
          container
         spacing={2}
          justifyContent="center"
          sx={{ mb: 8 }}
        >
          {FEATURES.map((f, i) => (
            <Grid item xs={12} sm={6} md={3} key={f.title}>
              <FadeInSection delay={i * 0.12} duration={0.65}>
               <Card
  sx={{
    height: 240,
    maxWidth: 270,
    mx: "auto",
    borderRadius: 3,
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 30px rgba(24,95,165,0.12)",
    },
  }}
>
              <CardContent
  sx={{
    p: 3,
    textAlign: "center",
  }}
>
  <Typography sx={{ fontSize: 40, mb: 2 }}>
    {ICON_COMPONENTS[f.icon] ? ICON_COMPONENTS[f.icon]({ color: f.color }) : f.icon}
  </Typography>

  <Typography
    sx={{
      fontFamily: "'Sora', sans-serif",
      fontWeight: 700,
      fontSize: 16,
      color: "#0d1117",
      mb: 1,
    }}
  >
    {f.title}
  </Typography>

  <Typography
    sx={{
      fontSize: 13,
      color: "#4A5568",
      lineHeight: 1.6,
    }}
  >
    {f.desc}
  </Typography>
</CardContent>
                </Card>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>

      

        {/* Why Trust Us */}
        <SectionLabel>Why Trust Us</SectionLabel>

        <Grid
  container
  spacing={2}
  justifyContent="center"
  sx={{ mb: 3 }}
>
          {TRUST_ITEMS.map(({ icon, color, title, desc }, i) => (
            <Grid item xs={12} sm={6} md={3} key={title}>
              <FadeInSection delay={i * 0.12} duration={0.65}>
              <Box
  sx={{
    background: "#fff",
    border: "1px solid #E8ECEF",
    borderRadius: 3,
    p: 2.5,
    textAlign: "center",
    height: 220,
    maxWidth: 270,
    mx: "auto",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 10px 25px rgba(24,95,165,0.10)",
    },
  }}
>
                  <Typography sx={{ fontSize: 32, mb: 1.5 }}>
                    {ICON_COMPONENTS[icon] ? ICON_COMPONENTS[icon]({ color: color }) : icon}
                  </Typography>

                  <Box>
                    <Typography
  sx={{
    fontFamily: "'Sora', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    color: "#0d1117",
    mb: 1,
  }}
>
  {title}
</Typography>

<Typography
  sx={{
    fontSize: 13,
    color: "#4A5568",
    lineHeight: 1.6,
  }}
>
  {desc}
</Typography>
                  </Box>
                </Box>
              </FadeInSection>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
});

export default AboutSection;