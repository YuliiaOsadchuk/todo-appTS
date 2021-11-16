import React from "react";
import { PageButton, FlexRow } from "./Pagination.styles";

interface Props {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage, onPageChange }) => {
  return (
    <FlexRow>
      <PageButton
        className="btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        First
      </PageButton>
      <PageButton
        className="btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </PageButton>
      <PageButton className="btn current-page">{currentPage}</PageButton>
      <PageButton className="btn" onClick={() => onPageChange(currentPage + 1)}>
        Next
      </PageButton>
    </FlexRow>
  );
};

export default Pagination;
