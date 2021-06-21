import React from "react";
import First from "src/components/Sections/First";
import GlobalStyle from "src/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import dark from "../styles/dark";

const IndexPage = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyle />
    <Layout>
      <First />
    </Layout>
  </ThemeProvider>
);

export default IndexPage;
