import { useState, useEffect } from "react";
import { styled } from "@mui/material";

const NavRoot = styled("nav")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1100,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 40px",
  height: "56px",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
  // Reduzido de 0.9 para 0.6 para dar mais transparência
  background: "rgba(8,12,16,0.6)", 
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
});

const Logo = styled("span")({
  fontFamily: "'Syne', sans-serif",
  fontWeight: 800,
  fontSize: "18px",
  letterSpacing: "-0.5px",
  color: "#fff",
  cursor: "pointer",
  "& span": { color: "#00ffb4" },
});

const Links = styled("div")({
  display: "flex",
  gap: "4px",
});

const NavLink = styled("button")<{ active?: boolean }>(({ active }) => ({
  background: "transparent",
  border: "none",
  fontSize: "13px",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 400,
  color: active ? "#00ffb4" : "rgba(255,255,255,0.5)",
  padding: "6px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  letterSpacing: "0.02em",
  transition: "all 0.2s",
  "&:hover": {
    color: active ? "#00ffb4" : "#fff",
    background: "rgba(255,255,255,0.06)",
  },
}));

const sections = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "projetos", label: "Projetos" },
];

const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <NavRoot>
      <Logo onClick={() => scrollTo("home")}>
        KF<span>.</span>
      </Logo>
      <Links>
        {sections.map(({ id, label }) => (
          <NavLink key={id} active={active === id} onClick={() => scrollTo(id)}>
            {label}
          </NavLink>
        ))}
      </Links>
    </NavRoot>
  );
};

export default NavBar;