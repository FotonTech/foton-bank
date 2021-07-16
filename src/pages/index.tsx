import React from "react";
import { useLocation } from "@reach/router";

import { locales } from "src/constants";
import First from "src/components/Sections/HomeHero";
import GlobalStyle from "src/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import dark from "../styles/dark";
import messages from "src/i18n/messages";
import Second from "src/components/Sections/Discover";

import HowItWorks from "../components/Sections/HowItWorks";
import GetInTouch from "../components/Sections/GetInTouch";

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
      <Layout>
        <First
          title={firstSection.title}
          description={firstSection.description}
          buttonText={firstSection.buttonText}
        />
        <Second
          title={secondSection.title}
          description={secondSection.description}
          features={secondSection.features}
          cards={secondSection.cards}
        />
        <HowItWorks {...thirdSection} />
        <GetInTouch {...getInTouch} />
      </Layout>
    </ThemeProvider>
  );
};
export default IndexPage;
