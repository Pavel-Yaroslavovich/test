import { Pagination } from "@mui/material";
import styles from "./pagination.module.css";

interface BasicPaginationProps {
  currentPage: number;
  changePage: (page: number) => void;
}

export function BasicPagination({
  currentPage,
  changePage,
}: BasicPaginationProps) {
  return (
    <div className={styles.basicPagination}>
      <Pagination
        count={160}
        page={currentPage}
        onChange={(_, page) => changePage(page)}
        showFirstButton
        showLastButton
      />
    </div>
  );
}
