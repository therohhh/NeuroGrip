import { forwardRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { JOBS } from "../constants/data";

const Divider = () => (
  <Box
    sx={{
      width: 48, height: 4,
      background: "linear-gradient(90deg, #185FA5, #00C9A7)",
      borderRadius: 2, my: 2,
    }}
  />
);

const CareerSection = forwardRef(function CareerSection({ scrollTo }, ref) {
  return (
    <Box
      ref={ref}
      component="section"
      sx={{ py: { xs: 8, md: 12 }, px: "5vw" }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography
          sx={{ fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1.5 }}
        >
          Career
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 42 }, color: "#0d1117", mb: 1 }}>
          Join Our Mission
        </Typography>
        <Divider />
        <Typography sx={{ fontSize: 16, color: "#4A5568", mb: 5, maxWidth: 540, lineHeight: 1.7 }}>
          We're a small team of innovators on a mission to change rehabilitation. If you're passionate
          about robotics, medicine, or technology, we'd love to hear from you.
        </Typography>

        {JOBS.length === 0 ? (
          <Box
            sx={{
              background: "#F8FAFF",
              border: "1.5px dashed #B5D4F4",
              borderRadius: 4,
              p: { xs: 5, md: 8 },
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontSize: 48, mb: 2 }}>📋</Typography>
            <Typography
              sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#0d1117", mb: 1.25 }}
            >
              No Openings Right Now
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#4A5568", mb: 3 }}>
              We're not actively hiring at the moment, but we're always open to connecting with talented people.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => scrollTo("Contact")}
              sx={{
                color: "#0d1117", borderColor: "#0d1117",
                "&:hover": { background: "#0d1117", color: "#fff" },
              }}
            >
              Express Interest
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {JOBS.map((j) => (
              <Box
                key={j.title}
                sx={{ background: "#fff", border: "1px solid #E8ECEF", borderRadius: 3, p: 3 }}
              >
                <Typography sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, color: "#0d1117" }}>
                  {j.title}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default CareerSection;