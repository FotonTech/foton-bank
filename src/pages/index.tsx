import * as React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import dark from "../styles/dark";

const IndexPage = () => (
  <ThemeProvider theme={dark}>
    <Layout></Layout>;
  </ThemeProvider>
);

export default IndexPage;
