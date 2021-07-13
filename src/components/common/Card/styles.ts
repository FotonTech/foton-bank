import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFF;
  height: 7.5rem;
  border-radius: 18px;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: calc(3rem / 2);
  background-color: ${({theme}) => theme.background.gray};
`;

export const Text = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;

  color: ${({theme}) => theme.text.color.black}
`