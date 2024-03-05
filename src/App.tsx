import { useEffect, useState } from "react";
import styles from "./app.module.css";
import { useProductData } from "./components/hooks/useProductData";
import { Spinners } from "./components/spinners/Spinners";
import { ProductList } from "./components/card/ProductList";
import { fetchData } from "./components/fetchData";
import { TextField } from "@mui/material";

export const App = () => {
  const { isLoading, productData } = useProductData();
  const [valueSearch, setValueSearch] = useState<string>("");

  const [isLoadingSpinners, setIsLoadingSpinners] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      try {
        await fetchData(currentPage);
        setIsLoadingSpinners(true);
      } catch (error) {
        console.error(error);
        setIsLoadingSpinners(false);
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
      {isLoading ? (
        <Spinners isLoadingSpinners={isLoadingSpinners} />
      ) : (
        <ProductList products={productData} valueSearch={valueSearch} />
      )}
    </div>
  );
};

export default App;
