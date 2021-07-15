import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  background: linear-gradient(90deg, #000000 0%, #1d1714 82.08%, #3c2b2b 200%);
  max-width: 100vw;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    background: linear-gradient(
      90deg,
      #000000 0%,
      #1d1714 52.08%,
      #3c2b2b 100%
    );
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1.9rem 3.1rem 1.9rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 2fr 2fr;
    gap: 0;
    padding: 8rem 0;
  }
`;

export const PhoneContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -3%;
`;

export const Title = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 45px;
  line-height: 80.2%;
  max-width: 480px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.color.white};
  margin-bottom: 1.6rem;

  strong {
    font-weight: 700;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 48px;
    line-height: 105.2%;
    margin-bottom: 2rem;
  }
`;

export const Description = styled.p`
  margin-top: 1.2rem;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 33px;
  color: ${({ theme }) => theme.text.color.white};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.6rem;
    margin-top: 1.8rem;
  }
`;

export const Information = styled.div`
  max-width: 592px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 10%;
  }
`;

export const Separator = styled.hr`
  background-color: #585858;
  border: 1px solid #585858;
`;

export const List = styled.ul`
  margin-top: 2.6rem;
  list-style: none;
  list-style-position: inside !important;
  font-size: 1.15rem;
`;
export const Text = styled.span`
  color: ${({ theme }) => theme.text.color.white};
  font-family: "Open Sans", sans-serif;
  line-height: 25px;
  margin-bottom: 1.2rem;
  font-weight: 300;
`;

export const ListItem = styled.li`
  position: relative;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 25px;
  font-size: 16px;
  margin-left: 1rem;
  padding-left: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 48px;
    line-height: 105.2%;
    font-size: 18px;
  }

  &::before {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: linear-gradient(90deg, #f1e369 -0.36%, #ffa944 100%);
    margin-right: 20px;
  }

  &::marker {
    list-style-position: inside;
    color: #f1e369;
    font-size: 1.7rem;
  }
`;

export const PhoneShape = styled.div`
  display: none;
  position: absolute;
  left: 0;
  transform: translateX(-32%);
  display: flex;
  align-items: center;
  width: 1700px;
  height: 1700px;
  margin-top: 5%;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

export const Phone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const BulletItem = styled.li``;
