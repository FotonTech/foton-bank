import styled from "styled-components";

export const Container = styled.section`
  padding: 125px 0;
  background: radial-gradient(
      50% 50% at 50% 50%,
      #000000 0%,
      rgba(0, 0, 0, 0.42) 100%
    ),
    #332d2b;
  width: 100%;
  margin: 10 auto;
  position: relative;
  padding-right: var(--bs-gutter-x, 1.5rem);
  padding-left: var(--bs-gutter-x, 1.5rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 30px 0 300px 0;
  }
`;

export const Wrapper = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 48px;
  color: ${({ theme }) => theme.text.color.white};
  margin-bottom: 55px;
  line-height: 54.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    font-size: 42px;
    line-height: 30px;
    margin: 50px 0 45px 0;
  }

  > strong {
    background: ${({ theme }) => theme.text.color.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Steps = styled.div`
  max-width: 635px;
  transition: 0.5s;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
  }
`;

interface StepProps {
  color: string;
  badgeBackground: string;
  backgroundColor: string;
}

export const Step = styled.div<StepProps>`
  display: flex;
  align-items: center;
  padding: 48px 80px;
  background: ${({ badgeBackground }) => badgeBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 30px 50px;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 95px;
    min-height: 95px;
    font-weight: bold;
    font-size: 36px;
    color: ${({ theme }) => theme.text.color.white};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 50%;
    margin-right: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      min-width: 45px;
      min-height: 45px;
      font-size: 14px;
      margin-right: 25px;
    }
  }

  > div {
    color: ${({ color }) => color};
    > h2 {
      margin-bottom: 8px;
      font-weight: 800;
      font-size: 14px;
      line-height: 18px;
      text-transform: uppercase;
    }
    > p {
      font-size: 14px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 12px;
      }
    }
  }
`;

export const RightContainer = styled.div`
  position: relative;
  z-index: 5;
  animation: float 8s infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .hero-shape {
    display: block;
    position: absolute;
    top: 0;
    right: 0;

    &.hero-spinner {
      width: 852px;
      height: 890px;
      top: -440px;
      right: -400px;
      animation: rotate infinite 14s linear;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 400px;
        height: 405px;
        top: -20px;
        left: -300px;
      }
    }

    &.hero-coin {
      width: 703px;
      height: 705px;
      top: -340px;
      right: -290px;

      @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 330px;
        height: 335px;
        top: 30px;
        left: -270px;
      }
    }
  }
`;

export const MainText = styled.p`
  font-family: DM Sans, sans-serif;
  font-weight: 400;
`;

export const HightLightText = styled.p`
  font-family: DM Sans, sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.text.color.yellow};
`;

export const OptionValue = styled.span`
  font-family: Manrope, sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 24px;
`;

export const OptionTitle = styled.p`
  font-family: "Manrope", sans-serif;
  font-weight: 800;
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 2px;
`;

export const OptionDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;
