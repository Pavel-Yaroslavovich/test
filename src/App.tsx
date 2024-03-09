import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { ProductList } from "./components/card/ProductList";
import { fetchData } from "./components/fetchData";
import { TextField } from "@mui/material";

export const App = () => {
  const [valueSearch, setValueSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      try {
        await fetchData(currentPage);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [setCurrentPage, currentPage]);

  return (
    <div className={styles.app}>
      <div className={styles.search}>
        <TextField
          sx={{
            marginY: 6,
          }}
          fullWidth
          label="Поиск"
          value={valueSearch}
          onChange={(event) => setValueSearch(event.target.value)}
        />
      </div>
      <ProductList valueSearch={valueSearch} />
    </div>
  );
};

export default App;
