import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "ghost";
}

const BtnBase = styled("button")<{ variant?: string }>(({ variant }) => ({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "13px",
  fontWeight: 500,
  letterSpacing: "0.02em",
  padding: "10px 22px",
  borderRadius: "8px",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  transition: "all 0.2s ease",
  ...(variant === "primary"
    ? {
        background: "#00ffb4",
        color: "#080c10",
        border: "none",
        "&:hover": { background: "#1dffc0", transform: "translateY(-1px)" },
        "&:active": { transform: "translateY(0)" },
      }
    : {
        background: "transparent",
        color: "rgb(255, 255, 255)",
        border: "1px solid rgb(255, 255, 255)",
        "&:hover": {
          borderColor: "rgb(255, 255, 255)",
          color: "#fff",
        },
      }),
}));

const StyledButton: React.FC<Props> = ({ children, onClick, variant = "ghost" }) => (
  <BtnBase variant={variant} onClick={onClick}>
    {children}
  </BtnBase>
);

export default StyledButton;