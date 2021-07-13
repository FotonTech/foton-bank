import React from "react";
import Footer from "../common/Footer";
import First from "../Sections/HomeHero";

import { Container } from "./styles";

const Layout: React.FC = ({ children }) => (
  <>
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
