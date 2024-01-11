import styled, { css } from "styled-components";
import { LinkProps } from "./link";
import {
  colors,
  fontSize,
  fontWeight,
  fonts,
  radii,
} from "@busca-milhas-ui/tokens";

const colorMapper = {
  default: colors.azure,
  select: colors.darkPurple,
  disabled: colors.fog,
};

export const LinkWrapper = styled.a<LinkProps>`
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.625rem;
  border-radius: ${radii.xs};
  font-weight: ${fontWeight.bold};
  font-family: ${fonts.montserrat};
  font-size: ${fontSize.sm};
  color: ${({ kind }) => {
    return `${colorMapper[kind]}`;
  }};

  ${({ kind, options }) => {
    switch (options) {
      case "inline":
        return css`
          text-decoration: underline;
        `;
      case "background":
        return css`
          background-color: ${colorMapper[kind]};
          color: ${kind == "disabled" ? colors.smoke : colors.white};
        `;

      default:
        return;
    }
  }}

  &:hover {
    cursor: ${({ kind }) => (kind == "disabled" ? "not-allowed" : "pointer")};
  }
`;
