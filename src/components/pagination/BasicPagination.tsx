import { Pagination } from "@mui/material";

interface BasicPaginationProps {
  currentPage: number;
  changePage: (page: number) => void;
}

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
