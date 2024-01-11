import { styled } from "styled-components";
import { theme } from "../../styles";
import { fonts } from "@busca-milhas-ui/tokens";

const DefaultVariant = `
  border : 1px solid ${theme.colors.azure};

  .Check {
    fill: ${theme.colors.azure};
  }
  .Undefined {
    background-color: ${theme.colors.azure};
  }
`;

const DisabledVariant = `
background-color:#DBDBDB;
 border : 1px solid ${theme.colors.fog};
 .Check {
  fill: ${theme.colors.fog};
 }
 .Undefined {
  background-color: ${theme.colors.fog};
 }

 cursor: not-allowed;
`;

const ErrorVariant = `
  border : 1px solid ${theme.colors.blood};
  .Check {
    fill: ${theme.colors.blood};
  }
  .Undefined {
    background-color: ${theme.colors.blood};
  }
`;

const variantMapper: any = {
  default: DefaultVariant,
  disabled: DisabledVariant,
  error: ErrorVariant,
};

export const CheckContainer = styled.div<{ variant: string }>`
  color: ${(props) =>
    props.variant === "disabled" ? theme.colors.fakeBlack : theme.colors.black};

  label {
    display: flex;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .Check {
    position: absolute;
    height: 18px;
    width: 18px;
  }

  .Label {
    font-family: ${fonts.montserrat};
  }
`;

export const CheckBoxContent = styled.div<{ variant: string }>`
  ${({ variant }) => variantMapper[variant as string]};
  cursor: pointer;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  margin-right: 12px;
  ${({ variant }) => {
    if (variant === "disabled") return DisabledVariant;
    if (variant === "error") return ErrorVariant;
    return DefaultVariant;
  }};
`;

export const UndefinedIcon = styled.div`
  position: absolute;
  left: 4px;
  top: 8px;
  height: 2px;
  border-radius: 3px;
  width: 10px;
`;
