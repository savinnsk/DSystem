import { colors, fontSize, fonts } from "@busca-milhas-ui/tokens";
import styled from "styled-components";
import { TogglerProps } from "./toggler";

export const TogglerWrapper = styled.label<TogglerProps>`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 26px;
  border-radius: 15px;
  background-color: ${(props) => {
    if (props.disabled) {
      return `${colors.disabled}`;
    } else {
      return `${colors.white}`;
    }
  }};
  cursor: ${(props) => {
    if (props.disabled) {
      return "not-allowed";
    } else {
      return "pointer";
    }
  }};
  border: ${(props) => {
    if (props.disabled) {
      return `0.5px ${colors.silver} solid`;
    } else {
      return `0.5px ${props.isChecked ? colors.white : colors.azure} solid`;
    }
  }};
`;

export const TogglerInput = styled.input<TogglerProps>`
  display: none;

  &:checked + span {
    background-color: ${({ disabled }) =>
      disabled ? `${colors.silver}` : `${colors.azure}`};
  }

  &:checked + span:before {
    transform: translateX(34px);
    background-color: ${({ disabled }) =>
      disabled ? `${colors.fog}` : `${colors.white}`};
  }
`;

export const TogglerSlider = styled.span<TogglerProps>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 15px;
  background-color: ${({ disabled }) =>
    disabled ? `${colors.silver}` : `${colors.white}`};
  transition: 0.4s;
  display: flex;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    left: 4%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ disabled }) =>
      disabled ? `${colors.fog}` : `${colors.azure}`};
    transition: 0.4s;
  }
`;

export const TogglerLabel = styled.span<TogglerProps>`
  font-family: ${fonts.montserrat};
  font-size: ${fontSize.sm};
  display: ${({ kind }) => (kind === "with-label" ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: ${({ isChecked }) => (isChecked ? "5%" : "50%")};
  transform: ${({ isChecked }) =>
    isChecked ? "translateX(0%)" : "translateX(-50%)"};
  transform: translateY(-50%);
  font-size: 12px;
  color: ${({ disabled, isChecked }) =>
    disabled
      ? `${colors.fog}`
      : isChecked
      ? `${colors.white}`
      : `${colors.azure}`};
`;
