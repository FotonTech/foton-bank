import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormInput } from "src/components/common/Form/Input";
import { Element } from "react-scroll";
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
  FormSucess,
  FormError,
} from "./styles";
import { StaticImage } from "gatsby-plugin-image";

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

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function GetInTouch({
  title: { mainText, highlight },
  description,
  button,
  inputs: { name, email, message },
}: GetInTouchProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSubmitSucess, setHasSubmitSucess] = useState<boolean>(false);
  const [hasSubmitError, setHasSubmitError] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let fetchBody = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    setHasSubmitError(false);
    setHasSubmitSucess(false);
    setIsLoading(true);
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fetchBody),
    }).then((res) => {
      setIsLoading(false);
      if (res.status === 500) {
        setHasSubmitError(true);
      } else {
        setHasSubmitSucess(true);
        reset();
        setValue("message", "");
      }
    });
  };

  return (
    <Element name="getintouch">
      <Container>
        <Wrapper>
          <LeftContainer>
            <Fade bottom>
              <Title>
                <MainText>{mainText}</MainText>
                <HighLightText>{highlight}</HighLightText>
              </Title>
            </Fade>
            <Fade top>
              <Description>{description}</Description>
            </Fade>
          </LeftContainer>
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <Fade>
              <Controller
                name="name"
                control={control}
                rules={{ required: "Your name is required." }}
                render={({ field }) => (
                  <Fade bottom>
                    <FormInput
                      error={errors.name}
                      label="Name"
                      placeholder="Type your name"
                      field={field}
                    />
                  </Fade>
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Your e-mail is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid e-mail address.",
                  },
                }}
                render={({ field }) => (
                  <Fade bottom>
                    <FormInput
                      error={errors.email}
                      label="E-mail"
                      placeholder="Enter your best email here"
                      field={field}
                    />
                  </Fade>
                )}
              />
              <Controller
                name="message"
                rules={{ required: "Your message is requried." }}
                control={control}
                render={({ field }) => (
                  <Fade bottom>
                    <FormInput
                      error={errors.message}
                      label="Mesage"
                      placeholder="Tell us about your project"
                      field={field}
                      type="textarea"
                    />
                  </Fade>
                )}
              />
            </Fade>
            <Fade bottom>
              <Button disabled={isLoading} type="submit">
                {!isLoading ? (
                  "Send"
                ) : (
                  <StaticImage
                    src="../../../../static/loader.svg"
                    width={44}
                    height={44}
                    alt="Loading page..."
                  />
                )}
              </Button>
            </Fade>
            {hasSubmitError && (
              <FormError>{`An error ocurred while sending your message, please try again later.`}</FormError>
            )}
            {hasSubmitSucess && (
              <FormSucess>{`Yeah! You message was sent. We'll contact you as soon as possible.`}</FormSucess>
            )}
          </ContactForm>
        </Wrapper>
      </Container>
    </Element>
  );
}
