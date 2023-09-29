import Header from "./Header/Header.tsx";
import ProductImages from "./ProductImages/ProductImages.tsx";
import ProductInfo from "./ProductInfo/ProductInfo.tsx";
import styles from "./ProductTopSection.module.scss";
import { ProductTopSectionProps } from "./ProductTopSection.types.ts";

const ProductTopSection = ({}: ProductTopSectionProps) => {
  return (
    <div className={styles["main-section"]}>
      <div className={styles["header"]}>
        <Header></Header>
      </div>
      <div className={styles["image-content-wrapper"]}>
        <div className={styles["content-wrapper"]}>
          <ProductInfo></ProductInfo>
        </div>
        <div className={styles["image-wrapper"]}>
          <ProductImages></ProductImages>
        </div>
      </div>
    </div>
  );
};

export default ProductTopSection;
