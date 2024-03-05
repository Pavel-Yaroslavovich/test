import styles from "./card.module.css";
import { Product } from "../types/interfaceProduct";

export const Card = ({ id, product, price, brand }: Product) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageBlock}>
        <img
          className={styles.card__image}
          src={""}
          alt={"картинка отсутствует"}
        />
      </div>
      <div className={styles.card__details}>
        <h3>{product}</h3>
        <p className={styles.card__brand}>Brand: {brand}</p>
        <p className={styles.card__price}>Price: ${price}</p>
        <span className={styles.card__id}>ID: {id}</span>
      </div>
    </div>
  );
};
