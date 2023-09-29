import styles from "./ProductImages.module.scss";
import { ProductImagesProps } from "./ProductImages.types.ts ";

const ProductImages = ({}: ProductImagesProps) => {
  return (
    <div className={styles["product-image-container"]}>
      <div className={styles["product-image-background"]}>
        <img
          className={styles["angular-img"]}
          src="assets/angular.svg"
          alt="angular"
        />
        <img className={styles["net-img"]} src="assets/net.svg" alt=".net" />

        <img className={styles["vite-img"]} src="assets/vite.svg" alt="vite" />
        <img
          className={styles["javascript-img"]}
          src="assets/javascript.svg"
          alt="javascript"
        />
        <img
          className={styles["laravel-img"]}
          src="assets/laravel.svg"
          alt="larvel"
        />
      </div>
    </div>
  );
};

export default ProductImages;
