import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#185FA5", light: "#B5D4F4", dark: "#1B3A6B" },
    secondary: { main: "#00C9A7" },
    background: { default: "#fff", paper: "#F8FAFF" },
    text: { primary: "#0d1117", secondary: "#4A5568" },
    error: { main: "#D85A30" },
  },
  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    h1: { fontFamily: "'Sora', sans-serif", fontWeight: 800 },
    h2: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Sora', sans-serif", fontWeight: 700 },
    h5: { fontFamily: "'Sora', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Sora', sans-serif", fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: 15,
          fontFamily: "'DM Sans', sans-serif",
          borderRadius: 8,
          padding: "10px 26px",
        },
        containedPrimary: {
          background: "#0d1117",
          "&:hover": { background: "#1B3A6B" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            fontFamily: "'DM Sans', sans-serif",
            "& fieldset": { borderColor: "#E8ECEF", borderWidth: 1.5 },
            "&:hover fieldset": { borderColor: "#185FA5" },
            "&.Mui-focused fieldset": { borderColor: "#185FA5" },
          },
          "& .MuiInputLabel-root": {
            fontFamily: "'DM Sans', sans-serif",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E8ECEF",
          boxShadow: "none",
          borderRadius: 16,
        },
      },
    },
  },
});

export default theme;