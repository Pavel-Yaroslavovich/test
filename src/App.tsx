import { useState } from "react";
import "./app.module.css";
import { useProductData } from "./components/useProductData";
import { ProductSearch } from "./components/productSearch/ProductSearch";
import { Spinners } from "./components/spinners/Spinners";
import { ProductList } from "./components/card/ProductList";

export const App = () => {
  const { isLoading, productData } = useProductData();
  const [valueSearch, setValueSearch] = useState<string>("");

  return (
    <div className="app">
      <ProductSearch
        valueSearch={valueSearch}
        setValueSearch={setValueSearch}
      />
      {isLoading ? (
        <Spinners />
      ) : (
        <ProductList products={productData} valueSearch={valueSearch} />
      )}
    </div>
  );
};

export default App;
