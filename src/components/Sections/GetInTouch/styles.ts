import styled from "styled-components";
import background from "static/getInTouchBackground.svg";

export const Container = styled.section`
  width: 100%;
  margin: 0 auto;
  background: radial-gradient(
      115.6% 41.97% at 49.97% 96.12%,
      #453b3b 0%,
      rgba(62, 52, 52, 0) 100%
    ),
    #000000;
  position: relative;
  padding: 185px 0;
  overflow: hidden;

  padding-right: var(--bs-gutter-x, 2rem);
  padding-left: var(--bs-gutter-x, 2rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 70px 0;
  }

  &:before {
    width: 845px;
    margin: 0 auto;
    height: 600px;
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: -8rem;
    animation: float 4s infinite;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      content: none;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1275px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    padding: 0 25px;
  }
`;

export const Title = styled.div`
  font-size: 70px;
  line-height: 52.5px;
  color: ${({ theme }) => theme.text.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    font-size: 50px;
    line-height: 30px;
    justify-content: center;

    strong {
      margin-left: 5px;
    }
  }

  > strong {
    font-weight: bold;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 496px;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 100%;
    width: 100%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
  padding-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
  }
`;

export const Description = styled.p`
  max-width: 378px;
  margin-top: 40px;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.text.color.white};
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-feature-settings: "liga" off;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 15px;
    line-height: 20px;
    margin-top: 15px;
    margin-bottom: 40px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.text.color.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.color.black};
  font-style: normal;
  font-family: DM Sans, sans-serif;
  line-height: 23px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 20px;
  border-width: 0px;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 50px;
    font-size: 16px;
  }

  &:hover {
    background: linear-gradient(50deg, #f2e329 -0.56%, #ffa944 90%);
    transform: scale(1.02);
  }

  &:focus,
  &:active {
    outline: none;

    &::placeholder {
      color: #fff;
    }
  }
`;

export const HighLightText = styled.p`
  font-weight: 700;
  font-family: DM Sans, sans-serif;
  color: ${({ theme }) => theme.text.color.yellow};
`;

export const MainText = styled.p`
  font-weight: 400;
  font-family: DM Sans, sans-serif;
  color: ${({ theme }) => theme.text.color.white};
`;

export const FormError = styled.label`
  font-family: "DM Sans";
  font-size: 0.9rem;
  display: block;
  margin-top: 20px;
  color: #e37486;
`;

export const FormSucess = styled.label`
  font-family: "DM Sans";
  font-size: 0.9rem;
  display: block;
  margin-top: 20px;
  color: green;
`;
