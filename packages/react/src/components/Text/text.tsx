import { ParamHTMLAttributes } from "react";
import { styled } from "styled-components";
import { theme } from "../../styles";

type FontSizeOptions = "xxs" | "xs" | "sm" | "md" | "lg";
type FontSizeMapping = Record<FontSizeOptions, keyof typeof theme.fontSizes>;

export interface TextProps
  extends ParamHTMLAttributes<typeof HTMLParagraphElement> {
  isBold?: boolean;
  size?: FontSizeOptions;
  font?: string;
  placeHolder?: boolean;
  underline?: boolean;
}

const calculateMobileFontSize = (size: FontSizeOptions): string => {
  const mobileSize: FontSizeMapping = {
    xxs: "xxs2x",
    xs: "xxs",
    sm: "xs",
    md: "sm",
    lg: "md",
  };

  return theme.fontSizes[mobileSize[size]];
};

const placeHolderProps = `
  font-style: italic;
  font-weight: 300;
`;

export const Text = styled.p<TextProps>`
  @media (max-width: 500px) {
    font-size: ${(props) =>
      props.size ? calculateMobileFontSize(props.size) : theme.fontSizes.lg};
  }

  font-family: ${(props) =>
    props.font
      ? theme.fonts[props.font as keyof typeof theme.fonts]
      : theme.fonts.sfProDisplay};
  font-size: ${(props) =>
    props.size ? theme.fontSizes[props.size] : theme.fontSizes.lg};
  font-weight: ${(props) =>
    props.isBold ? theme.fontWeight.bold : theme.fontWeight.regular};
  color: ${theme.colors.fakeBlack};
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  ${(props) => props.placeHolder && placeHolderProps};
`;

Text.displayName = "Text";
