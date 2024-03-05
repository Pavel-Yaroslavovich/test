import styles from "./spinners.module.css";

type SpinnerProps = {
  isLoadingSpinners: boolean;
};

export const Spinners = ({ isLoadingSpinners }: SpinnerProps) => {
  return (
    <div className={styles.center}>
      {isLoadingSpinners ? (
        <div className={styles["sk-chase"]}>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
          <div className={styles["sk-chase-dot"]}></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
