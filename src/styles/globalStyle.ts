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
    font-size: 1.6em;
    max-width: 100vw;
    overflow-x: hidden;
    margin: 0;
  }

  p{
    margin: 0;
  }
  
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
     transform: translatey(-15px);
      }
    100% {
      transform: translatey(0px);
    }
  }
`;

export default GlobalStyle;
