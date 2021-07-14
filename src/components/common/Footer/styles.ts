import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Open Sans';
  text-align: center;
  background-color: black;
  color: #d9dbe1;
  padding: 90px 5.7rem;

  p {
    font-size: 0.88rem;
    color: inherit;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  }
`;

export const FotonInfo = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: 4vw;
  }
`;

export const GridItem = styled.div`
  width: 100%;
`;

export const Small = styled.div`
  font-size: 0.57rem;
  color: rgba(217, 219, 225, 1);
`;

export const GridTitle = styled.h1`
  color: rgba(241, 227, 105, 1);
  font-size: 1.3rem;
  margin-bottom: 32px;
`;

export const A = styled.a`
  text-decoration: none;
  color: rgba(238, 239, 244, 1);
  display: block;
  margin-bottom: 12px;
  font-size: 0.82rem;
`;
