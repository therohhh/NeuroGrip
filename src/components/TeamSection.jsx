import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TEAM } from "../constants/data";
import FadeInSection from "./FadeInSection";

export default function FounderSection() {
  const [teamIdx, setTeamIdx] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState("left");

  const slideTeam = (dir) => {
    if (sliding) return;
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setTeamIdx((prev) =>
        dir === "left"
          ? (prev + 1) % TEAM.length
          : (prev - 1 + TEAM.length) % TEAM.length
      );
      setSliding(false);
    }, 350);
  };

  const member = TEAM[teamIdx];

  return (
    <Box
      component="section"
      sx={{ py: { xs: 5, md: 8 }, px: "5vw", background: "#F8FAFF" }}
    >
      <Box sx={{ maxWidth: 520, mx: "auto", textAlign: "center" }}>

        {/* Section Label & Heading */}
        <FadeInSection delay={0} duration={0.6}>
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: "uppercase",
              color: "#888780",
              mb: 1,
            }}
          >
            Founder's Words
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: 22, md: 30 },
              fontWeight: 400,
              color: "#0d1117",
              mb: 4,
              lineHeight: 1.3,
            }}
          >
            A note from our founder
          </Typography>
        </FadeInSection>

        {/* Card */}
        <FadeInSection delay={0.2} duration={0.7}>
          <Box
            sx={{
              background: "#fff",
              border: "0.5px solid #E8ECEF",
              borderRadius: "20px",
              overflow: "hidden",
              transition: "opacity 0.35s, transform 0.35s",
              opacity: sliding ? 0 : 1,
              transform: sliding
                ? slideDir === "left"
                  ? "translateX(-60px)"
                  : "translateX(60px)"
                : "translateX(0)",
            }}
          >
            {/* Photo Box — 450px tall */}
            <Box
              sx={{
                width: "100%",
                height: 450,
                position: "relative",
                overflow: "hidden",
                background: "#B5D4F4",
              }}
            >
              {member.photo ? (
                <Box
                  component="img"
                  src={member.photo}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                  }}
                />
              ) : (
                /* Placeholder when no photo */
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: member.color || "linear-gradient(160deg, #B5D4F4 0%, #185FA5 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 64,
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {member.initials}
                </Box>
              )}

              {/* Overlay badge top-left */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "rgba(24, 95, 165, 0.5)",
                  backdropFilter: "blur(6px)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  px: 1.5,
                  py: 0.6,
                  borderRadius: "100px",
                }}
              >
                Founder & CEO
              </Box>
            </Box>

            {/* Body */}
            <Box sx={{ px: { xs: 2.5, md: 3 }, pt: 2.5, pb: 3 }}>
              {/* Quote */}
              <Box
                sx={{
                  borderLeft: "2.5px solid #378ADD",
                  pl: 2,
                  mb: 2.5,
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#4A5568",
                  }}
                >
                  "{member.quote}"
                </Typography>
              </Box>

              {/* Divider */}
              <Box sx={{ height: "0.5px", background: "#E8ECEF", mb: 2 }} />

              {/* Name + Tags */}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ textAlign: "left" }}>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#0d1117",
                      mb: 0.8,
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Box
                      sx={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "100px",
                        background: "#E6F1FB",
                        color: "#185FA5",
                      }}
                    >
                      Founder
                    </Box>
                    <Box
                      sx={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "100px",
                        background: "#E1F5EE",
                        color: "#0F6E56",
                      }}
                    >
                      CEO
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </FadeInSection>

        {/* Controls */}
        <FadeInSection delay={0.35} duration={0.6}>
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              justifyContent: "center",
              mt: 3,
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => slideTeam("right")}
              sx={{ border: "1.5px solid #E8ECEF", "&:hover": { background: "#F0F4FF" } }}
            >
              <ArrowBackIcon fontSize="small" />
            </IconButton>

            <Box sx={{ display: "flex", gap: 1 }}>
              {TEAM.map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: i === teamIdx ? "#185FA5" : "#D1D5DB",
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </Box>

            <IconButton
              onClick={() => slideTeam("left")}
              sx={{ border: "1.5px solid #E8ECEF", "&:hover": { background: "#F0F4FF" } }}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Box>
        </FadeInSection>

      </Box>
    </Box>
  );
}