import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "src/components/common";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import {
  Container,
  LogoContainer,
  LogoImage,
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
        <Fade bottom ssrReveal>
          <Logo />
        </Fade>
        <Description>
          <Fade bottom duration={1000} ssrReveal>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Fade>
          <Fade bottom ssrReveal>
            <Paragraph>{description}</Paragraph>
          </Fade>
        </Description>
        <Fade bottom ssrReveal>
          <Link spy={true} smooth={true} duration={1000} to="getintouch">
            <Button background="linear-gradient(90deg, #F1E369 -0.36%, #FFA944 100%)">
              {buttonText}
            </Button>
          </Link>
        </Fade>
      </Info>

      <CreditCardContainer>
        <Zoom ssrReveal>
          <CreditCardWithHand />
        </Zoom>
      </CreditCardContainer>
    </Container>
  );
};

export default HomeHero;
