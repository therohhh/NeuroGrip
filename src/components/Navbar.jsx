import { useState } from "react";
import {
  AppBar, Toolbar, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText,
  useMediaQuery, useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NAV_LINKS } from "../constants/data";

export default function Navbar({ activeNav, scrollTo, scrolled }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNav = (link) => {
    scrollTo(link);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          borderBottom: scrolled ? "1px solid #E8ECEF" : "1px solid transparent",
          backdropFilter: "blur(8px)",
          transition: "all 0.3s",
          px: { xs: 2, md: "5vw" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            height: 68,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => handleNav("Home")}
            sx={{ display: "flex", alignItems: "center", gap: 1.2, cursor: "pointer" }}
          >
            <Box
              sx={{
                width: 36, height: 36, borderRadius: "10px",
                background: "linear-gradient(135deg, #1B3A6B, #185FA5)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 16 }}>N</span>
            </Box>
            <Box sx={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 20, color: "#0d1117" }}>
              Neuro<span style={{ color: "#185FA5" }}>Grip.</span>
            </Box>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2.5 }}>
              {NAV_LINKS.map((l) => (
                <Button
                  key={l}
                  onClick={() => handleNav(l)}
                  disableRipple
                  sx={{
                    color: activeNav === l ? "#185FA5" : "#0d1117",
                    fontWeight: 500,
                    fontSize: 14,
                    borderBottom: activeNav === l ? "2px solid #185FA5" : "2px solid transparent",
                    borderRadius: 0,
                    px: 0.5,
                    minWidth: 0,
                    "&:hover": { color: "#185FA5", borderBottomColor: "#185FA5", background: "transparent" },
                  }}
                >
                  {l}
                </Button>
              ))}
            </Box>
          )}

          {/* CTA + Hamburger */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {!isMobile && (
              <Button
                variant="contained"
                onClick={() => handleNav("Pre-order")}
                sx={{
                  background: "#0c0c0c",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  px: "20px",
                  py: "10px",
                  "&:hover": { background: "#00A88C" },
                  boxShadow: "0 2px 12px rgba(0,201,167,0.35)",
                }}
              >
                Apply for Early Access
              </Button>
            )}
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: "#0d1117" }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 260, pt: 2 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 1 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {NAV_LINKS.map((l) => (
            <ListItem key={l} disablePadding>
              <ListItemButton
                onClick={() => handleNav(l)}
                sx={{
                  color: activeNav === l ? "#185FA5" : "#0d1117",
                  fontWeight: activeNav === l ? 600 : 500,
                  px: 3, py: 1.5,
                }}
              >
                <ListItemText
                  primary={l}
                  primaryTypographyProps={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: activeNav === l ? 600 : 500,
                    fontSize: 16,
                    color: activeNav === l ? "#185FA5" : "#0d1117",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ mt: 2, px: 3 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleNav("Pre-order")}
              sx={{ background: "#00C9A7", color: "#fff", "&:hover": { background: "#00A88C" }, py: 1.25 }}
            >
              Apply for Early Access
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}