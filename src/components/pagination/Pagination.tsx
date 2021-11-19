import React from "react";
import { PageButton, FlexRow } from "./Pagination.styles";

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, onPageChange }) => {
  const isDisabledButton = currentPage === 1;

  const handlePageChangeClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <FlexRow>
      <PageButton
        disabled={isDisabledButton}
        onClick={() => handlePageChangeClick(1)}
      >
        First
      </PageButton>
      <PageButton
        disabled={isDisabledButton}
        onClick={() => handlePageChangeClick(currentPage - 1)}
      >
        Prev
      </PageButton>
      <PageButton>{currentPage}</PageButton>
      <PageButton onClick={() => handlePageChangeClick(currentPage + 1)}>
        Next
      </PageButton>
    </FlexRow>
  );
};

export default Pagination;
