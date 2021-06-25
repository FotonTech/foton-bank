import { ReactElement } from "react";
import { useMediaQuery } from "react-responsive";
import { breakpoints, BreakpointsList } from "../../styles/breakpoints";

interface MediaProps {
  children: ReactElement | null;
  breakpoint: BreakpointsList;
}

export default function Media({ children, breakpoint }: MediaProps) {
  const isBreakpoint = useMediaQuery({ minWidth: breakpoints[breakpoint] });
  if (isBreakpoint) return children;
  return null;
}
