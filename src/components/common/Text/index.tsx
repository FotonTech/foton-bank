import React from "react";
import { StyledText } from "./styles";

// TODO: maybe a typography component is a good idea?
export interface TextProps {
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "xl" | "md" | "sm";
}

const Text: React.FC<TextProps> = ({ children, className }) => (
  <StyledText className={className}>{children}</StyledText>
);

export default Text;
