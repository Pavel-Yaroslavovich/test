import { Card } from "./Card";
import styles from "./card.module.css";
import { Product } from "../../types";

interface ProductListProps {
  products: Product[];
}

export const CardList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.cardList}>
      {products.map((product) => (
        <Card
          key={product.id}
          brand={product.brand}
          id={product.id}
          price={product.price}
          product={product.product}
        />
      ))}
    </div>
  );
};
