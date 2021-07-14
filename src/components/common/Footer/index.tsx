import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Media } from "../../common/";
import { company, NavCol, product, support } from "./navCols";
import Fade from "react-reveal/Fade";
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
  <Link to={to} style={{ textDecoration: "none" }}>
    <A>{name}</A>
  </Link>
);

const Footer: React.FC = () => (
  <Container>
    <Fade>
      <Grid>
        <GridItem className="grid-info">
          <FotonInfo>
            <p className="copy" style={{ marginBottom: 40 }}>
              © 2021 <strong>FotonTech</strong>. All rights reserved
            </p>
            <div style={{ marginBottom: 40 }}>
              <StaticImage
                src="../../../../static/footer-logo.svg"
                alt="Foton logo"
                width={169}
                height={38}
              />
            </div>
            <p className="adress" style={{ marginBottom: 20 }}>
              Rua Doutor Fernandes Coelho, n 85, Pinheiros, São Paulo - SP.{" "}
            </p>
            <Small>
              FotonBank Online Tech Serviços de Tecnologia Ltda. CNPJ:
              14.530.403/0001-43
            </Small>
          </FotonInfo>
        </GridItem>
        <Media breakpoint="md">
          <>
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
          </>
        </Media>
      </Grid>
    </Fade>
  </Container>
);

export default Footer;
