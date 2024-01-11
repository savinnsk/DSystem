import { ButtonHTMLAttributes } from "react";
import { NotificationContainer, NotificationText } from "./styles";
import { NotificationRoot } from ".";

export interface NotificationProps
  extends ButtonHTMLAttributes<typeof HTMLButtonElement> {
  message?: string;
  isOpen?: boolean;
  variant?: "primary" | "warning" | "success" | "danger";
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Notification({
  message = "",
  isOpen = true,
  variant = "primary",
  onClose,
}: NotificationProps) {
  return (
    <NotificationContainer isOpen={isOpen}>
      <NotificationRoot.Label variant={variant} />
      <NotificationText>{message}</NotificationText>
      <NotificationRoot.CloseButton onClick={onClose} />
    </NotificationContainer>
  );
}
