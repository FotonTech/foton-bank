import React from "react";
import Footer from "../Footer";
import First from "../Sections/First";

import { Container } from "./styles";

const Layout: React.FC = ({ children }) => (
  <>
    <Container>{children}</Container>
    <Footer />
  </>
);

export default Layout;
