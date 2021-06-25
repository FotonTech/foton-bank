export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export type Breakpoints = typeof breakpoints;

export type BreakpointsList = keyof typeof breakpoints;
