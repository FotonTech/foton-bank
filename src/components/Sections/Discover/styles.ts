import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #000000 0%, #1D1714 52.08%, #3C2B2B 100%);
  padding: 16rem 9.8rem;
`;

export const PhoneContainer = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: radial-gradient(45.74% 50% at 50% 50%, rgba(255, 215, 112, 0.56) 0%, rgba(255, 215, 112, 0) 100%);
`

export const Title = styled.h1`
  font-family: 'DM Sans', sans-serif;
  font-size: 4.8rem;
  line-height: 96.2%;
  color: ${({theme}) => theme.text.color.white};
  margin-bottom: 3.6rem;
`

export const Description = styled.p`
  margin-top: 1.8rem;
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;

  color: ${({theme}) => theme.text.color.white};
`

export const Information = styled.div``

export const Separator = styled.hr`
  background-color: #585858;
  border: 1px solid #585858;
`
export const List = styled.ul`
  margin-left: 2.8rem;
  margin-top: 3.6rem;
  list-style-type: circle;
`
export const Text = styled.span`
  list-style: circle;
  color: ${({theme}) => theme.text.color.white};
  font-family: 'Open Sans', sans-serif;
  font-size: 1.8rem;
  line-height: 25px;
  margin-bottom: 1.2rem;
`

export const ListItem = styled.li`

`

export const BulletItem = styled.li`
`
