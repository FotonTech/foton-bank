import React from "react";
import NumberFormat from "react-number-format";
import { InputWrapper, Icon, StyledInput } from "./styles";

import Svg from "../../common/Svg";

interface Props {
  icon: "US" | "BR";
  placeholder: string;
  prefix?: string
}

const Input: React.FC<Props> = ({ icon, placeholder, prefix = "$" }) => {
  return (
    <InputWrapper>
      <Icon>
        <Svg icon={icon} />
      </Icon>
      <NumberFormat
        thousandSeparator={true}
        prefix={prefix}
        customInput={StyledInput}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;
