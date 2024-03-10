import { useState, useEffect } from "react";
import { fetchData } from "../components/fetchData";
import { Product } from "../types/index";

export const useProductData = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchDataAndSetProductData = async () => {
      setIsLoading(true);
      const data = await fetchData(1);
      setProductData(data);
      setIsLoading(false);
    };

    fetchDataAndSetProductData();
  }, []);

  return { isLoading, productData };
};
