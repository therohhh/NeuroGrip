import { forwardRef, useState } from "react";
import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import { FaEnvelope, FaComments, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import FadeInSection from "./FadeInSection";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = forwardRef(function ContactSection({ id }, ref) {
  const [form, setForm] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, severity: "success", message: "" });

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
      .catch(() => setSnackbar({ open: true, severity: "error", message: "Something went wrong. Please try again." }))
      .finally(() => setLoading(false));
  };

  return (
    <Box id={id} ref={ref} component="section" sx={{ py: { xs: 4, md: 6 }, px: "5vw" }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>

        {/* Header */}
        <FadeInSection delay={0} duration={0.6}>
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1 }}>
              Contact
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 30 }, color: "#0d1117", mb: 1 }}>
              Get In Touch
            </Typography>
            <Box sx={{ width: 40, height: 3, background: "linear-gradient(90deg, #185FA5, #00C9A7)", borderRadius: 2, mt: 1.5 }} />
          </Box>
        </FadeInSection>

        {/* Side by side layout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          {/* LEFT — Contact Info */}
          <Box sx={{ flex: "0 0 auto", width: { xs: "100%", md: "300px" } }}>
            <FadeInSection delay={0.1} duration={0.6} direction="right">
              <Typography sx={{ fontSize: 14, color: "#4A5568", lineHeight: 1.6, mb: 3 }}>
                Whether you're a patient, clinician, investor, or collaborator — we'd love to connect
                and explore how NeuroGrip can make a difference.
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                {[
                  { icon: <FaEnvelope style={{ color: "#130d0c" }} />, label: "Email Us", value: "mcneurogrip@gmail.com", sub: null, highlight: true },
                  { icon: <FaComments style={{ color: "#040706" }} />, label: "WhatsApp", value: "+91 XXXXX XXXXX", sub: "Responds within 4hrs, 9am–7pm IST", highlight: false },
                  { icon: <FaMapMarkerAlt style={{ color: "#171413" }} />, label: "Location", value: "Andhra Pradesh, India", sub: null, highlight: false },
                ].map((item) => (
                  <Box key={item.label} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                    <Box
                      sx={{
                        width: 40, height: 40, borderRadius: 2,
                        background: "#F0F4FF",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ fontWeight: 600, fontSize: 14, color: "#0d1117", mb: 0.25 }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ color: item.highlight ? "#185FA5" : "#4A5568", fontSize: 13 }}>
                        {item.value}
                      </Typography>
                      {item.sub && (
                        <Typography sx={{ color: "#4A5568", fontSize: 12, mt: 0.25 }}>{item.sub}</Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>
            </FadeInSection>
          </Box>

          {/* RIGHT — Send a Message */}
          <Box sx={{ flex: "0 0 auto", width: { xs: "100%", md: "460px" } }}>
            <FadeInSection delay={0.2} duration={0.7} direction="center">
              <Box
                sx={{
                  background: "#F8FAFF",
                  borderRadius: 3,
                  p: { xs: 2.5, md: 3.5 },
                  border: "1px solid #E8ECEF",
                  height: "100%",
                }}
              >
                <Typography sx={{ fontFamily: "'Sora', sans-serif", fontSize: 17, fontWeight: 700, mb: 2.5, color: "#0d1117" }}>
                  Send a Message
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                  <Box sx={{ display: "flex", gap: 1.5 }}>
                    <TextField
                      fullWidth label="Name" name="from_name"
                      value={form.from_name} onChange={handleChange}
                      placeholder="Your name" size="small"
                    />
                    <TextField
                      fullWidth label="Email" name="from_email"
                      value={form.from_email} onChange={handleChange}
                      type="email" placeholder="you@example.com" size="small"
                    />
                  </Box>
                  <TextField
                    fullWidth label="Subject" name="subject"
                    value={form.subject} onChange={handleChange}
                    placeholder="How can we help?" size="small"
                  />
                  <TextField
                    fullWidth label="Message" name="message"
                    value={form.message} onChange={handleChange}
                    placeholder="Tell us more..." multiline rows={3} size="small"
                  />
                  <Button
                    variant="contained" fullWidth onClick={handleSubmit} disabled={loading}
                    sx={{ background: "#0d1117", "&:hover": { background: "#1B3A6B" }, py: 1.5, fontSize: 14 }}
                  >
                    {loading ? "Sending..." : "Send Message →"}
                  </Button>
                </Box>
              </Box>
            </FadeInSection>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open} autoHideDuration={4000}
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