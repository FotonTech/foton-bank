import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Container,
  LogoContainer,
  LogoImage,
  Description,
  CreditCardContainer,
  Info,
} from "./styles";

import Text from "src/components/Text";
import Button from "src/components/Button";

import CreditCardHand from "@static/hand.png";
import CreditCard from "@static/creditCard.svg";
import LogoIcon from "@static/fotonBankLogo.svg";
import LogoText from "@static/fotonBankText.svg";

const First: React.FC = () => {
  const CreditCardWithHand = () => (
    <StaticImage
      width={200}
      height={325}
      src={CreditCardHand}
      alt="A hand offering the FotonBank credit card for you"
    />
  );

  const BlackCreditCard = () => (
    <StaticImage src={"@static/hand.png"} alt="Black FotonBank credit card" />
  );

  const Logo = () => (
    <LogoContainer>
      <StaticImage src={LogoIcon} alt="Black FotonBank credit card" />
      <StaticImage src={LogoText} alt="FotonBank" />
    </LogoContainer>
  );

  return (
    <Container>
      <Info>
        <Logo />
        <Description>
          <Text>
            Envie ou receba dinheiro de fora com as menores taxas e a melhor
            cotação.
          </Text>
        </Description>
        <Button background="linear-gradient(90deg, #F1E369 -0.36%, #FFA944 100%)">
          Cadastre-se
        </Button>
      </Info>

      <CreditCardContainer>
        <CreditCardWithHand />
        <BlackCreditCard />
      </CreditCardContainer>
    </Container>
  );
};

export default First;
