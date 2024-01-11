import { ComponentProps } from "react";
import { styled } from "styled-components";
import { theme } from "../../styles";

export interface HeadingProps extends ComponentProps<typeof H1> {
  size?: string;
  font?: string;
  isRegular?: boolean;
}

export const H1: any = styled.h1<HeadingProps>`
  font-family: ${(props) => {
    switch (props.font) {
      case "merriweather":
        return theme.fonts.merriweather;
      case "sfProDisplay":
        return theme.fonts.sfProDisplay;
      default:
        return theme.fonts.montserrat;
    }
  }};
  font-size: ${(props) => {
    if (props.size) {
      return theme.fontSizes[`${props.size}` as "md"];
    }

    return theme.fontSizes["13xl"];
  }};
  font-weight: ${(props) => {
    if (props.isRegular) return theme.fontWeight.regular;
    return theme.fontWeight.bold;
  }};
  line-height: ${theme.lineHeight.base};
  color: ${theme.colors.fakeBlack};
`;

export const H2: any = styled.h2<HeadingProps>`
  font-family: ${(props) => {
    switch (props.font) {
      case "merriweather":
        return theme.fonts.merriweather;
      case "sfProDisplay":
        return theme.fonts.sfProDisplay;
      default:
        return theme.fonts.montserrat;
    }
  }};
  font-size: ${(props) => {
    if (props.size) {
      return theme.fontSizes[`${props.size}` as "md"];
    }
    return theme.fontSizes["11xl"];
  }};
  font-weight: ${(props) => {
    if (props.isRegular) return theme.fontWeight.regular;
    return theme.fontWeight.bold;
  }};
  line-height: ${theme.lineHeight.base};
  color: ${theme.colors.fakeBlack};
`;

export const H3: any = styled.h3<HeadingProps>`
  font-family: ${(props) => {
    switch (props.font) {
      case "merriweather":
        return theme.fonts.merriweather;
      case "sfProDisplay":
        return theme.fonts.sfProDisplay;
      default:
        return theme.fonts.montserrat;
    }
  }};
  font-size: ${(props) => {
    if (props.size) {
      return theme.fontSizes[`${props.size}` as "md"];
    }
    return theme.fontSizes["5xl"];
  }};
  font-weight: ${(props) => {
    if (props.isRegular) return theme.fontWeight.regular;
    return theme.fontWeight.bold;
  }};
  line-height: ${theme.lineHeight.base};
  color: ${theme.colors.fakeBlack};
`;

H1.displayName = "H1";

H2.displayName = "H2";

H3.displayName = "H3";
