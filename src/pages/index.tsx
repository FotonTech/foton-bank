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
import Second from "src/components/Sections/Second";

const IndexPage = () => {
  const location = useLocation();
  const i18n = navigator.language === locales.pt ? messages.pt : messages.en;

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <First
          title={i18n.home.firstSection.title}
          description={i18n.home.firstSection.description}
          buttonText={i18n.home.firstSection.buttonText}
        />
        <Second
          title={i18n.home.secondSection.title}
          description={i18n.home.secondSection.description}
          features={i18n.home.secondSection.features}
          cards={i18n.home.secondSection.cards}
        />
      </Layout>
    </ThemeProvider>
  );
};
export default IndexPage;
