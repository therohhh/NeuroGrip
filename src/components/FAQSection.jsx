import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FAQ_ITEMS } from "../constants/data";
import FadeInSection from "./FadeInSection";

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <FadeInSection delay={index * 0.07} duration={0.55}>
      <Box
        sx={{
          border: "1.5px solid",
          borderColor: isOpen ? "#185FA5" : "#E8ECEF",
          borderRadius: 3,
          overflow: "hidden",
          transition: "border-color 0.2s",
          background: "#fff",
        }}
      >
        <Box
          onClick={onToggle}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: { xs: 2, md: 3 },
            py: 1.5,
            cursor: "pointer",
            background: isOpen ? "#F0F4FF" : "#fff",
            transition: "background 0.2s",
            "&:hover": { background: "#F8FAFF" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: { xs: 13, md: 14 },
              color: isOpen ? "#185FA5" : "#0d1117",
              pr: 3,
              lineHeight: 1.4,
            }}
          >
            {item.q}
          </Typography>
          <Box
            sx={{
              width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
              background: isOpen ? "#185FA5" : "#F0F4FF",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            <Typography
              sx={{
                color: isOpen ? "#fff" : "#185FA5",
                fontSize: 16, lineHeight: 1,
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
                fontWeight: 300,
              }}
            >
              +
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            maxHeight: isOpen ? "300px" : 0,
            overflow: "hidden",
            transition: "max-height 0.35s ease",
          }}
        >
          <Box sx={{ px: { xs: 2, md: 3 }, py: 2, borderTop: "1px solid #E8ECEF" }}>
            <Typography sx={{ fontSize: 13, color: "#4A5568", lineHeight: 1.6 }}>
              {item.a}
            </Typography>
          </Box>
        </Box>
      </Box>
    </FadeInSection>
  );
}

export default function FAQSection({ id }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <Box
      id={id}
      component="section"
      sx={{ py: { xs: 4, md: 6 }, px: "5vw", background: "#F8FAFF" }}
    >
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_ITEMS.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />

      <Box sx={{ maxWidth: 820, mx: "auto" }}>
        <FadeInSection delay={0} duration={0.6}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              sx={{ fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#185FA5", mb: 1.5 }}
            >
              FAQ
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: { xs: 20, md: 28 }, color: "#0d1117", mb: 1 }}
            >
              Frequently Asked Questions
            </Typography>
            <Box sx={{ width: 36, height: 3, background: "linear-gradient(90deg, #185FA5, #00C9A7)", borderRadius: 2, my: 1.5, mx: "auto" }} />
          </Box>
        </FadeInSection>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}