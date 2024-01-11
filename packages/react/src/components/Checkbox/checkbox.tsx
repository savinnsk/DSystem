import { InputHTMLAttributes } from "react";
import { CheckContainer, CheckBoxContent, UndefinedIcon } from "./styles";
import { Icon } from "../Icon/icon";


export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: "default" | "disabled" | "error";
  value?: string;
  isChecked?: boolean;
  isUndefined?: boolean;
  inputValue: string;
  label: string;
}

export function CheckBox({
  variant = "default",
  inputValue,
  label,
  isChecked = false,
  isUndefined = false,
  ...inputProps
}: CheckBoxProps) {
  const isCheckedIcon = () => {
    return isChecked ? <Icon
    viewBox="0 0 25 25"
    name="ApproveTick"
    className="Check" /> : "";
  };

  return (
    <CheckContainer variant={variant}>
      <label>
        <input
          value={inputValue}
          type="checkbox"
          {...inputProps}
          checked={isChecked}
        />
        <CheckBoxContent variant={variant}>
          {isUndefined ? (
            <UndefinedIcon className="Undefined" />
          ) : (
            isCheckedIcon()
          )}
        </CheckBoxContent>
        <span className="Label">{label}</span>
      </label>
    </CheckContainer>
  );
}
