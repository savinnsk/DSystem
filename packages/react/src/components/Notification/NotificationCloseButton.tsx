import { ButtonHTMLAttributes } from "react";
import { Close } from "../../icons";
import { CloseButton } from "./styles";
import { Icon } from "../Icon/icon";

export interface CloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NotificationCloseButton({ ...props }: CloseButtonProps) {
  return (
    <CloseButton {...props}>
      <Icon name="Close2" viewBox="0 0 25 25" className="CloseIcon" />
    </CloseButton>
  );
}
