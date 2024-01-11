import { styled } from "styled-components";
import { theme } from "../../../styles/";

const CheckIconProps = `
  @media (max-width: 500px) {
    height: ${theme.space[8]};
    width: ${theme.space[8]};
  }
  height: ${theme.space[10]};
  width: ${theme.space[10]};
  background-color: ${theme.colors.azure};
  padding: 0;
  .check {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

// Styled components
export const StepContainer = styled.div`
  display: flex;
`;

export const StepContent = styled.div<{ isActive: () => boolean }>`
  @media (max-width: 500px) {
    font-size: ${theme.fontSizes.lg};
  }
  border-radius: ${theme.radii.full};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fonts.montserrat};
  font-size: ${theme.fontSizes.xl};
  color: ${(props) =>
    props.isActive() ? theme.colors.azure : theme.colors.fog};
`;

export const Step = styled.div<{ isNumeric: () => boolean }>`
  @media (max-width: 500px) {
    height: ${theme.space[6]};
    width: ${theme.space[6]};
  }

  border-radius: inherit;
  height: ${theme.space[8]};
  width: ${theme.space[8]};
  padding: ${theme.space[1]};
  margin: ${theme.space[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #dbdbdb;
  ${(props) => (!props.isNumeric() ? CheckIconProps : "")}
`;

export const BorderLine = styled.span<{ isActive: () => boolean }>`
  height: .125rem;
  margin: auto;
  margin-top: 20px;
  border-radius: .125rem;
  width: 100%;
  background-color:
    ${(props) => (props.isActive() ? theme.colors.azure : theme.colors.fog)};
`;

export const Label = styled.p<{ isPassed: () => boolean }>`
  margin: 0;
  font-family: ${theme.fonts.montserrat};
  font-size: 1rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${(props) =>
    props.isPassed() ? theme.colors.azure : theme.colors.fog};
`;
