import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #000000 0%, #1d1714 52.08%, #3c2b2b 100%);
  padding: 1.5rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 3fr 2fr;
    gap: 0;
  }
`;

export const PhoneBackground = styled.div`
`;

export const PhoneContainer = styled.figure`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: "DM Sans", sans-serif;
  font-size: 4.8rem;
  line-height: 96.2%;
  color: ${({ theme }) => theme.text.color.white};
  margin-bottom: 2rem;
`;

export const Description = styled.p`
  margin-top: 1.8rem;
  font-size: 1.6rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;

  color: ${({ theme }) => theme.text.color.white};
`;

export const Information = styled.div``;

export const Separator = styled.hr`
  background-color: #585858;
  border: 1px solid #585858;
`;
export const List = styled.ul`
  margin-top: 3.6rem;
  list-style: disc;
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
  margin-bottom: 40px;
  margin-left: 1rem;
  &::marker {
    list-style-position: inside;
    color: #f1e369;
    font-size: 1.7rem;
  }
`;

export const WhiteCard = styled.div`
  position: absolute;
  top: 18%;
  left: 20%;
  z-index: 2;
`;

export const YellowCard = styled.div`
  position: absolute;
  top: 50%;
  right: 22%;
  z-index: 2;
`;

export const YellowCircle = styled.div`
  display: flex;
  align-items: center;
`;

export const Phone = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const BulletItem = styled.li``;
