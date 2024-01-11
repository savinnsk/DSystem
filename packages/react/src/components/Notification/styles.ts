import { keyframes, styled } from "styled-components";
import { theme } from "../../styles";
import { CloseButtonProps } from "./NotificationCloseButton";
import { NotificationLabelProps } from "./NotificationLabel";

const PrimaryVariant = `
    background-color: ${theme.colors.azure};
`;

const DangerVariant = `
    background-color: ${theme.colors.blood};
`;

const SuccessVariant = `
    background-color: ${theme.colors.green100};
`;

const WarningVariant = `
    background-color: ${theme.colors.destaque};
`;

const slideInFromTop = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const NotificationContainer = styled.div<{ isOpen: boolean }>`
  @media (max-width: 750px) {
    width: 348px;
    height: 43px;
  }
  width: 480px;
  height: 60px;
  border: 1px solid ${theme.colors.fog};
  border-radius: ${theme.radii.sm};
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  align-content: center;
  text-align: center;
  flex-shrink: 0;
  position: fixed;
  top: ${(props) => (props.isOpen ? "0" : "-60px")};
  animation: ${slideInFromTop} 0.5s forwards; /* Aplica a animação quando a notificação é aberta */
`;

const VariantColorMapper = {
  primary: PrimaryVariant,
  danger: DangerVariant,
  success: SuccessVariant,
  warning: WarningVariant,
} as any;

export const NotificationLabel = styled.div<NotificationLabelProps>`
  @media (max-width: 750px) {
    width: 29px;
    height: 43px;

  
  }

  .Icon {
    color : ${theme.colors.white};
    position : relative;
    width: 90%;
    height: 60%;
    top : 27%;
    left: 4px;
  }

  width: 40px;
  height: 60px;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  position : relative;

  ${({ variant }) => VariantColorMapper[variant as any]};

 
`;

export const NotificationText = styled.p`
  @media (max-width: 750px) {
    font-size: ${theme.fontSizes.sm};
  }
  font-size: ${theme.fontSizes.lg};
  font-family: ${theme.fonts.nunito};
  margin: auto;
  color: ${theme.colors.smoke};
`;

export const CloseButton = styled.button<CloseButtonProps>`
@media (max-width: 750px) {
  width : 25px;
}

 width : 30px;

  .CloseIcon {
      width: 100%;
      height: 100%;
      fill: ${theme.colors.smoke};
    }

  border: none;
  background: inherit;
  cursor: pointer;
  margin-right: ${theme.space[5]};
`;
