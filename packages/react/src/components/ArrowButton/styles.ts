import styled from "styled-components";
import { theme } from "../../styles";

export const ArrowButtonContent = styled.button<{ isDisabled?: boolean }>`
  border: none;
  color: ${(props) =>
    props.isDisabled ? theme.colors.fog : theme.colors.black};
  background-color: ${theme.colors.white};
  cursor: pointer;

  .Icon {
    margin-top: ${theme.space[1]};
    width: ${theme.space[5]};
    height: ${theme.space[5]};
  }
`;
