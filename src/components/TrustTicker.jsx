import { Box, Typography } from "@mui/material";
import { TRUST_BADGES } from "../constants/data";

export default function TrustTicker() {
  // Duplicate for seamless loop
  const items = [...TRUST_BADGES, ...TRUST_BADGES];

  return (
    <Box
      component="section"
      sx={{
        background: "#F3F4F6",
        borderTop: "1px solid #E8ECEF",
        borderBottom: "1px solid #E8ECEF",
        py: 2,
        overflow: "hidden",
        "&:hover .ticker-track": { animationPlayState: "paused" },
      }}
    >
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          animation: ticker 20s linear infinite;
        }
      `}</style>
      <Box
        className="ticker-track"
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {items.map((badge, i) => (
          <Box
            key={i}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 4,
              borderRight: "1px solid #D1D5DB",
            }}
          >
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: 0.3,
              }}
            >
              {badge}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}