import styled from "styled-components";
import { theme } from "../../styles";
import { ButtonHTMLAttributes } from "react";

interface PageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  colorDisabled: string;
  clickPage?: () => number;
}

const DefaultVariant = `
.Page {
  height: ${theme.space[7]};
  width: ${theme.space[7]};
`;

const ButtonVariant = `
.Page {
  height: ${theme.space[3]};
  width: ${theme.space[3]};
}
`;

const LineVariant = `
.Page {
  height: ${theme.space[1]};
  width: ${theme.space[6]};
  border-radius: ${theme.radii.px};
}
`;

export const PaginationContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const PaginationContent = styled.div<{ pages: number; variant: string }>`
  display: flex;
  gap: ${theme.space[2]};
  margin-top: ${theme.space[1]};

  ${(props) => {
    if (props.variant === "line") return LineVariant;

    if (props.variant === "button") return ButtonVariant;

    return DefaultVariant;
  }};
`;

export const Page = styled.button<PageButtonProps>`
  color: ${(props) =>
    props.isActive ? theme.colors.white : theme.colors.black};
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: ${theme.radii.full};
  background-color: ${(props) =>
    props.isActive
      ? theme.colors.azure
      : theme.colors[`${props.colorDisabled}` as keyof typeof theme.colors]};
`;
