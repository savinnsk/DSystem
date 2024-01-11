import { ArrowButton } from "../ArrowButton/arrow-button";
import { PaginationContainer, PaginationContent, Page } from "./styles";

export interface PaginationProps {
  pages?: number;
  currentPage?: number;
  variant?: "default"| "line" | "button";
  onClickPrevPage: (page: number) => void;
  onClickNextPage: (page: number) => void;
  onClickToPage: (page: number) => void;
}

export function Pagination({
  pages = 1,
  variant = "default",
  currentPage = 1,
  onClickPrevPage,
  onClickNextPage,
  onClickToPage
}: PaginationProps) {
  const isDefault = variant === "default";

  const handleArrowClick = (direction: "left" | "right") => {
    direction === "left"
      ? onClickPrevPage(currentPage === 1 ? 1 : currentPage - 1)
      : onClickNextPage(currentPage === pages ? pages : currentPage + 1)
  }

  const ButtonMapper = {
    "default:left": (
      <ArrowButton onClick={() => handleArrowClick("left")} isDisabled={currentPage === 1} direction="left" />
    ),
    "default:right": (
      <ArrowButton onClick={() => handleArrowClick("right")} isDisabled={currentPage === pages} direction="right" />
    ),
    "line:left": "",
    "line:right": "",
    "button:left": "",
    "button:right": "",
  }

  return (
    <PaginationContainer>
      {ButtonMapper[`${variant}:left`] ?? ""}

      <PaginationContent pages={pages} variant={variant}>
        {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
          <Page
            colorDisabled={isDefault ? "white" : "disabled"}
            className="Page"
            key={page}
            isActive={currentPage === page}
            onClick={() => onClickToPage(page)}
          >
          {isDefault && page}
        </Page>
        ))}
      </PaginationContent>

      {ButtonMapper[`${variant}:right`] ?? ""}
    </PaginationContainer>
  );
}
