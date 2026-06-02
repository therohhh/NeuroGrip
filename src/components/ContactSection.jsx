import { forwardRef, useState } from "react";
import {
  Box, Typography, Grid, TextField, Button, Snackbar, Alert,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import FadeInSection from "./FadeInSection";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = forwardRef(function ContactSection(_, ref) {
  const [form, setForm] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: "success", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.from_name || !form.from_email || !form.message) {
      setSnackbar({ open: true, severity: "warning", message: "Please fill in all required fields." });
      return;
    }
    setLoading(true);
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setSnackbar({ open: true, severity: "success", message: "Message sent! We'll get back to you soon." });
        setForm({ from_name: "", from_email: "", subject: "", message: "" });
      })
      .catch(() => {
        setSnackbar({ open: true, severity: "error", message: "Something went wrong. Please try again." });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ py: { xs: 8, md: 12 }, px: "5vw" }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">

          {/* Left info */}
          <Grid item xs={12} md={5}>
            <FadeInSection delay={0} duration={0.6} direction="right">
              <Typography
                sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1.5 }}
              >
                Contact
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 38 }, color: "#0d1117", mb: 1 }}>
                Get In Touch
              </Typography>
              <Box
                sx={{
                  width: 48, height: 4,
                  background: "linear-gradient(90deg, #185FA5, #00C9A7)",
                  borderRadius: 2, my: 2, mb: 3,
                }}
              />
              <Typography sx={{ fontSize: 16, color: "#4A5568", lineHeight: 1.7, mb: 4 }}>
                Whether you're a patient, clinician, investor, or collaborator — we'd love to connect
                and explore how Neuro Grip can make a difference.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {/* Email */}
                <Box sx={{ display: "flex", gap: 1.75, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: 3,
                      background: "#F0F4FF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20, flexShrink: 0,
                    }}
                  >
                    📧
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: "#0d1117", mb: 0.25 }}>Email Us</Typography>
                    <Typography sx={{ color: "#185FA5", fontSize: 15 }}>mcneurogrip@gmail.com</Typography>
                  </Box>
                </Box>

                {/* Location */}
                <Box sx={{ display: "flex", gap: 1.75, alignItems: "flex-start" }}>
                  <Box
                    sx={{
                      width: 44, height: 44, borderRadius: 3,
                      background: "#F0F4FF",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 20, flexShrink: 0,
                    }}
                  >
                    📍
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 600, color: "#0d1117", mb: 0.25 }}>Location</Typography>
                    <Typography sx={{ color: "#4A5568", fontSize: 15 }}>Andhra Pradesh, India</Typography>
                  </Box>
                </Box>
              </Box>
            </FadeInSection>
          </Grid>

          {/* Right form */}
          <Grid item xs={12} md={7}>
            <FadeInSection delay={0.15} duration={0.7} direction="left">
              <Box
                sx={{
                  background: "#F8FAFF",
                  borderRadius: 4,
                  p: { xs: 3, md: 5 },
                  border: "1px solid #E8ECEF",
                }}
              >
                <Typography
                  sx={{ fontFamily: "'Sora', sans-serif", fontSize: 20, fontWeight: 700, mb: 3, color: "#0d1117" }}
                >
                  Send a Message
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Grid container spacing={1.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Name" name="from_name" value={form.from_name} onChange={handleChange} placeholder="Your name" size="small" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Email" name="from_email" value={form.from_email} onChange={handleChange} type="email" placeholder="you@example.com" size="small" />
                    </Grid>
                  </Grid>
                  <TextField fullWidth label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" size="small" />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    multiline
                    rows={4}
                    size="small"
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={loading}
                    sx={{
                      background: "#0d1117",
                      "&:hover": { background: "#1B3A6B" },
                      py: 1.75, fontSize: 15,
                    }}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </Button>
                </Box>
              </Box>
            </FadeInSection>
          </Grid>

        </Grid>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} variant="filled" onClose={() => setSnackbar((s) => ({ ...s, open: false }))}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
});

export default ContactSection;