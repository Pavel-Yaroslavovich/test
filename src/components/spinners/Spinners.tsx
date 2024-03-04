import { useEffect, useState } from "react";
import { fetchData } from "../fetchData";
import styles from "./spinners.module.css";

export const Spinners = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {
    const getData = async () => {
      try {
        await fetchData(currentPage);
        setIsLoading(true);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getData();
  }, [setCurrentPage, currentPage]);
  return (
    <div className={styles.center}>
      {isLoading ? (
        <div className={styles["sk-chase"]}>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
