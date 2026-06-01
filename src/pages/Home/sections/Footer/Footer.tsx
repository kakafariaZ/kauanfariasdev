import { styled } from "@mui/material";

const FooterRoot = styled("footer")({
  padding: "24px 40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid rgba(255,255,255,0.06)",
  flexWrap: "wrap",
  gap: "12px",
});

const Copy = styled("p")({
  fontSize: "12px",
  color: "rgba(255,255,255,0.25)",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
});

const FooterLinks = styled("div")({
  display: "flex",
  gap: "20px",
});

const FooterLink = styled("a")({
  fontSize: "12px",
  color: "rgba(255,255,255,0.35)",
  textDecoration: "none",
  fontFamily: "'DM Sans', sans-serif",
  transition: "color 0.2s",
  "&:hover": { color: "#00ffb4" },
});

const Footer = () => (
  <FooterRoot>
    <Copy>© {new Date().getFullYear()} Kauan Farias. Todos os direitos reservados.</Copy>
    <FooterLinks>
      <FooterLink href="https://github.com/kakafariaZ" target="_blank" rel="noopener">GitHub</FooterLink>
      <FooterLink href="https://www.linkedin.com/in/kauanfarias01/" target="_blank" rel="noopener">LinkedIn</FooterLink>
      <FooterLink href="mailto:arrudakauanfarias@email.com">Contato</FooterLink>
    </FooterLinks>
  </FooterRoot>
);

export default Footer;