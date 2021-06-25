import { DefaultTheme } from "styled-components";
import { breakpoints } from "./breakpoints";

const dark: DefaultTheme = {
  title: "dark",
  breakpoints,
  text: {
    color: {
      white: "#FFFFFF",
      yellow: "#FEE147",
      gradient: "linear-gradient(90deg, #F1E369 -0.36%, #FFA944 100%)",
      brown: "#453C3C",
      darkBrown: "#1A1A1A",
      grey: "#656566",
      darkGrey: "#454545",
      black: "#000000",
    },
  },
  background: {
    gray: "#EEEEEE"
  }
};

export default dark;
