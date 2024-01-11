import { ButtonHTMLAttributes } from "react";
import {
  CloseButton,
  ModalContainer,
  ModalLabel,
  ModalHeader,
  ModalHeaderContainer,
  ModalBody,
} from "./styles";
import { Icon } from "../Icon/icon";

export interface ModalProps
  extends ButtonHTMLAttributes<typeof HTMLButtonElement> {
  message?: string;
  isOpen?: boolean;
  kind?: "primary" | "warning" | "success" | "danger";
  children?: React.ReactNode;
  onClose?: () => void;
}

export function Modal({
  message = "",
  isOpen = true,
  kind = "primary",
  onClose,
  children,
  ...props
}: ModalProps) {
  const IconMapper = {
    primary: <Icon  viewBox="0 0 20 20" name="ExclamationMark" className="Icon"/>,
    warning:<Icon  viewBox="0 0 20 20" name="ExclamationMark2" className="Icon" fill="white"/>,
    success:<Icon  viewBox="0 0 20 20" name="Approve" className="Icon" />,
    danger: <Icon  viewBox="0 0 20 20" name="Close" className="Icon" />,
  };

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalLabel kind={kind}>{IconMapper[kind]}</ModalLabel>
      <ModalBody>
        <ModalHeaderContainer>
          <ModalHeader>{message}</ModalHeader>
          <CloseButton onClick={onClose} {...props}>
            <Icon name="Close2" viewBox="0 0 25 25" className="CloseIcon" />
          </CloseButton>
        </ModalHeaderContainer>
        {children}
      </ModalBody>
    </ModalContainer>
  );
}
