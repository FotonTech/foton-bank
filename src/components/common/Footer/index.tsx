import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { company, NavCol, product, support } from "./navCols";
import {
  Container,
  Grid,
  GridItem,
  FotonInfo,
  Small,
  GridTitle,
  A,
} from "./styles";

const NavLink = ({ to, name }: NavCol) => (
  <Link to={to} style={{ textDecoration: 'none' }}>
    <A>{name}</A>
  </Link>
);

const Footer: React.FC = () => (
  <Container>
    <Grid>
      <GridItem>
        <FotonInfo>
          <p style={{ marginBottom: 40 }}>
            © 2021 <strong>FotonTech</strong>. All rights reserved
          </p>
          <div style={{ marginBottom: 40 }}>
            <StaticImage
              src="../../../../static/footer-logo.svg"
              alt="Foton logo"
              height={45}
            />
          </div>
          <p style={{ marginBottom: 20 }}>
            Rua Doutor Fernandes Coelho, n 85, Pinheiros, São Paulo - SP.{" "}
          </p>
          <Small>
            FotonBank Online Tech Serviços de Tecnologia Ltda. CNPJ:
            14.530.403/0001-43
          </Small>
        </FotonInfo>
      </GridItem>
      <GridItem>
        <GridTitle>Product</GridTitle>
        {product.map((props, index) => (
          <NavLink {...props} key={index} />
        ))}
      </GridItem>
      <GridItem>
        <GridTitle>Company</GridTitle>
        {company.map((props, index) => (
          <NavLink {...props} key={index} />
        ))}
      </GridItem>
      <GridItem>
        <GridTitle>Support</GridTitle>
        {support.map((props, index) => (
          <NavLink {...props} key={index} />
        ))}
      </GridItem>
      <GridItem>
        <GridTitle>Follow us</GridTitle>
        {support.map((props, index) => (
          <NavLink {...props} key={index} />
        ))}
      </GridItem>
    </Grid>
  </Container>
);

export default Footer;
