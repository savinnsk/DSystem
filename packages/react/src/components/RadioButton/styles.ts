import { styled } from "styled-components";
import { RadioButtonProps } from "./radio-button";
import { theme } from "../../styles";

const PrimaryVariant = `
.Radio {
  border: 1px solid ${theme.colors.azure};
}
`;

const DisabledVariant = `
color : ${theme.colors.fog};
.Radio {
  background-color: ${theme.colors.disabled} ;
  .IconRadio {
    background-color: ${theme.colors.fog}
  }
}
`;

const ErrorVariant = `
.Radio {
  border: 1px solid ${theme.colors.blood};
  .IconRadio {
    background-color: ${theme.colors.blood}
  }
}
`;

const VariantMapper = {
  disabled: DisabledVariant,
  error: ErrorVariant,
  primary: PrimaryVariant,
} as any;

export const RadioContainer = styled.div<RadioButtonProps>`
  margin: ${theme.space[2]};

  ${({ variant }) => VariantMapper[variant as any]};
`;

export const Radio = styled.button<RadioButtonProps>`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.fog};
  border-radius: ${theme.radii.full};
  text-decoration: none;
  width: 18px;
  height: 18px;
  cursor: pointer;
  padding: 4px;
  margin: 0;
`;

export const IconRadio = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.azure};
  border-radius: inherit;
`;

export const Label = styled.span`
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fonts.montserrat};
  font-weight: ${theme.fontWeight.regular};
  margin-left: ${theme.space[3]};
`;
