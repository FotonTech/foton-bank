import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import NumberFormat from 'react-number-format'

import {
  Container,
  Info,
  LogoContainer,
  CardContainer,
  CardHeader,
  CardHeaderText,
  Content,
  ButtonContainer,
  Main,
  CardItem,
  CardText,
  CardLink,
  CardIcon,
  InputContainer,
  InputTitle
} from "./styles";
import { Button } from "src/components/common";
import Input from './Input';

const Logo = () => (
  <LogoContainer>
    <StaticImage
      src="../../../../static/fotonBankLogo.svg"
      alt="Black FotonBank credit card"
    />
  </LogoContainer>
);

const Simulator: React.FC = () => {
  return (
    <Container>
      <Info>
        <Logo />
        <Main>
          <CardContainer>
            <CardHeader>
              <CardHeaderText>RECEBIMENTO</CardHeaderText>
            </CardHeader>
            <Content>

              <InputContainer>
                <InputTitle>Você recebe</InputTitle>
                <Input icon="US" placeholder="USD" />
              </InputContainer>

              <InputContainer>
                <InputTitle>Convertemos para:</InputTitle>
                <Input icon="BR" placeholder="BRL" />
              </InputContainer>

              <InputContainer>
                <CardItem>
                  <CardIcon>
                    <StaticImage
                      src="../../../../static/clock.svg"
                      alt="clock"
                    />
                  </CardIcon>
                  <CardText>Seu câmbio: 4,92</CardText>
                  <CardLink>Entenda</CardLink>
                </CardItem>
                <CardItem color="transparent">
                  <CardIcon>
                    <StaticImage
                      src="../../../../static/calendar.svg"
                      alt="calendar"
                    />
                  </CardIcon>
                  <div>
                    <CardText color="#9A9A9A">
                      Após da aprovação do cadastro,
                    </CardText>
                    <CardText color="#9A9A9A">
                      o pagamento chega em até 1 dia útil.
                    </CardText>
                  </div>
                  <CardLink />
                </CardItem>
              </InputContainer>
            </Content>
            
          </CardContainer>
          <ButtonContainer>
              <Button background="linear-gradient(90deg, #F1E369 -0.36%, #FFDB8C 50.34%, #FFA944 100%)">
                Cadastre-se e receba
              </Button>
            </ButtonContainer>
        </Main>
      </Info>
    </Container>
  );
};

export default Simulator;
