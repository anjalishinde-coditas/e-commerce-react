import styles from "./ProductInfo.module.scss";
import { ProductInfoProps } from "./ProductInfo.types.ts";

const ProductInfo = ({}: ProductInfoProps) => {
  return (
    <div>
      <h1>World Top Themes, Plugins & Templates</h1>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi
        ultricies habitant eget volutpat ut aenean in dolor. Praesent mi velit
        in id hac platea leo vulputate.
      </span>
    </div>
  );
};

export default ProductInfo;
