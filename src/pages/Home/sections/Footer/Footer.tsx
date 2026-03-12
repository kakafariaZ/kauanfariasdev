import { styled } from "@mui/system";
import { Typography, Container } from "@mui/material";

const StyledFooter = styled("footer")({
  display: "flex",
  flexDirection: "column", 
  alignItems: "center",
  padding: "2rem 0",
  backgroundColor: "#003030", 
  textAlign: "center",
  marginTop: "auto", 
  borderTop: "1px solid #001930",
  a: {
    color: "#4FC3F7",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    }
  }
});

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Typography variant="body1" color="primary.main">
          &copy; {new Date().getFullYear()} Kauan Farias. Todos os direitos reservados.
        </Typography>
        <Typography variant="caption" display="block" color="primary.main" sx={{ mt: 1, opacity: 0.7 }}>
          Desenvolvido com React & MUI | Hospedado no GitHub
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;