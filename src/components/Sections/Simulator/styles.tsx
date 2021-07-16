import styled from "styled-components";

interface CommonProps {
  color?: string,
}

export const Container = styled.div`
  position: relative;
  background: radial-gradient(
    48.42% 39.21% at 87.6% 94.12%,
    rgba(242, 228, 99, 0.22) 0%, rgba(242, 228, 99, 0) 100%),
    radial-gradient(40.44% 61.9% at 66.26% 100%, #424242 0%, rgba(0, 0, 0, 0) 92.12%),
    radial-gradient(31.99% 54.63% at 4.97% 6.32%, rgba(66, 69, 86, 0.4) 0%, rgba(23, 0, 88, 0) 90.71%),
    #000000;
  min-height: 100vh;
  max-width: 100vw;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-top: 95px;
    padding-bottom: 0;
  }
`;

export const LogoContainer = styled.div`
  width: 190px;
  margin-bottom: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 240px;
    margin-bottom: 60px;
    margin-left: 170px;
  }

`;

export const Info = styled.div`
`;

export const CardContainer = styled.div`
  background: #292929;
  border-radius: 10px;
  margin-top: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 620px;
    width: 540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: 60px;
    padding: 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  height: 95px;
  width: 270px;
  border-bottom: 8px solid #F1E369;
  border-radius: 10px 2px 2px 2px;
`;

export const CardHeaderText = styled.p`
  font-family: "DM Sans";
  justify-self: center;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  line-height: 96.2%;
  letter-spacing: 0.29em;
  color: #030304;
`;

export const Content = styled.div`
`;

export const Label = styled.p`
  color: #FFF;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 96.2%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 44px;
`;

export const Button = styled.button`
  height: 60px;
  background: ${({ theme }) => theme.text.color.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.color.black};
  font-style: normal;
  font-family: "DM Sans";
  line-height: 23px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 50px;
  border-width: 0px;
  cursor: pointer;
  transition: all 0.3s;
  width: 250px;

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

export const InputContainer = styled.div`
  margin: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 10px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputTitle = styled.h1`
  color: white;
  font-family: 'DM SANS';
  font-size: 1.5rem;
`;

export const StyledInput = styled.input`
  padding: 1rem 1rem 1rem 2.5rem;
  border: 0;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #FFF;
  border-bottom: 2px solid #9e9e9e;
  outline: none;
  transition: .2s ease-in-out;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
  border-bottom: 2px solid #727272;
  background: url("") no-repeat scroll 7px 7px;
  background-size: 32px;

  &:focus {
    border-color: #f2e329;
  }

  ::placeholder {
    color: #FFF;
    font-family: "DM Sans";
    font-size: 14px;
    font-weight: bold;
    opacity: 1;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardItem = styled.div<CommonProps>`
  background: ${(props) => props.color || '#FFF'};
  width: 100%;
  height: 67px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border: 1px solid #6F6F6F;
  align-items: center;
`;

export const CardText = styled.p<CommonProps>`
  text-align: center;
  color: ${(props) => props.color || '#383838'};
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-family: "DM Sans";
`;

export const CardLink = styled.a`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #DEA30A;
  margin-right: 20px;
  cursor: pointer;
`
export const CardIcon = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
`;

export const IconContainer = styled.div`

`;
