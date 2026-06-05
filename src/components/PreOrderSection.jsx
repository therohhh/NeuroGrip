import { forwardRef } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { FaFlask, FaClipboardList, FaHospital } from "react-icons/fa";
import FadeInSection from "./FadeInSection";

const BADGES = [
  { icon: <FaFlask style={{ color: "#3498DB" }} />, label: "In Development" },
  { icon: <FaClipboardList style={{ color: "#9B59B6" }} />, label: "AICTE Licensed" },
  { icon: <FaHospital style={{ color: "#E74C3C" }} />, label: "Medical Grade" },
];

const PreOrderSection = forwardRef(function PreOrderSection({ id, scrollTo }, ref) {
  return (
    <Box id={id} ref={ref} component="section" sx={{ background: "linear-gradient(135deg, #0d1117 0%, #1B3A6B 100%)", py: { xs: 5, md: 8 }, px: "5vw" }}>
      <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>

        <FadeInSection delay={0} duration={0.6}>
          <Box sx={{ display: "inline-block", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 100, px: 2, py: 0.75, mb: 2.5 }}>
            <Typography sx={{ color: "#B5D4F4", fontSize: 12, fontWeight: 600, letterSpacing: 1 }}>🚧 COMING SOON</Typography>
          </Box>
        </FadeInSection>

        <FadeInSection delay={0.15} duration={0.7}>
          <Typography variant="h2" sx={{ fontSize: { xs: 24, md: 40 }, fontWeight: 800, color: "#fff", lineHeight: 1.2, mb: 2 }}>
            Neuro Grip is Under Development
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.3} duration={0.7}>
          <Typography sx={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 520, mx: "auto", mb: 3.5 }}>
            We're working hard to bring you the most advanced soft robotic hand glove for
            rehabilitation. Early Access users will be the first to know when we launch.
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.45} duration={0.7}>
          <Button variant="contained" onClick={() => scrollTo("Contact")}
            sx={{ background: "#00C9A7", color: "#fff", fontWeight: 700, fontSize: 15, px: 3.5, py: 1.5, "&:hover": { background: "#00A88C" }, boxShadow: "0 4px 20px rgba(0,201,167,0.4)" }}>
            Apply for Early Access
          </Button>
        </FadeInSection>

        <FadeInSection delay={0.6} duration={0.7}>
          <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
            <Stack direction="row" spacing={{ xs: 3, md: 6 }} justifyContent="center" alignItems="center">
              {BADGES.map(({ icon, label }) => (
                <Box key={label} sx={{ textAlign: "center", minWidth: 100 }}>
                  <Typography sx={{ fontSize: 26, mb: 0.75 }}>{icon}</Typography>
                  <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{label}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </FadeInSection>
      </Box>
    </Box>
  );
});

export default PreOrderSection;