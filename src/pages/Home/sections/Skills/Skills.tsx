import { styled } from "@mui/material";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiMysql, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiPython, SiGo, SiReact, SiDocker, SiFigma } from "react-icons/si";

const Section = styled("section")({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "120px 40px",
  scrollMarginTop: "56px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
});

const SectionLabel = styled("p")({
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
  marginBottom: "16px",
  textAlign: "center",
});

const Title = styled("h2")({
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(32px, 5vw, 52px)",
  fontWeight: 800,
  color: "#fff",
  letterSpacing: "-2px",
  textAlign: "center",
  marginBottom: "12px",
  "& span": { color: "#00ffb4" },
});

const Subtitle = styled("p")({
  fontSize: "15px",
  fontWeight: 300,
  color: "rgba(255,255,255,0.4)",
  textAlign: "center",
  marginBottom: "48px",
  maxWidth: "460px",
  lineHeight: 1.6,
});

const Grid = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
  maxWidth: "600px",
});

const Pill = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "9px 16px",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: "13px",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  color: "rgba(255,255,255,0.7)",
  cursor: "default",
  transition: "all 0.2s ease",
  "& svg": { fontSize: "15px" },
  "&:hover": {
    background: "rgba(255,255,255,0.08)",
    borderColor: "rgba(255,255,255,0.2)",
    color: "#fff",
    transform: "translateY(-3px)",
  },
});

const skills = [
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Python (FastAPI)", icon: <SiPython color="#ffb515" /> },
  { name: "Go", icon: <SiGo color="#00b0c7" /> },
  { name: "Node.js", icon: <FaNodeJs color="#4caf50" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "MySQL", icon: <DiMysql color="#4479A1" /> },
  { name: "PostgreSQL", icon: <DiPostgresql color="#336791" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
];

const Skills = () => (
  <Section id="habilidades">
    <SectionLabel>Tecnologias</SectionLabel>
    <Title>
      Stack <span>técnico</span>
    </Title>
    <Subtitle>
      Ferramentas e linguagens que uso no dia a dia para construir produtos
    </Subtitle>
    <Grid>
      {skills.map((s) => (
        <Pill key={s.name}>
          {s.icon}
          {s.name}
        </Pill>
      ))}
    </Grid>
  </Section>
);

export default Skills;