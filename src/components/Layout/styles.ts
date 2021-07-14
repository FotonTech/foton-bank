import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000;
  margin-right: auto;
  width: 100%;
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 540px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 720px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 960px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 1140px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    max-width: 1320px;
  }
`
