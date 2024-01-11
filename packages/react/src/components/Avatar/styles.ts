import { styled } from "styled-components";
import { theme } from "../../styles";
import { ImgHTMLAttributes } from "react";

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const AvatarMediumProps = `
font-size: ${theme.fontSizes["3xl"]};
width: ${theme.space[16]};
height: ${theme.space[16]};
`;

const AvatarSmallProps = `
font-size: ${theme.fontSizes.sm};
width: ${theme.space[8]};
height: ${theme.space[8]};
`;

const AvatarLargeProps = `
font-size: ${theme.fontSizes["11xl"]};
width: ${theme.space[20]};
height: ${theme.space[20]};
`;

export const AvatarContainer = styled.div<{ size?: string }>`
  ${(props) => {
    if (props.size === "small") return AvatarSmallProps;

    if (props.size === "large") return AvatarLargeProps;

    if (props.size === "medium") return AvatarMediumProps;

    return AvatarMediumProps;
  }}

  font-weight: ${theme.fontWeight.regular};
  color: ${theme.colors.white};
  font-family: sans-serif;
  border-radius: ${theme.radii.full};
  display: inline-block;
  overflow: hidden;
`;

export const AvatarContent = styled.div<{ color: keyof typeof theme.colors }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    theme.colors[props.color as keyof typeof theme.colors]};

  .personIcon {
    width: 240px;
    height: 240px;
    padding: 8px;
  }
`;

export const AvatarImage = styled.img<AvatarImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
