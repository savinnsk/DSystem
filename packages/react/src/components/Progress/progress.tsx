import { HTMLAttributes } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";

import * as S from "./styles";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  kind?: "default" | "percent" | "completed" | "error";
  size?: "sm" | "md";
  percentage?: number;
}

export const Progress = ({ kind, size, percentage }: ProgressProps) => {
  return (
    <S.ProgressContainer kind={kind} size={size}>
      <S.ProgressBar kind={kind} size={size} percentage={percentage} />
      {kind == "percent" && <S.ProgressSpan>{percentage || 0}%</S.ProgressSpan>}
      {kind == "completed" && <BsCheckCircleFill />}
      {kind == "error" && <IoMdCloseCircle />}
    </S.ProgressContainer>
  );
};
