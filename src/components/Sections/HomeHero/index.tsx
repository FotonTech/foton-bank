import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Text, Button } from "src/components/common";
import {
  Container,
  LogoContainer,
  LogoImage,
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
      width={200}
      height={325}
      src="../../../../static/hand.png"
      alt="A hand offering the FotonBank credit card for you"
    />
  );

  const BlackCreditCard = () => (
    <StaticImage
      src="../../../../static/creditCard.svg"
      alt="Black FotonBank credit card"
    />
  );

  const Logo = () => (
    <LogoContainer>
      <StaticImage
        src="../../../../static/fotonBankLogo.svg"
        alt="Black FotonBank credit card"
      />
      <StaticImage
        className="mt-3 ml-4"
        src="../../../../static/fotonBankText.svg"
        alt="FotonBank"
      />
    </LogoContainer>
  );

  return (
    <Container>
      <Info>
        <Logo />
        <Description>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </Description>
        <Button background="linear-gradient(90deg, #F1E369 -0.36%, #FFA944 100%)">
          <p>{buttonText}</p>
        </Button>
      </Info>

      <CreditCardContainer>
        <CreditCardWithHand />
        <BlackCreditCard />
      </CreditCardContainer>
    </Container>
  );
};

export default HomeHero;
