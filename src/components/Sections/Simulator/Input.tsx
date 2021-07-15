import React from "react";
import {
  InputWrapper,
  Icon,
  StyledInput
} from "./styles";

import Svg from '../../common/Svg'

interface Props {
  icon: 'US' | 'BR';
  placeholder: string;
}

const Input: React.FC<Props> = ({ icon, placeholder }) => {
  return (
    <InputWrapper>
      <Icon>
        <Svg icon={icon} />
      </Icon>
      <StyledInput placeholder={placeholder} />
    </InputWrapper>
  );
};

export default Input;
