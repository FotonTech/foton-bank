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

interface Props {
  title: string,
  description: string,
  buttonText: string,
}


const First: React.FC<Props> = ({
  title,
  description,
  buttonText,
}) => {
  const CreditCardWithHand = () => (
    <StaticImage
      width={200}
      height={325}
      src="../../../../static/hand.png"
      alt="A hand offering the FotonBank credit card for you"
    />
  );

  const BlackCreditCard = () => (
    <StaticImage src="../../../../static/creditCard.svg" alt="Black FotonBank credit card" />
  );

  const Logo = () => (
    <LogoContainer className="row p-2 m-2 mb-10">
      <StaticImage src="../../../../static/fotonBankLogo.svg" alt="Black FotonBank credit card" />
      <StaticImage className="mt-3 ml-4" src="../../../../static/fotonBankText.svg" alt="FotonBank" />
    </LogoContainer>
  );

  return (
    <Container className="inline-flex p-10 m-10 row">
      <Info className="container mx-auto mt-8 flex-1">
        <Logo />
        <Description className="m-2 p-2 mt-10">
          <Text>
            {title}
          </Text>
          <Text>
            {description}
          </Text>
        </Description>
        <Button background="linear-gradient(90deg, #F1E369 -0.36%, #FFA944 100%)">
          <p className="p-2 text-black font-semibold">
            {buttonText}
          </p>
        </Button>
      </Info>

      <CreditCardContainer className="flex-3">
        <CreditCardWithHand />
        <BlackCreditCard />
      </CreditCardContainer>
    </Container>
  );
};

export default First;
