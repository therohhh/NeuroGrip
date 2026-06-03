import { forwardRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { JOBS } from "../constants/data";
import FadeInSection from "./FadeInSection";

const CareerSection = forwardRef(function CareerSection({ id, scrollTo }, ref) {
  return (
    <Box id={id} ref={ref} component="section" sx={{ py: { xs: 4, md: 6 }, px: "5vw" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <FadeInSection delay={0} duration={0.6}>
          <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1 }}>
            Career
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 30 }, color: "#0d1117", mb: 1 }}>
            Join Our Mission
          </Typography>
          <Box sx={{ width: 40, height: 3, background: "linear-gradient(90deg, #185FA5, #00C9A7)", borderRadius: 2, my: 1.5 }} />
          <Typography sx={{ fontSize: 14, color: "#4A5568", mb: 3.5, maxWidth: 500, lineHeight: 1.6 }}>
            We're a small team of innovators on a mission to change rehabilitation. If you're passionate
            about robotics, medicine, or technology, we'd love to hear from you.
          </Typography>
        </FadeInSection>

        <FadeInSection delay={0.15} duration={0.7}>
          {JOBS.length === 0 ? (
            <Box sx={{ background: "#F8FAFF", border: "1.5px dashed #B5D4F4", borderRadius: 3, p: { xs: 4, md: 6 }, textAlign: "center" }}>
              <Typography sx={{ fontSize: 40, mb: 1.5 }}>📋</Typography>
              <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 17, color: "#0d1117", mb: 1 }}>
                No Openings Right Now
              </Typography>
              <Typography sx={{ fontSize: 13, color: "#4A5568", mb: 2.5 }}>
                We're not actively hiring at the moment, but we're always open to connecting with talented people.
              </Typography>
              <Button variant="outlined" onClick={() => scrollTo("Contact")}
                sx={{ color: "#0d1117", borderColor: "#0d1117", fontSize: 13, "&:hover": { background: "#0d1117", color: "#fff" } }}>
                Express Interest
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {JOBS.map((j) => (
                <Box key={j.title} sx={{ background: "#fff", border: "1px solid #E8ECEF", borderRadius: 2, p: 2.5 }}>
                  <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, color: "#0d1117" }}>{j.title}</Typography>
                </Box>
              ))}
            </Box>
          )}
        </FadeInSection>
      </Box>
    </Box>
  );
});

export default CareerSection;