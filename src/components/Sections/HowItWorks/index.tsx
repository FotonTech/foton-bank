import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { useTheme } from "styled-components";
import { Media } from "../../common/";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

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
          <Fade left>
            <Title>
              <MainText>{mainText}</MainText>
              <HightLightText>{highlight}</HightLightText>
            </Title>
          </Fade>
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
                <Fade delay={100 * index} bottom>
                  <Step
                    key={index}
                    color={color}
                    badgeBackground={badgeBackground}
                    backgroundColor={backgroundColor}
                  >
                    <OptionValue>{index + 1}</OptionValue>
                    <div>
                      <OptionTitle>{title}</OptionTitle>
                      <OptionDescription>{description}</OptionDescription>
                    </div>
                  </Step>
                </Fade>
              )
            )}
          </Steps>
        </LeftContainer>
        <Zoom delay={200}>
          <RightContainer>
            <StaticImage
              backgroundColor="transparent"
              width={852}
              height={890}
              className="hero-shape hero-spinner"
              src="../../../../static/bitcoin-spinner.svg"
              alt="Bitcoin crypto image"
            />
            <StaticImage
              backgroundColor="transparent"
              width={703}
              height={705}
              className="hero-shape hero-coin"
              src="../../../../static/bitcoin-coin.svg"
              alt="Bitcoin crypto image"
            />
          </RightContainer>
        </Zoom>
      </Wrapper>
    </Container>
  );
}
