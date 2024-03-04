import { CardList } from "../card/CardList";
import { Product } from "../interfaceProduct";
import { BasicPagination } from "../pagination/BasicPagination";
import { useState } from "react";

interface ProductListProps {
  products: Product[];
  valueSearch: string;
}

export const ProductList = ({ products, valueSearch }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 50;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <BasicPagination
          currentPage={currentPage}
          changePage={handlePageChange}
        />
      </div>
    </div>
  );
};
