import { ButtonHTMLAttributes } from "react";
import { IconRadio, Label, Radio, RadioContainer } from "./styles";

export interface RadioButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  isChecked?: boolean;
  label?: string;
}

export function RadioButton({
  isChecked = false,
  variant,
  label,
  ...props
}: RadioButtonProps) {
  return (
    <RadioContainer variant={variant}>
      <Radio className="Radio" {...props}>
        {isChecked && <IconRadio className="IconRadio" />}
      </Radio>
      {label && <Label>{label}</Label>}
    </RadioContainer>
  );
}
