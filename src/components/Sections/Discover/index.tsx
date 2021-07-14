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
  WhiteCard,
  YellowCard,
  YellowCircle,
  Phone,
  PhoneBackground
} from "./styles";

interface Props {
  title: string;
  description: string;
  features: string[];
  cards: string[];
}

const Discover = ({ title, description, features, cards }: Props) => {
  const icons = [AiOutlineClockCircle, RiRocket2Fill];
  const cardsWithIcon = cards.map((card, i) => {
    return { card, icon: icons[i] };
  });

  return (
    <Container>
      <PhoneContainer>
        <YellowCircle>
          <Phone>
            <StaticImage height={500} src="../../../../static/phone.png" alt="phone" />
          </Phone>
          <PhoneBackground>
            <StaticImage
              src="../../../../static/phone-background.svg"
              alt="phone"
            />
          </PhoneBackground>
        </YellowCircle>

        <WhiteCard>
          <StaticImage
            src="../../../../static/discover-white-card.svg"
            alt="phone"
          />
        </WhiteCard>

        <YellowCard>
          <StaticImage
            src="../../../../static/discover-yellow-card.svg"
            alt="phone"
          />
        </YellowCard>
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
