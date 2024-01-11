import React, { useEffect } from "react";

import * as S from "./styles";
import { ArrowUP } from "../../icons/UserInterface/ArrowUp";
import { ArrowDown } from "../../icons/UserInterface/ArrowDown";

interface ITableColumn {
  id: keyof ITableProps["data"][0];
  label: string;
  align?: "right" | "left" | "center";
  sortable?: boolean;
  direction?: "ASC" | "DSC";
}

export interface ITableProps {
  data: Record<string, string | number | React.JSX.Element>[];
  columns: ITableColumn[];
}

export const Table: React.FC<ITableProps> = ({ columns, data }) => {
  const TableHead = () => (
    <S.StyledTHead>
      <S.StyledTr>
        {columns?.map((column, index) => (
          <S.StyledTh key={index}>
            {column.sortable && column.direction == "ASC" && <ArrowUP />}
            {column.sortable && column.direction == "DSC" && <ArrowDown />}
            {column.label}
          </S.StyledTh>
        ))}
      </S.StyledTr>
    </S.StyledTHead>
  );

  const TableBody = () => (
    <S.StyledTb>
      {data?.map((row, index) => (
        <S.StyledTr key={index}>
          {columns?.map((column, index) => (
            <S.StyledTd align={column.align} key={index}>
              {row[column.id]}
            </S.StyledTd>
          ))}
        </S.StyledTr>
      ))}
    </S.StyledTb>
  );

  return (
    <S.TableContainer>
      <S.StyledTable>
        <TableHead />
        <TableBody />
      </S.StyledTable>
    </S.TableContainer>
  );
};
