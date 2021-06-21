import React from "react";

import { Container, Column, Row } from "./styles";

const Footer: React.FC = () => (
  <Container>
    <Column>
      <Row> © 2021 FotonBank. All rights reserved</Row>
      <Row>Rua Doutor Fernandes Coelho, n 85, Pinheiros, São Paulo - SP. </Row>
      <Row>
        FotonBank Online Tech Serviços de Tecnologia Ltda. CNPJ:
        14.530.403/0001-43
      </Row>
    </Column>
  </Container>
);

export default Footer;
