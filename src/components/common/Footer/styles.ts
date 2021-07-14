import styled from "styled-components";

export const Container = styled.div`
  font-family: "DM Sans";
  text-align: center;
  background-color: black;
  color: #d9dbe1;
  padding: 60px 5.7rem 30px;

  p {
    font-size: 0.88rem;
    color: inherit;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: left;
    padding: 90px 5.7rem;
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
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 343px;
    padding-right: 4vw;
  }

  .adress {
    font-family: "Open Sans";
    letter-spacing: 0.4px;
    line-height: 1.7;
  }

  .copy {
    display: block;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      order: 4;
      margin-top: 25px;
    }
  }
`;

export const GridItem = styled.div`
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    &.links-grid {
      order: 1;
    }
  }
`;

export const Small = styled.div`
  font-size: 0.57rem;
  line-height: 1.9;
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
  font-size: 14px;
  margin-bottom: 20px;
  font-feature-settings: "liga" off;
  letter-spacing: 0.8px;
`;
