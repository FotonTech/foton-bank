import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { useTheme } from "styled-components";
import {Media} from '../../common/';

import {
  Container,
  Wrapper,
  LeftContainer,
  Title,
  Steps,
  Step,
  RightContainer,
  MainText,
  HightLightText,
  OptionValue,
  OptionTitle,
  OptionDescription,
} from "./styles";

interface FeatureData {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title: { mainText: string; highlight: string };
  featureOne: FeatureData;
  featureTwo: FeatureData;
  featureThree: FeatureData;
}

interface StepProps {
  color: string;
  badgeBackground: string;
  backgroundColor: string;
  feature: FeatureData;
}

export default function HowItWorks({
  title: { mainText, highlight },
  featureOne,
  featureTwo,
  featureThree,
}: HowItWorksProps) {
  const { text } = useTheme();
  const features: StepProps[] = [
    {
      color: text.color.black,
      badgeBackground: text.color.gradient,
      backgroundColor: text.color.black,
      feature: featureOne,
    },
    {
      color: text.color.white,
      badgeBackground: text.color.darkBrown,
      backgroundColor: text.color.brown,
      feature: featureTwo,
    },
    {
      color: text.color.white,
      badgeBackground: text.color.darkGrey,
      backgroundColor: text.color.grey,
      feature: featureThree,
    },
  ];
  return (
    <Container>
      <Wrapper>
        <LeftContainer>
          <Title>
            <MainText>
              {mainText}
            </MainText>
            <HightLightText>
              {highlight}
            </HightLightText>
          </Title>
          <Steps>
            {features.map(
              (
                {
                  color,
                  badgeBackground,
                  backgroundColor,
                  feature: { title, description },
                },
                index
              ) => (
                <Step
                  key={index}
                  color={color}
                  badgeBackground={badgeBackground}
                  backgroundColor={backgroundColor}
                >
                  <OptionValue>
                    {index + 1}
                  </OptionValue>
                  <div>
                    <OptionTitle>{title}</OptionTitle>
                    <OptionDescription>
                      {description}
                    </OptionDescription>
                  </div>
                </Step>
              )
            )}
          </Steps>
        </LeftContainer>
        <Media breakpoint="lg">
          <RightContainer>
            <StaticImage
              imgStyle={{ objectFit: "contain" }}
              height={870}
              width={570}
              src="../../../../static/howItWorksbackground.png"
              alt="Bitcoin crypto image"
            />
          </RightContainer>
        </Media>
      </Wrapper>
    </Container>
  );
}
