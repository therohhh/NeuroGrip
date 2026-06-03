import { Box, Typography, Link, Stack, Divider } from "@mui/material";
import FadeInSection from "./FadeInSection";

const QUICK_LINKS = ["Home", "About", "The Ecosystem", "Our Story", "Career", "Contact", "FAQ"];

export default function Footer({ scrollTo }) {
  return (
    <Box component="footer" sx={{ background: "#0D2B4E", color: "#fff", pt: 5, pb: 3, px: "5vw" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <FadeInSection delay={0} duration={0.7}>
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr 1fr", md: "2fr 1fr 1.5fr 1.5fr" }, gap: { xs: 4, md: 5 }, mb: 4 }}>

            {/* Brand */}
            <Box sx={{ gridColumn: { xs: "1 / -1", md: "auto" } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, mb: 1.5 }}>
                <Box sx={{ width: 32, height: 32, borderRadius: "8px", background: "linear-gradient(135deg, #185FA5, #00C9A7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 14 }}>N</span>
                </Box>
                <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>
                  Neuro<span style={{ color: "#00C9A7" }}>Grip</span>
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: 220 }}>
                Restoring independence,<br />one hand at a time.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2.5 }}>
                {[
                  { label: "LinkedIn", url: "https://www.linkedin.com/company/swethareddy-innovations-private-limited/" },
                  { label: "Twitter/X", url: "https://x.com/NeuroGrip" },
                  { label: "Instagram", url: "https://www.instagram.com/neurogrip.1?igsh=bGxxYzZiNHMxMXZl" },
                ].map((s) => (
                  <Link key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" underline="none"
                    sx={{ fontSize: 12, color: "rgba(255,255,255,0.55)", "&:hover": { color: "#00C9A7" }, transition: "color 0.2s" }}>
                    {s.label}
                  </Link>
                ))}
              </Stack>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", mb: 2 }}>
                Quick Links
              </Typography>
              <Stack spacing={1.25}>
                {QUICK_LINKS.map((l) => (
                  <Box key={l} component="button" onClick={() => scrollTo(l)}
                    sx={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", fontSize: 13, cursor: "pointer", textAlign: "left", fontFamily: "'DM Sans', sans-serif", p: 0, "&:hover": { color: "#fff" }, transition: "color 0.2s" }}>
                    {l}
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Contact */}
            <Box>
              <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", mb: 2 }}>
                Contact
              </Typography>
              <Stack spacing={1.75}>
                <Box>
                  <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.45)", mb: 0.5 }}>WhatsApp</Typography>
                  <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>+91 XXXXX XXXXX</Typography>
                  <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.4)", mt: 0.25 }}>Responds within 4hrs, 9am–7pm IST</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.45)", mb: 0.5 }}>Email</Typography>
                  <Link href="mailto:mcneurogrip@gmail.com" underline="none"
                    sx={{ fontSize: 13, color: "rgba(255,255,255,0.75)", "&:hover": { color: "#00C9A7" }, transition: "color 0.2s" }}>
                    mcneurogrip@gmail.com
                  </Link>
                </Box>
              </Stack>
            </Box>

            {/* Company */}
            <Box>
              <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.35)", mb: 2 }}>
                Company
              </Typography>
              <Stack spacing={1}>
                <Typography sx={{ fontSize: 13, color: "rgba(255,255,255,0.65)", fontWeight: 600 }}>SwethaReddy Innovations Pvt. Ltd.</Typography>
                <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>Tirupati, Andhra Pradesh, India</Typography>
                <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>MSME Reg: [number]</Typography>
                <Box sx={{ display: "inline-flex", gap: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 2, px: 1.5, py: 0.5, mt: 0.5 }}>
                  <Typography sx={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>© 2025 · AICTE Licensed 🇮🇳</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </FadeInSection>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 2.5 }} />

        <FadeInSection delay={0.1} duration={0.6}>
          <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 1.5 }}>
            <Typography sx={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              © 2025 SwethaReddy Innovations Pvt. Ltd. All rights reserved.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {["Privacy Policy", "Terms of Use"].map((l) => (
                <Link key={l} href="#" underline="none"
                  sx={{ fontSize: 12, color: "rgba(255,255,255,0.3)", "&:hover": { color: "rgba(255,255,255,0.65)" }, transition: "color 0.2s" }}>
                  {l}
                </Link>
              ))}
            </Box>
          </Box>
        </FadeInSection>
      </Box>
    </Box>
  );
}