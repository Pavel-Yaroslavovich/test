import { Pagination } from "@mui/material";

interface BasicPaginationProps {
  currentPage: number;
  changePage: (page: number) => void;
}

// eslint-disable-next-line no-lone-blocks
export function BasicPagination({
  currentPage,
  changePage,
}: BasicPaginationProps) {
  return (
    <>
      <Pagination
        count={50}
        page={currentPage}
        onChange={(_, page) => changePage(page)}
        showFirstButton
        showLastButton
      />
    </>
  );
}
