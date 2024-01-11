import { colors, fontSize, fonts } from "@busca-milhas-ui/tokens";
import { styled } from "styled-components";

export const TableContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  font-family: ${fonts.montserrat};
  color: ${colors.black};
`;

export const StyledTHead = styled.thead``;

export const StyledTable = styled.table`
  background-color: ${colors.white};
  width: 100%;
`;

export const StyledTr = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid ${colors.gainsBoro};
`;

export const StyledTh = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 7rem;
  padding: 0.5rem 1.3rem;
  font-size: ${fontSize.sm};

  &:hover {
    cursor: pointer;
  }
`;

export const StyledTb = styled.tbody``;

export const StyledTd = styled.td`
  width: 7rem;
  padding: 0.5rem 1.3rem;
  font-size: ${fontSize.xs};
`;
