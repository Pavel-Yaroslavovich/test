import { CardList } from "../card/CardList";
import { Product } from "../../types";
import { BasicPagination } from "../pagination/BasicPagination";
import { useState, useEffect } from "react";
import { fetchData } from "../fetchData";
import { Spinners } from "../spinners/Spinners";

interface ProductListProps {
  valueSearch: string;
}

export const ProductList = ({ valueSearch }: ProductListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchData(currentPage);
        setNewProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

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

  return (
    <div>
      {isLoading ? (
        <Spinners />
      ) : (
        <div>
          <CardList products={filteredProducts} />
          <BasicPagination
            currentPage={currentPage}
            changePage={(page: number) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};
