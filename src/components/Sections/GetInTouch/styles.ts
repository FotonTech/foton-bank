import styled from "styled-components";
import background from "static/getInTouchBackground.svg";

export const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background: radial-gradient(
      115.6% 41.97% at 49.97% 96.12%,
      #453b3b 0%,
      rgba(62, 52, 52, 0) 100%
    ),
    #000000;
  position: relative;
  padding: 155px 0;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 30px 0;
  }

  &:before {
    width: 745px;
    height: 600px;
    content: "";
    display: block;
    position: absolute;
    left: -75px;
    bottom: 0;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      content: none;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 1075px;
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
    font-size: 16px;
    color: ${({ theme }) => theme.text.color.white};
  }

  input,
  textarea {
    border: 1px solid #707882;
    box-sizing: border-box;
    border-radius: 6px;
    background-color: transparent;
    font-size: 14px;
    color: ${({ theme }) => theme.text.color.white};
    padding: 15px 22px;
    margin-bottom: 25px;
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
  font-weight: bold;
  font-size: 18px;
  border-radius: 20px;
`;
