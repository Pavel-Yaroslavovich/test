import { useState } from "react";
import styles from "./app.module.css";
import { ProductList } from "./components/productList/ProductList";
import { TextField } from "@mui/material";

export const App = () => {
  const [valueSearch, setValueSearch] = useState<string>("");

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
