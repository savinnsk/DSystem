import {
  colors,
  fontSize,
  fontWeight,
  fonts,
  radii,
} from "@busca-milhas-ui/tokens";
import { styled } from "styled-components";
import { ProgressProps } from "./progress";

export const ProgressContainer = styled.div<ProgressProps>`
  min-width: 9.25rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  color: ${(props) => {
    switch (props.kind) {
      case "completed":
        return "#20A383";
      case "error":
        return colors.blood;
      default:
        return colors.azure;
    }
  }};
`;

export const ProgressBar = styled.div<ProgressProps>`
  width: 95%;
  background: ${(props) => {
    switch (props.kind) {
      case "completed":
        return "#20A383";
      case "error":
        return `linear-gradient(90deg, ${colors.blood} 33%, ${colors.gainsBoro} 33%);`;
      default:
        return `linear-gradient(90deg, ${colors.azure} ${
          props.percentage || 0.2
        }%, ${colors.gainsBoro} ${props.percentage || 0.2}%);`;
    }
  }};
  height: ${(props) => {
    switch (props.size) {
      case "sm":
        return "0.25rem";
      default:
        return "0.5rem";
    }
  }};
  border-radius: ${radii.sm};
`;

export const ProgressSpan = styled.span`
  font-size: ${fontSize.sm};
  font-weight: ${fontWeight.bold};
  font-family: ${fonts.montserrat};
`;
