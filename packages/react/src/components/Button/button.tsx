import { styled } from "styled-components";
import {
  radii,
  colors,
  fontSize,
  fontWeight,
  fonts,
} from "@busca-milhas-ui/tokens";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  kind?: "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 8rem;
  cursor: pointer;
  margin: auto;
  font-size: ${fontSize.md};
  font-weight: ${fontWeight.bold};
  border-radius: ${radii.xs};
  font-family: ${fonts.montserrat};

  border-radius: ${(props) => {
    switch (props.size) {
      case "sm":
        return radii.sm;
      case "lg":
        return radii.xs;
      default:
        return radii.lg;
    }
  }};

  padding: ${(props) => {
    let paddingTB: number;

    switch (props.size) {
      case "sm":
        paddingTB = 0.31;
        break;
      case "lg":
        paddingTB = 1.125;
        break;
      default:
        paddingTB = 0.62;
        break;
    }

    return `${paddingTB}rem 3.375rem`;
  }};

  background-color: ${(props) => {
    if (props.kind == "secondary") {
      return `${colors.white}`;
    } else {
      return `${colors.azure}`;
    }
  }};

  border: ${(props) => {
    if (props.kind == "secondary") {
      return `${colors.azure} 1px solid`;
    } else {
      return `none`;
    }
  }};

  color: ${(props) => {
    if (props.kind == "secondary") {
      return `${colors.azure}`;
    } else {
      return `${colors.white}`;
    }
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.kind !== "secondary") {
        return `${colors.gradientBlue}`;
      }
    }};

    color: ${(props) => {
      if (props.kind == "secondary") {
        return `${colors.gradientBlue}`;
      }
    }};

    border: ${(props) => {
      if (props.kind == "secondary") {
        return `${colors.gradientBlue} 1px solid`;
      }
    }};
  }

  &:active {
    background-color: ${(props) => {
      if (props.kind !== "secondary") {
        return `${colors.darkPurple}`;
      }
    }};

    color: ${(props) => {
      if (props.kind == "secondary") {
        return `${colors.darkPurple}`;
      }
    }};

    border: ${(props) => {
      if (props.kind == "secondary") {
        return `${colors.darkPurple} 1px solid`;
      }
    }};
  }

  &:disabled {
    cursor: not-allowed;

    background-color: ${(props) => {
      if (props.kind !== "secondary") {
        return `${colors.fog}`;
      }
    }};

    color: ${(props) => {
      if (props.kind == "secondary") {
        return `${colors.fog}`;
      } else {
        return `${colors.smoke}`;
      }
    }};

    border: ${(props) => {
      if (props.kind == "secondary") {
        return `${colors.fog} 1px solid`;
      }
    }};
  }

  @media (min-width: 720px) {
    min-width: 9.2rem;

    border-radius: ${(props) => {
      switch (props.size) {
        case "sm":
          return radii.sm;
        case "lg":
          return radii.md;
        default:
          return radii.lg;
      }
    }};

    padding: ${(props) => {
      let paddingTB: number;

      switch (props.size) {
        case "sm":
          paddingTB = 0.31;
          break;
        case "lg":
          paddingTB = 1;
          break;
        default:
          paddingTB = 0.62;
          break;
      }

      return `${paddingTB}rem 3.375rem`;
    }};

    box-shadow: ${(props) => {
      if (props.kind !== "secondary") {
        return `2px 10px 30px 0px rgba(37, 37, 39, 0.20)`;
      }
    }};
  }
`;

Button.displayName = "Button"
