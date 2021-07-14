import React from "react";
import Footer from "../common/Footer";
import { Container } from "./styles";
import { Helmet } from "react-helmet";

import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/manrope/800.css";

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Foton Bank • International transfers for individuals and companies of
        all sizes.
      </title>
    </Helmet>
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
