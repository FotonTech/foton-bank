import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`
  * {
    ${Fonts}
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 1.6em
  }
`;

export default GlobalStyle;
