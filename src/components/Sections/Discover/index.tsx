import React from "react";
import { RiRocket2Fill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Card } from "src/components/common/";
import { StaticImage } from "gatsby-plugin-image";

import {
  Container,
  Information,
  List,
  ListItem,
  PhoneContainer,
  Description,
  Separator,
  Text,
  Title,
} from "./styles";

interface Props {
  title: string;
  description: string;
  features: string[];
  cards: string[];
}

const Phone = () => (
  <StaticImage
    height={800}
    src="../../../../static/fotonBankInPhone.png"
    alt="Phone with Foton Bank home page"
  />
);

const Discover = ({ title, description, features, cards }: Props) => {
  const icons = [AiOutlineClockCircle, RiRocket2Fill];
  const cardsWithIcon = cards.map((card, i) => {
    return { card, icon: icons[i] };
  });

  return (
    <Container>
      <PhoneContainer>
      </PhoneContainer>
      <Information>
        <Title>{title}</Title>
        <Separator />
        <Description>{description}</Description>
        <List>
          {features.map((feature, index) => (
            <ListItem key={`${feature}-${index}`}>
              <Text>{feature}</Text>
            </ListItem>
          ))}
        </List>
      </Information>
    </Container>
  );
};

export default Discover;
