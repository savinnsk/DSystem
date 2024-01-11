import { ComponentProps } from "react";
import { styled } from "styled-components";
import { theme } from "../../styles";

export interface SubtitleProps extends ComponentProps<typeof Subtitle> {
  size?: string;
  font?: string;
  isRegular?: boolean;
}

export const Subtitle: any = styled.h4<SubtitleProps>`
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

    return theme.fontSizes["3xl"];
  }};
  font-weight: ${(props) => {
    if (props.isRegular) return theme.fontWeight.regular;
    return theme.fontWeight.bold;
  }};
  line-height: ${theme.lineHeight.base};
  color: ${theme.colors.fakeBlack};
`;

Subtitle.displayName = "Subtitle";
