import { Container, styled, keyframes } from "@mui/material";
import { Grid, Box } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import StyledButton from "../../../../components/StyledButton/StyledButton";

// --- Animações ---
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 5; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 5; transform: scale(1); }
`;

// Pulso suave de brilho (opcional)
const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0px rgba(0, 255, 180, 0.00); }
  50%      { box-shadow: 0 0 60px 15px rgba(0, 255, 180, 0.03); }
`;

// --- Styled Components baseados no padrão da seção Skills ---
const Section = styled("section")({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: "120px 40px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  
  "@media (max-width: 900px)": {
    paddingTop: "100px",
    paddingBottom: "80px",
  }
});

const SectionLabel = styled("p")({
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgb(255, 255, 255)",
  marginBottom: "16px",
  animation: `${fadeUp} 0.7s 0.2s cubic-bezier(0.22, 1, 0.36, 1) both`,
});

const Title = styled("h1")({
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(48px, 8vw, 72px)",
  fontWeight: 800,
  color: "#fff",
  letterSpacing: "-2px",
  lineHeight: 1.05,
  marginBottom: "24px",
  animation: `${fadeUp} 0.8s 0.35s cubic-bezier(0.22, 1, 0.36, 1) both`,
  "& span": { color: "#00ffb4" },
});

const Subtitle = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  color: "rgb(255, 255, 255)",
  marginBottom: "48px",
  maxWidth: "420px",
  lineHeight: 1.6,
  animation: `${fadeUp} 0.8s 0.55s cubic-bezier(0.22, 1, 0.36, 1) both`,
});

// --- Componentes visuais específicos do Hero ---
const AvatarWrapper = styled(Box)({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // Apenas a animação de entrada (surgimento) é mantida aqui
  animation: `${fadeIn} 0.9s cubic-bezier(0.22, 1, 0.36, 1) both`,
});

const StyledImg = styled("img")({
  width: "72%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.04)",
  border: `1px solid rgba(255,255,255,0.08)`,
  animation: `${glowPulse} 4s ease-in-out infinite`, // Remova esta linha se não quiser nenhum movimento
  display: "block",

  "@media (max-width: 900px)": {
    width: "55%",
  },
});

const Hero = () => {
  return (
    <Section id="home">
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <AnimatedBackground />
        {/* Máscara escura para melhorar o contraste do texto */}
        <Box 
          sx={{ 
            position: "absolute", 
            inset: 0, 
            backgroundColor: "rgba(0, 0, 0, 0.2)" // Mude de 0.6 para 0.8 se quiser ainda mais escuro
          }} 
        />
      </Box>

      {/* Decorative blurred orb */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "-8%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "rgba(0, 255, 180, 0.03)", 
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          
          {/* ── Avatar column ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <AvatarWrapper>
              <StyledImg src={Avatar} alt="Kauan Farias" />
            </AvatarWrapper>
          </Grid>

          {/* ── Content column ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <SectionLabel>
                Desenvolvedor FullStack
              </SectionLabel>

              <Title>
                Kauan
                <br />
                <span>Farias</span>
              </Title>

              <Subtitle>
                Criando experiências digitais modernas onde a estética encontra a 
                funcionalidade. Vamos construir algo incrível juntos!
              </Subtitle>

              {/* CTA buttons */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                  animation: `${fadeUp} 0.8s 0.7s cubic-bezier(0.22, 1, 0.36, 1) both`,
                }}
              >
                <a
                  href="kauan_farias_cv_2026.pdf"
                  download="Kauan_Farias_CV.pdf"
                  style={{ textDecoration: "none" }}
                >
                  <StyledButton>
                    <DownloadIcon fontSize="small" />
                    <span>Currículo</span>
                  </StyledButton>
                </a>

                <a
                  href="https://linkedin.com/in/kauanfarias01"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <StyledButton>
                    <LinkedInIcon fontSize="small" />
                    <span>LinkedIn</span>
                  </StyledButton>
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Hero;