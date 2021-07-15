import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #000;
  max-width: 100vw;
  margin: 0 auto;
  overflow: hidden;
  padding: 55px 0 210px 0;
  padding-right: var(--bs-gutter-x, 2rem);
  padding-left: var(--bs-gutter-x, 2rem);

  &::after {
    content: "";
    position: absolute;
    top: -100px;
    left: 8vw;
    width: 150px;
    height: 150px;
    background-color: #fff;
    filter: blur(100px);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -200px;
    right: 14vw;
    width: 150px;
    height: 150px;
    background-color: #fff;
    filter: blur(120px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 115px;
    padding-bottom: 120px;
    max-width: 1300px;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 40px;
  width: 190px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 240px;
    margin-bottom: 60px;
  }
`;
export const Title = styled.h1`
  font-family: "DM Sans";
  color: #fff;
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 106.52%;
  margin-bottom: 10px;
  max-width: 510px;

  strong {
    font-weight: 700;
    color: #fee147;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 48px;
  }
`;
export const Paragraph = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  max-width: 428px;
  color: #fff;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export const LogoImage = styled.div``;
export const Description = styled.div``;
export const CreditCardContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 300px;
  right: -40px;
  top: 77%;
  transform: translateY(-30%) rotate(20deg);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    right: 100px;
    width: 570px;
    height: 610px;
    top: 45%;
    transform: translateY(-50%);
  }
`;
export const Info = styled.div``;
