import { Card } from "./Card";
import { nanoid } from "nanoid";
import styles from "./card.module.css";
import { Product } from "../interfaceProduct";

interface ProductListProps {
  products: Product[];
}

export const CardList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.cardList}>
      {products.map((product) => (
        <Card
          key={nanoid()}
          brand={product.brand}
          id={product.id}
          price={product.price}
          product={product.product}
        />
      ))}
    </div>
  );
};
