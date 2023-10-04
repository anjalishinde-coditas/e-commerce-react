import styles from "./ProductInfo.module.scss";
import { ProductInfoProps } from "./ProductInfo.types.ts";

const ProductInfo = ({}: ProductInfoProps) => {
  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["heading"]}>
        <span className={styles["heading"]}>World Top </span>
        <span className={styles["heading-color"]}>
          Themes, Plugins & Templates
        </span>
      </div>
      <span className={styles["content"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
        ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit
        in id hac platea leo vulputate.
      </span>
    </div>
  );
};

export default ProductInfo;
