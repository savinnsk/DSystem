import { TooltipContainer, TooltipContent } from "./styles";

export interface TooltipProps {
  kind: "top" | "bottom" | "left" | "right";
  text: string;
  isVisible: boolean;
}

export const Tooltip = ({
  kind = "bottom",
  isVisible = true,
  text,
}: TooltipProps) => {
  return (
    <TooltipContainer>
      <TooltipContent kind={kind} isVisible={isVisible}>
        <p className="text">{text}</p>
      </TooltipContent>
    </TooltipContainer>
  );
};
