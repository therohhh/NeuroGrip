import { Box, Typography, Link, Stack, Divider } from "@mui/material";
import { NAV_LINKS } from "../constants/data";

export default function Footer({ scrollTo }) {
  return (
    <Box
      component="footer"
      sx={{ background: "#0d1117", color: "#fff", pt: 6, pb: 4, px: "5vw" }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 4,
            mb: 5,
          }}
        >
          {/* Brand */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.5 }}>
              <Box
                sx={{
                  width: 36, height: 36, borderRadius: "10px",
                  background: "linear-gradient(135deg, #185FA5, #00C9A7)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <span style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 16 }}>N</span>
              </Box>
              <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#fff" }}>
                Neuro<span style={{ color: "#00C9A7" }}>Grip</span>
              </Typography>
            </Box>
            <Typography sx={{ fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 260, lineHeight: 1.6 }}>
              Restoring mobility through intelligent soft robotics and compassionate engineering.
            </Typography>
          </Box>

          {/* Links */}
          <Box sx={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <Box>
              <Typography
                sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", mb: 2 }}
              >
                Navigate
              </Typography>
              <Stack spacing={1.25}>
                {NAV_LINKS.map((l) => (
                  <Box
                    key={l}
                    component="button"
                    onClick={() => scrollTo(l)}
                    sx={{
                      background: "none", border: "none", color: "rgba(255,255,255,0.65)",
                      fontSize: 14, cursor: "pointer", textAlign: "left",
                      fontFamily: "'DM Sans', sans-serif", p: 0,
                      "&:hover": { color: "#fff" },
                      transition: "color 0.2s",
                    }}
                  >
                    {l}
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", mb: 2 }}
              >
                Connect
              </Typography>
              <Stack spacing={1.25}>
                {["LinkedIn", "Twitter / X", "Instagram"].map((s) => (
                  <Link
                    key={s}
                    href="#"
                    underline="none"
                    sx={{ color: "rgba(255,255,255,0.65)", fontSize: 14, "&:hover": { color: "#fff" }, transition: "color 0.2s" }}
                  >
                    {s}
                  </Link>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 3 }} />

        <Box
          sx={{
            display: "flex", justifyContent: "space-between",
            flexWrap: "wrap", gap: 1.5,
          }}
        >
          <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            © 2025 NeuroGrip. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            AICTE Licensed · Made in India 🇮🇳
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}