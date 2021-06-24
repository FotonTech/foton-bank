import React from "react";
import { RiRocket2Fill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  Container,
  Information,
  List,
  PhoneContainer,
  Description,
  Separator,
  Text,
  Title,
} from "./styles";
import Card from "../../Card";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  title: string;
  description: string;
  features: string[];
  cards: string[];
}

const Phone = () => (
  <StaticImage
    src="../../../../static/fotonBankInPhone.png"
    alt="Phone with Foton Bank home page"
  />
);

const Second = ({ title, description, features, cards }: Props) => {
  return (
    <Container>
      <PhoneContainer>
        <Phone />
        <Card text={cards[0]} icon={AiOutlineClockCircle} />
        <Card text={cards[1]} icon={RiRocket2Fill} />
      </PhoneContainer>
      <Information>
        <Title>{title}</Title>
        <Separator />
        <Description>{description}</Description>
        <List>
          {features.map((feature) => (
            <li>
              <Text>{feature}</Text>
            </li>
          ))}
        </List>
      </Information>
    </Container>
  );
};

export default Second;
