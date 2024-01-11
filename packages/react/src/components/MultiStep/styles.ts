import { styled } from "styled-components";
import { theme } from "../../styles/";

export const MultiStepContainer = styled.div<{ steps: number }>`
  display: grid;
  gap: ${theme.space[1]};
  grid-template-columns: repeat(${(props) => props.steps}, 1fr);
`;

export const MultiStepContent = styled.div`
  align-items: center;
  align-content: center;
`;
