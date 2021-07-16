import React from "react";
import { useLocation } from "@reach/router";

import { locales } from "src/constants";
import GlobalStyle from "src/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Simulator from 'src/components/Sections/Simulator';
import dark from "../styles/dark";
import messages from "src/i18n/messages";

const IndexPage = () => {
  const location = useLocation();
  var BEACON_SUPPORTED = typeof navigator === "object";
  const {
    home: { firstSection, secondSection, thirdSection, getInTouch },
  } =
    BEACON_SUPPORTED && navigator.language === locales.pt
      ? messages.pt
      : messages.en;
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Simulator />
    </ThemeProvider>
  );
};
export default IndexPage;
