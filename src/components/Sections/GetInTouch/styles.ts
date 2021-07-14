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

  padding-right: var(--bs-gutter-x, 1.5rem);
  padding-left: var(--bs-gutter-x, 1.5rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 30px 0;
  }

  &:before {
    width: 745px;
    margin: 0 auto;
    height: 600px;
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 4.2rem;

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
  display: flex;
  flex-direction: column;
  font-size: 50px;
  color: ${({ theme }) => theme.text.color.white};
  line-height: 42px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 24px;
    flex-direction: row;

    strong{
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
  min-width: 426px;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 100%;
    width: 100%;
  }

  label {
    margin-bottom: 12px;
    font-weight: 500;
    line-height: 20.83px;
    font-family: DM Sans, sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.text.color.white};
  }

  input,
  textarea {
    border: 0.1rem solid #707882;
    box-sizing: border-box;
    border-radius: 6px;
    font-family: DM Sans, sans-serif;
    background-color: transparent;
    height: 64px;
    font-size: 14px;
    color: ${({ theme }) => theme.text.color.white};
    padding: 15px 22px;
    margin-bottom: 25px;
  }

  textarea {
    height: 127px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`;

export const Description = styled.p`
  max-width: 328px;
  margin-top: 40px;
  font-size: 18px;
  line-height: 32px;
  color: ${({ theme }) => theme.text.color.white};
  font-family: Open Sans, sans-serif;
  font-weight: 400;
  font-feature-settings: 'liga' off;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
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

  &:hover {
    background: linear-gradient(50deg, #F2E329 -0.56%, #FFA944 90%);
    transition: opacity 0.5s;
  }
`;

export const HighLightText = styled.p`
  font-size: 50px;
  line-height: 52.5px;
  font-weight: 700;
  font-family: DM Sans, sans-serif;
  color: ${({ theme }) => theme.text.color.yellow}
`;

export const MainText = styled.p`
  font-size: 50px;
  line-height: 52.5px;
  font-weight: 400;
  font-family: DM Sans, sans-serif;
  color: ${({ theme }) => theme.text.color.white}
`;
