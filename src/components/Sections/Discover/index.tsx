import React from "react";
import { RiRocket2Fill } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import { Card, Media } from "src/components/common/";
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
  PhoneShape,
  Phone,
  Wrapper,
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
    <Wrapper>
      <Container>
        <Fade>
          <Media breakpoint="lg">
            <PhoneContainer>
              <PhoneShape>
                <Phone>
                  <StaticImage
                    height={1900}
                    src="../../../../static/discoverHero.png"
                    alt="phone"
                  />
                </Phone>
              </PhoneShape>
            </PhoneContainer>
          </Media>
        </Fade>
        <Information>
          <Fade bottom>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Fade>
          <Fade bottom>
            <Separator />
          </Fade>
          <Fade bottom>
            <Description>{description}</Description>
          </Fade>
          <List>
            {features.map((feature, index) => (
              <Fade bottom delay={100 * index}>
                <ListItem key={`${feature}-${index}`}>
                  <Text>{feature}</Text>
                </ListItem>
              </Fade>
            ))}
          </List>
        </Information>
      </Container>
    </Wrapper>
  );
};

export default Discover;
