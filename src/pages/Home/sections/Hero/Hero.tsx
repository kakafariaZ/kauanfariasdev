/* eslint-disable react-hooks/static-components */
import { Container, styled } from "@mui/material";
import { Grid, Typography, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden", 

    [theme.breakpoints.up("xs")]: {
      paddingTop: "100px",
    },

    [theme.breakpoints.up("md")]: {
      paddingTop: "0",
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary}`,
  }));

  return (
    <>
      <StyledHero id="home">
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <AnimatedBackground />
        </Box>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Box position="relative">
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} alt="Kauan Farias" />
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                color="primary"
                variant="h1"
                textAlign="center"
                pb={2}
              >
                Kauan Farias
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Desenvolvedor FullStack
              </Typography>
              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
                pt={3}
              >
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <a href="/kauanfariasdev/kauan_farias_cv_2026.pdf" download>
                    <StyledButton onClick={() => console.log("curriculo baixado")}>
                      <DownloadIcon />
                      <Typography>Currículo</Typography>
                    </StyledButton>
                  </a>
                </Grid>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  display="flex"
                  justifyContent="center"
                >
                  <a
                    href="https://linkedin.com/in/kauanfarias01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledButton onClick={() => console.log("Linkedin clicado")}>
                      <LinkedInIcon />
                      <Typography>Linkedin</Typography>
                    </StyledButton>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
