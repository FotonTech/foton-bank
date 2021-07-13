import React from "react";

import {
  Container,
  Wrapper,
  Title,
  ContactForm,
  LeftContainer,
  Description,
  Button,
  HighLightText,
  MainText,
} from "./styles";

interface InputData {
  label: string;
  placeholder: string;
}

interface TitleData {
  mainText: string;
  highlight: string;
}

interface GetInTouchProps {
  title: TitleData;
  description: string;
  button: string;
  inputs: {
    name: InputData;
    email: InputData;
    message: InputData;
  };
}

export default function GetInTouch({
  title: { mainText, highlight },
  description,
  button,
  inputs: { name, email, message },
}: GetInTouchProps) {
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <Title>
            <MainText>
              {mainText}
            </MainText>
            <HighLightText>
              {highlight}
            </HighLightText>
          </Title>
          <Description>{description}</Description>
        </LeftContainer>
        <ContactForm>
          <label htmlFor="contact-name">{name.label}</label>
          <input type="text" id="contact-name" placeholder={name.placeholder} />
          <label htmlFor="contact-email">{email.label}</label>
          <input
            type="text"
            id="contact-email"
            placeholder={email.placeholder}
          />
          <label htmlFor="contact-message">{message.label}</label>
          <textarea id="contact-message" placeholder={message.placeholder} />
          <Button type="button">
            {button}
          </Button>
        </ContactForm>
      </Wrapper>
    </Container>
  );
}
