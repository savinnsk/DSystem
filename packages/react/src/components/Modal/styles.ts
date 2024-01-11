import { styled } from "styled-components";
import { theme } from "../../styles";
import { ModalProps } from "./modal";

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
const VariantColorMapper = {
  primary: PrimaryVariant,
  danger: DangerVariant,
  success: SuccessVariant,
  warning: WarningVariant,
} as any;

export const ModalContainer = styled.div<ModalProps>`
  @media (max-width: 750px) {
    width: 300px;
    height: 200px;
  }

  width: 526.401px;
  height: 415px;
  border: 1px solid ${theme.colors.fog};
  border-radius: ${theme.radii.sm};
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  text-align: center;
  flex-shrink: 0;
  box-shadow: 9.79351px 9.79351px 24.48378px 0px rgba(37, 37, 39, 0.2),
    -9.79351px 0px 24.48378px 0px rgba(37, 37, 39, 0.2);
`;

export const ModalLabel = styled.div<ModalProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  .Icon {
    width: 34.277px;
    height: 34.277px;
    color :${theme.colors.white}
  }
  @media (max-width: 750px) {
    width: 50px;
    .Icon {
      width: 280px;
      height: 28px;
     
    }
  }

  width: 61.209px;
  height: 100%;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;

  ${({ kind }) => VariantColorMapper[kind as any]};
`;

export const ModalHeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  color: ${theme.colors.smoke};
`;

export const ModalHeader = styled.h1`
  @media (max-width: 750px) {
    font-size: ${theme.fontSizes["3xl"]};
  }
  font-size: ${theme.fontSizes["4xl"]};
  font-family: ${theme.fonts.montserrat};
  margin: auto;
`;

export const ModalBody = styled.div`
  height: 100%;
  width: 100%;
`;

export const CloseButton = styled.button<ModalProps>`
  @media (max-width: 750px) {
    .CloseIcon {
      width: 17px;
      height: 17px;
     
    }
  }

  .CloseIcon {
    width: 20.811px;
    height: 20.811px;
    fill : ${theme.colors.fakeBlack};
  }
  border: none;
  background: inherit;
  cursor: pointer;
  margin-right: ${theme.space[5]};
`;
