import Project1 from "../../../../assets/images/project1.jpg";
import Project2 from "../../../../assets/images/project2.png";
import Project3 from "../../../../assets/images/project3.png";

import { useRef } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
  styled,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

const StyledProjects = styled("section")(() => ({
  background: `linear-gradient(180deg, #00a2ff 0%, #00fff2 100%)`,
  minHeight: "100vh",
  paddingTop: "160px",
  paddingBottom: "160px",
}));

const CardsContainer = styled(Box)(() => ({
  display: "flex",
  gap: "40px",
  overflowX: "auto",
  overflowY: "hidden",
  scrollBehavior: "smooth",
  padding: "50px 40px",
  scrollbarWidth: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const StyledCard = styled(Card)(() => ({
  flex: "0 0 auto",
  width: "420px",
  background: "#ffffff",
  color: "white",
  borderRadius: "18px",
  transition: "0.3s",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",

  "&:hover": {
    transform: "translateY(-12px)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  minWidth: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "#00a2be",
  color: "white",
  zIndex: 10,

  "&:hover": {
    background: theme.palette.primary.dark,
  },
}));

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  return (
    <StyledProjects id="projetos">
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="primary.main"
          textAlign="center"
          sx={{ fontWeight: 700 }}
          gutterBottom
        >
          Projetos
        </Typography>

        <Typography
          variant="h4"
          color="primary.main"
          textAlign="center"
          sx={{ opacity: 0.9 }}
        >
          Alguns projetos que desenvolvi
        </Typography>

        <Box position="relative" mt={6}>
          <NavButton onClick={scrollRight} sx={{ right: "-20px" }}>
            <ArrowForwardIosIcon />
          </NavButton>

          <NavButton onClick={scrollLeft} sx={{ left: "-20px" }}>
            <ArrowBackIosNewIcon />
          </NavButton>

          <CardsContainer ref={scrollRef}>
            {/* Projeto 1 */}
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image={Project1}
                alt="Labelu"
              />

              <CardContent>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  Labelu UX/UI
                </Typography>

                <Typography
                  variant="body2"
                  color="primary.contrastText"
                  sx={{ opacity: 1 }}
                >
                Labelu: UX/UI Design  de ume labotório de estudos sobre luta de classes da UEFS.
                </Typography>

                <Box mt={2}>
                  <Button
                    variant="contained"
                    size="small"
                    component="a"
                    href="https://ecompjr.github.io/pj-labelu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>

            {/* Projeto 2 */}
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image={Project2}
                alt="Acervo Camcimba"
              />

              <CardContent>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  Acervo Camcimba de História
                </Typography>

                <Typography
                  variant="body2"
                  color="primary.contrastText"
                  sx={{ opacity: 1 }}
                >
                  Plataforma para organização e visualização de acervos
                  históricos e culturais.
                </Typography>

                <Box mt={2}>
                  <Button
                    variant="contained"
                    size="small"
                    component="a"
                    href="https://geppouefs.wixsite.com/uefs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>

            {/* Projeto 3 */}
            <StyledCard>
              <CardMedia
                component="img"
                height="200"
                image={Project3}
                alt="Programa de Monitoria"
              />

              <CardContent>
                <Typography
                  variant="h5"
                  color="primary.contrastText"
                  gutterBottom
                >
                  Fernanda Dayrell Advogada
                </Typography>

                <Typography
                  variant="body2"
                  color="primary.contrastText"
                  sx={{ opacity: 1 }}
                >
                  Site de apresentação de um Design System de uma advogada.
                </Typography>

                <Box mt={2}>
                  <Button
                    variant="contained"
                    size="small"
                    component="a"
                    href="https://kakafariaz.github.io/FernandaDayrellAdvogada/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </Button>
                </Box>
              </CardContent>
            </StyledCard>
          </CardsContainer>
        </Box>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
