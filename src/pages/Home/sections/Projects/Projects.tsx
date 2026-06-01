import { useRef } from "react";
import { styled } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Project1 from "../../../../assets/images/project1.jpg";
import Project2 from "../../../../assets/images/project2.png";
import Project3 from "../../../../assets/images/project3.png";

// --- Styled Components baseados na identidade do site ---

const Section = styled("section")({
  fontFamily: "'DM Sans', sans-serif",
  background: "#00ffb4",
  padding: "72px 40px",
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden",

  minHeight: "100vh",
  display: "flex",
  margin: "0 auto", // Centraliza a seção caso esteja dentro de um container maior

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-120px",
    right: "-120px",
    width: "380px",
    height: "380px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.05)",
    pointerEvents: "none",
  },
  
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-80px",
    left: "-60px",
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.04)",
    pointerEvents: "none",
  },

  "@media (max-width: 900px)": {
    paddingTop: "100px",
    paddingBottom: "80px",
  }
});

const ContentWrapper = styled("div")({
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
  position: "relative",
  zIndex: 1,
});

const Header = styled("div")({
  textAlign: "center",
  marginBottom: "56px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SectionLabel = styled("p")({
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.65)",
  marginBottom: "16px",
  fontFamily: "'DM Sans', sans-serif",
});

const Title = styled("h2")({
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(36px, 6vw, 52px)",
  fontWeight: 800,
  color: "#000000",
  letterSpacing: "-2px",
  marginBottom: "16px",
  lineHeight: 1.1,
  "& span": { 
    color: "rgba(0,0,0,0.3)",
  },
});
 
const Subtitle = styled("p")({
  fontSize: "16px",
  fontWeight: 300,
  color: "rgba(0,0,0,0.65)",
  maxWidth: "460px",
  lineHeight: 1.6,
  fontFamily: "'DM Sans', sans-serif",
});

// --- Componentes do Slider e Cards ---
const SliderContainer = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const CardsWrapper = styled("div")({
  display: "flex",
  gap: "24px",
  overflowX: "auto",
  scrollBehavior: "smooth",
  padding: "20px 4px",
  scrollbarWidth: "none", // Oculta no Firefox

  "&::-webkit-scrollbar": {
    display: "none", // Oculta no Chrome/Safari
  },
});

const ProjectCard = styled("div")({
  flex: "0 0 auto",
  width: "360px",
  background: "rgba(0, 7, 4, 0.13)",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",

  "@media (max-width: 600px)": {
    width: "300px",
  },

  "&:hover": {
    background: "rgba(255,255,255,0.06)",
    borderColor: "rgba(255,255,255,0.2)",
    transform: "translateY(-6px)",
  },
});

const CardImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "12px",
  marginBottom: "20px",
});

const CardContent = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
});

const CardTitle = styled("h3")({
  fontFamily: "'Syne', sans-serif",
  fontSize: "20px",
  fontWeight: 700,
  color: "rgba(0,0,0,0.65)",
  marginBottom: "12px",
  letterSpacing: "-0.5px",
});

const CardText = styled("p")({
  fontSize: "14px",
  fontWeight: 300,
  color: "rgba(0,0,0,0.65)",
  lineHeight: 1.6,
  fontFamily: "'DM Sans', sans-serif",
  marginBottom: "24px",
});

const StyledButton = styled("a")({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 24px",
  background: "#30443e29",
  color: "rgba(0,0,0,0.65)",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
  borderRadius: "8px",
  transition: "all 0.2s ease",
  marginTop: "auto",
  alignSelf: "flex-start",

  "&:hover": {
    background: "#00cc90",
    transform: "translateY(-2px)",
  },
});

const NavButton = styled("button")({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  zIndex: 10,
  transition: "all 0.2s ease",

  "&:hover": {
    background: "#00ffb4",
    borderColor: "#00ffb4",
    color: "#080c10",
  },

  "& svg": {
    fontSize: "20px",
  },
});

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    // O operador '?.' (optional chaining) garante que só roda se a ref não for nula
    scrollRef.current?.scrollBy({ left: -384, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 384, behavior: "smooth" });
  };

  return (
    <Section id="projetos">
      <ContentWrapper>
        
        <Header>
          <SectionLabel>Portfólio</SectionLabel>
          <Title>
            Meus <span>Projetos</span>
          </Title>
          <Subtitle>
            Alguns dos projetos mais recentes que desenvolvi aplicando meus conhecimentos.
          </Subtitle>
        </Header>

        <SliderContainer>
          {/* Botão Voltar */}
          <NavButton onClick={scrollLeft} style={{ left: "-24px" }}>
            <ArrowBackIosNewIcon />
          </NavButton>

          {/* Container de Scroll */}
          <CardsWrapper ref={scrollRef}>
            
            {/* Projeto 1 */}
            <ProjectCard>
              <CardImage src={Project1} alt="Labelu" />
              <CardContent>
                <CardTitle>Labelu UX/UI</CardTitle>
                <CardText>
                  Labelu: UX/UI Design de um laboratório de estudos sobre luta
                  de classes da UEFS.
                </CardText>
                <StyledButton
                  href="https://ecompjr.github.io/pj-labelu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar Projeto
                </StyledButton>
              </CardContent>
            </ProjectCard>

            {/* Projeto 2 */}
            <ProjectCard>
              <CardImage src={Project2} alt="Acervo Camcimba" />
              <CardContent>
                <CardTitle>Acervo Camcimba de História</CardTitle>
                <CardText>
                  Plataforma para organização e visualização de acervos
                  históricos e culturais.
                </CardText>
                <StyledButton
                  href="https://geppouefs.wixsite.com/uefs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar Projeto
                </StyledButton>
              </CardContent>
            </ProjectCard>

            {/* Projeto 3 */}
            <ProjectCard>
              <CardImage src={Project3} alt="Fernanda Dayrell Advogada" />
              <CardContent>
                <CardTitle>Fernanda Dayrell Advogada</CardTitle>
                <CardText>
                  Site de apresentação e Design System desenvolvido para uma
                  advogada.
                </CardText>
                <StyledButton
                  href="https://kakafariaz.github.io/FernandaDayrellAdvogada/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Acessar Projeto
                </StyledButton>
              </CardContent>
            </ProjectCard>

          </CardsWrapper>

          {/* Botão Avançar */}
          <NavButton onClick={scrollRight} style={{ right: "-24px" }}>
            <ArrowForwardIosIcon />
          </NavButton>
        </SliderContainer>

      </ContentWrapper>
    </Section>
  );
};

export default Projects;