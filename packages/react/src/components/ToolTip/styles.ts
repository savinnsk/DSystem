import styled from "styled-components";
import { theme } from "../../styles";

const kindMapper: any = {
  top: {
    top: "-12px",
    left: "20%",
    transform: "translateX(-50%)",
    borderBottom: `12px solid ${theme.colors.azure}`,
    borderLeft: "12px solid transparent",
    borderRight: "12px solid transparent",
  },
  left: {
    left: "-12px",
    top: "20%",
    transform: "translateY(-50%)",
    borderTop: "12px solid transparent",
    borderBottom: "12px solid transparent",
    borderRight: `12px solid ${theme.colors.azure}`,
  },
  right: {
    right: "-12px",
    top: "20%",
    transform: "translateY(-50%)",
    borderTop: "12px solid transparent",
    borderBottom: "12px solid transparent",
    borderLeft: `12px solid ${theme.colors.azure}`,
  },
  bottom: {
    top: "100%",
    left: "12px",
    borderTop: `12px solid ${theme.colors.azure}`,
    borderLeft: "12px solid transparent",
    borderRight: "12px solid transparent",
  },
};

export const TooltipContainer = styled.div`
  @media (max-width: 750px) {
    width: 163.74px;

    .text {
      font-size: ${theme.fontSizes.md};
    }
  }

  height: 75.676px;
  width: 200px;
  position: relative;
  display: inline-block;
  text-align: center;

  .text {
    margin-top: 30px;
    color: ${theme.colors.black};
    font-family: ${theme.fonts.montserrat};
    font-size: ${theme.fontSizes.lg};
    font-weight: ${theme.fontWeight.regular};
  }
`;

export const TooltipContent = styled.div<{ isVisible: boolean; kind: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.azure};
  border-radius: 4px;
  left: 50%;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    ${(props) => kindMapper[`${props.kind}`]}
  }
`;
