import { styled } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import PolylineIcon from "@mui/icons-material/Polyline";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

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
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "64px",
  alignItems: "center",
  maxWidth: "1000px",
  margin: "0 auto",
  position: "relative",
  zIndex: 1,

  "@media (min-width: 900px)": {
    gridTemplateColumns: "1fr 1fr",
  },
});

const TextColumn = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SectionLabel = styled("p")({
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(0,0,0,0.4)",
  marginBottom: "16px",
});

const Title = styled("h2")({
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(36px, 6vw, 48px)", // Ajuste responsivo do tamanho da fonte
  fontWeight: 800,
  letterSpacing: "-2px",
  lineHeight: 1.05,
  color: "rgb(0, 0, 0)",
  marginBottom: "24px",
  
  "& span": { 
    color: "rgba(0,0,0,0.3)",
  },
});

const Description = styled("p")({
  fontSize: "15px",
  fontWeight: 300,
  color: "rgba(0,0,0,0.65)",
  lineHeight: 1.7,
  marginBottom: "16px",
  
  "&:last-of-type": {
    marginBottom: 0,
  },
  
  "& strong": { 
    color: "#080c10", 
    fontWeight: 500, 
  },
});

const CardsGrid = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "12px",

  "@media (min-width: 600px)": {
    gridTemplateColumns: "1fr 1fr",
  },
});

const InfoCard = styled("div")({
  background: "rgba(0,0,0,0.06)",
  border: "1px solid rgba(0,0,0,0.1)",
  borderRadius: "12px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  transition: "all 0.2s ease",
  cursor: "default",

  "&:hover": {
    background: "rgba(0,0,0,0.1)",
    transform: "translateY(-3px)",
    borderColor: "rgba(0,0,0,0.2)",
  },
});

const CardIconBox = styled("div")({
  width: "36px",
  height: "36px",
  borderRadius: "8px",
  background: "rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#080c10",

  "& svg": {
    fontSize: "20px",
  }
});

const CardTitle = styled("div")({
  fontFamily: "'Syne', sans-serif",
  fontSize: "14px",
  fontWeight: 700,
  color: "#080c10",
  letterSpacing: "-0.3px",
});

const CardText = styled("div")({
  fontSize: "12px",
  fontWeight: 300,
  color: "rgba(0,0,0,0.55)",
  lineHeight: 1.5,
});

const About = () => {
  return (
    <Section id="sobre">
      <ContentWrapper>
        {/* ── Coluna de Texto ── */}
        <TextColumn>
          <SectionLabel>Conheça minha trajetória</SectionLabel>
          <Title>
            Sobre <span>mim</span>
          </Title>
          <Description>
            <strong>Estudante de Engenharia de Computação</strong> apaixonado por
            tecnologia, desenvolvimento de software e soluções escaláveis.
          </Description>
          <Description>
            Busco oportunidade de estágio em desenvolvimento Full Stack — APIs,
            arquitetura de sistemas e interfaces modernas em produtos de alto
            impacto.
          </Description>
        </TextColumn>

        {/* ── Coluna de Cards ── */}
        <CardsGrid>
          <InfoCard>
            <CardIconBox>
              <CodeIcon />
            </CardIconBox>
            <CardTitle>Desenvolvimento</CardTitle>
            <CardText>
              Aplicações web modernas e APIs REST robustas.
            </CardText>
          </InfoCard>

          <InfoCard>
            <CardIconBox>
              <TerminalIcon />
            </CardIconBox>
            <CardTitle>Sistemas</CardTitle>
            <CardText>
              Sistemas embarcados e prototipação de hardware.
            </CardText>
          </InfoCard>

          <InfoCard>
            <CardIconBox>
              <PolylineIcon />
            </CardIconBox>
            <CardTitle>Blockchain</CardTitle>
            <CardText>
              Experimentos com aplicações descentralizadas.
            </CardText>
          </InfoCard>

          <InfoCard>
            <CardIconBox>
              <IntegrationInstructionsIcon />
            </CardIconBox>
            <CardTitle>Integração</CardTitle>
            <CardText>
              APIs e arquitetura de microsserviços distribuídos.
            </CardText>
          </InfoCard>
        </CardsGrid>
      </ContentWrapper>
    </Section>
  );
};

export default About;