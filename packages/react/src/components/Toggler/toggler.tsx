import { InputHTMLAttributes, useState } from "react";

import * as S from "./styles";

export interface TogglerProps extends InputHTMLAttributes<HTMLDivElement> {
  kind?: "default" | "with-label";
  isChecked?: boolean;
}

export const Toggler = ({
  kind,
  isChecked,
  disabled,
  ...rest
}: TogglerProps) => {
  return (
    <S.TogglerWrapper disabled={disabled} isChecked={isChecked}>
      <S.TogglerInput
        type="checkbox"
        checked={isChecked}
        disabled={disabled}
        {...rest}
      />
      <S.TogglerSlider disabled={disabled} />
      <S.TogglerLabel kind={kind} isChecked={isChecked} disabled={disabled}>
        {isChecked ? "ON" : "OFF"}
      </S.TogglerLabel>
    </S.TogglerWrapper>
  );
};
