import { CardList } from "../card/CardList";
import { Product } from "../types/interfaceProduct";
import { BasicPagination } from "../pagination/BasicPagination";
import { useState } from "react";
import styles from "./card.module.css";

interface ProductListProps {
  products: Product[];
  valueSearch: string;
}
const ITEMS_PER_PAGE = 50;

export const ProductList = ({ products, valueSearch }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const filteredProducts = products.filter((product) => {
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

  const slicedProducts: Product[] = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <CardList products={slicedProducts} />
      <div className={styles.basicPagination}>
        <BasicPagination
          currentPage={currentPage}
          changePage={handlePageChange}
        />
      </div>
    </div>
  );
};
