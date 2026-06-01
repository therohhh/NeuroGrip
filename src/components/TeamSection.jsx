import { useState } from "react";
import {
  Box, Typography, Avatar, IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TEAM } from "../constants/data";

export default function TeamSection() {
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
      sx={{ py: { xs: 8, md: 12 }, px: "5vw", background: "#F8FAFF" }}
    >
      <Box sx={{ maxWidth: 700, mx: "auto", textAlign: "center" }}>
        <Typography
          sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1.5 }}
        >
          The Team
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 42 }, color: "#0d1117", mb: 1 }}>
          Meet the Founders
        </Typography>
        <Box
          sx={{
            width: 48, height: 4,
            background: "linear-gradient(90deg, #185FA5, #00C9A7)",
            borderRadius: 2, my: 2, mx: "auto", mb: 5,
          }}
        />

        {/* Card */}
        <Box sx={{ position: "relative", minHeight: 280 }}>
          <Box
            sx={{
              background: "#fff",
              border: "1.5px solid #E8ECEF",
              borderRadius: 4,
              p: { xs: 4, md: 5 },
              maxWidth: 480,
              mx: "auto",
              transition: "opacity 0.35s, transform 0.35s",
              opacity: sliding ? 0 : 1,
              transform: sliding
                ? slideDir === "left"
                  ? "translateX(-60px)"
                  : "translateX(60px)"
                : "translateX(0)",
            }}
          >
            <Avatar
              sx={{
                width: 72, height: 72,
                background: member.color,
                fontSize: 24, fontWeight: 700,
                fontFamily: "'Sora', sans-serif",
                mx: "auto", mb: 2.5,
              }}
            >
              {member.initials}
            </Avatar>
            <Typography
              sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#0d1117", mb: 0.5 }}
            >
              {member.name}
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#185FA5", fontWeight: 500, mb: 2.5 }}>
              {member.role}
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#4A5568", lineHeight: 1.7, fontStyle: "italic" }}>
              "{member.quote}"
            </Typography>
          </Box>
        </Box>

        {/* Controls */}
        <Box sx={{ display: "flex", gap: 1.5, justifyContent: "center", mt: 3, alignItems: "center" }}>
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
                  width: 8, height: 8, borderRadius: "50%",
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
      </Box>
    </Box>
  );
}