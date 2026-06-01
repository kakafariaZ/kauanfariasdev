import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Home/sections/Footer/Footer";

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ background: "#080c10", minHeight: "100vh" }}>
      <NavBar />
      <Home />
      <Footer />
    </Box>
  </ThemeProvider>
);

export default App;