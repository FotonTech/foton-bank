import React from "react";
import { IconType } from "react-icons";
import { Container, IconContainer, Text } from "./styles";

interface IconProps {
  icon: IconType;
}

interface CardProps extends IconProps {
  text: string;
  backgroundClass?: string;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <IconContainer>{icon}</IconContainer>;
};

const Card: React.FC<CardProps> = ({ icon, text }) => {
  return (
    <Container>
      <Icon icon={icon} />
      <Text>{text}</Text>
    </Container>
  );
};

export default Card;
