import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  color: #000000;
  padding: 11px 40px;
  background: linear-gradient(
    90deg,
    #f1e369 -0.36%,
    #ffdb8c 50.34%,
    #ffa944 100%
  );
  border-radius: 50.6468px;
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;
