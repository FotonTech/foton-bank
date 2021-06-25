import React, { useEffect } from "react";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";

import { locales } from "src/constants";
import First from "src/components/Sections/First";
import GlobalStyle from "src/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import dark from "../styles/dark";
import messages from "src/i18n/messages";

import HowItWorks from "../components/Sections/HowItWorks";
import GetInTouch from "../components/Sections/GetInTouch";

const IndexPage = () => {
  const location = useLocation();
  const {
    home: { firstSection, thirdSection, getInTouch },
  } = navigator.language === locales.pt ? messages.pt : messages.en;
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <First
          title={firstSection.title}
          description={firstSection.description}
          buttonText={firstSection.buttonText}
        />
        <HowItWorks {...thirdSection} />
        <GetInTouch {...getInTouch} />
      </Layout>
    </ThemeProvider>
  );
};
export default IndexPage;
