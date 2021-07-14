import React from "react";
import * as S from "./styles";

type InputProps = {
  field: any;
  type?: string;
  label: string;
  error: any;
  placeholder?: string;
};

export const FormInput = ({
  field,
  type,
  label,
  error,
  placeholder,
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Label> {label} </S.Label>
      {type === "textarea" ? (
        <S.TextArea placeholder={placeholder} {...field} />
      ) : (
        <S.Input placeholder={placeholder} {...field} />
      )}

      {error && <S.Error>{error.message}</S.Error>}
    </S.Wrapper>
  );
};
