// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00ffb4" },
    secondary: { main: "#5282ff" },
    background: {
      default: "#080c10",
      paper: "rgba(255,255,255,0.03)",
    },
    text: {
      primary: "#e8eaf0",
      secondary: "rgba(255,255,255,0.45)",
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
  },
});

export default theme;