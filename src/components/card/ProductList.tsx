import { CardList } from "../card/CardList";
import { Product } from "../../types/interfaceProduct";
import { BasicPagination } from "../pagination/BasicPagination";
import { useState, useEffect } from "react";
import { fetchData } from "../fetchData";
import { Spinners } from "../spinners/Spinners";
import styles from "./card.module.css";

interface ProductListProps {
  valueSearch: string;
}

export const ProductList = ({ valueSearch }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(currentPage);
        setNewProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  console.log(newProducts);

  const filteredProducts = newProducts.filter((product) => {
    const productName = product.product.toLowerCase();
    const productBrand = product.brand?.toLowerCase();
    const productPrice = product.price.toString();
    const searchValue = valueSearch.toLowerCase();

    return (
      productName.includes(searchValue) ||
      (productBrand && productBrand.includes(searchValue)) ||
      productPrice.startsWith(searchValue)
    );
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {isLoading ? (
        <Spinners isLoadingSpinners={isLoading} />
      ) : (
        <div>
          <CardList products={filteredProducts} />
          <div className={styles.basicPagination}>
            <BasicPagination
              currentPage={currentPage}
              changePage={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};
