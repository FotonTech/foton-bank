import React from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  background: string;
}

const Button: React.FC<ButtonProps> = ({ children, background }) => (
  <StyledButton style={{ background: background }}>{children}</StyledButton>
);

export default Button;
