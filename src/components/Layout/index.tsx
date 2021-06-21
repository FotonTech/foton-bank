import React from "react";
import Footer from "../Footer";
import Header from "../Sections/First";

import { Container } from "./styles";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
