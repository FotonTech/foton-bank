import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 25px;
`;

const inputStyle = css`
  display: block;
  width: 100%;
  border: 0.1rem solid #707882;
  box-sizing: border-box;
  border-radius: 6px;
  font-family: "Open Sans", sans-serif;
  background-color: transparent;
  height: 64px;
  font-size: 14px;
  color: ${({ theme }) => theme.text.color.white};
  padding: 15px 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 50px;
  }

  &::placeholder {
    transition: all 0.3s;
  }

  &:focus,
  &:active {
    outline: none;

    &::placeholder {
      color: #fff;
    }
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  line-height: 20.83px;
  font-family: DM Sans, sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.text.color.white};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.04rem;
  }
`;

export const TextArea = styled.textarea`
  ${inputStyle}
  min-height: 127px;
`;

export const Input = styled.input`
  ${inputStyle}
`;

export const Error = styled.span`
  font-family: "Open Sans";
  color: #e37486;
  font-size: 0.7rem;
`;
