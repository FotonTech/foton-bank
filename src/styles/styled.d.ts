import "styled-components";
import { Breakpoints } from "./breakpoints";

declare module "styled-components" {
  export interface DefaultTheme {
    title: "dark";
    breakpoints: Breakpoints;
    text: {
      color: {
        white: string;
        yellow: string;
        black: string;
        brown: string;
        darkBrown: string;
        grey: string;
        darkGrey: string;
        gradient: string;
      },
      background: {
      gray: string
      }
    }
  }
};
    
