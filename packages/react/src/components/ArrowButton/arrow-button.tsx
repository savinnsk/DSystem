import { ButtonHTMLAttributes } from "react";
import { ArrowButtonContent } from "./styles";
import { Icon } from "../Icon/icon";
import { theme } from "../../styles";

export interface ArrowButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  direction?: string;
  isDisabled?: boolean;
}

export function ArrowButton({
  direction = "right",
  isDisabled = false,
  ...props
}: ArrowButtonProps) {
  return (
    <ArrowButtonContent isDisabled={isDisabled} {...props}>
      {direction === "right" ? (
        <Icon
          color={isDisabled ? theme.colors.fog : theme.colors.black}
          name="RightArrow"
          className="Icon"
        ></Icon>
      ) : (
        <Icon
          color={isDisabled ? theme.colors.fog : theme.colors.black}
          name="LeftArrow"
          className="Icon"
        ></Icon>
      )}
    </ArrowButtonContent>
  );
}

ArrowButton.displayName = "ArrowButton";
