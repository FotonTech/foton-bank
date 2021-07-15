import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "src/components/common";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import {
  Container,
  LogoContainer,
  Title,
  Paragraph,
  Description,
  CreditCardContainer,
  Info,
} from "./styles";
interface Props {
  title: string;
  description: string;
  buttonText: string;
}

const HomeHero: React.FC<Props> = ({ title, description, buttonText }) => {
  const CreditCardWithHand = () => (
    <StaticImage
      width={631}
      height={742}
      src="../../../../static/cards.png"
      alt="A hand offering the FotonBank credit card for you"
    />
  );

  const Logo = () => (
    <LogoContainer>
      <StaticImage
        src="../../../../static/fotonBankLogo.svg"
        alt="Black FotonBank credit card"
      />
    </LogoContainer>
  );

  return (
    <Container>
      <Info>
        <Fade bottom>
          <Logo />
        </Fade>
        <Description>
          <Fade bottom>
            <Title>{title}</Title>
          </Fade>
          <Fade bottom>
            <Paragraph>{description}</Paragraph>
          </Fade>
        </Description>
        <Fade bottom>
          <Button background="linear-gradient(90deg, #F1E369 -0.36%, #FFA944 100%)">
            {buttonText}
          </Button>
        </Fade>
      </Info>

      <CreditCardContainer>
        <Zoom>
          <CreditCardWithHand />
        </Zoom>
      </CreditCardContainer>
    </Container>
  );
};

export default HomeHero;
