import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import {
  Container,
  Info,
  LogoContainer,
  CardContainer,
  CardHeader,
  CardHeaderText,
  Content,
  Label,
  Button,
  ButtonContainer,
  Input,
  InputContainer,
  Main,
  CardItem,
  CardText,
  CardLink,
  CardIcon
} from './styles';

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
              <CardHeaderText>
                RECEBIMENTO
              </CardHeaderText>
            </CardHeader>

            <Content>
              <InputContainer>
                <Label>
                  Você recebe
                </Label>
                <Input />
              </InputContainer>

              <InputContainer>
                <Label>
                  Convertemos para:
                </Label>
                <Input />
              </InputContainer>

              <InputContainer>
                <CardItem>
                  <CardIcon>
                    <StaticImage
                      src="../../../../static/clock.svg"
                      alt="clock"
                    />
                  </CardIcon>
                  <CardText>
                    Seu câmbio: 4,92
                  </CardText>
                  <CardLink>
                    Entenda
                  </CardLink>
                </CardItem>
              </InputContainer>

            </Content>
          </CardContainer>
        </Main>
      </Info>
    </Container>
  )
}

export default Simulator;
