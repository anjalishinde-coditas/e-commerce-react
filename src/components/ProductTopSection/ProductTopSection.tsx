import ChooseCard from "./ChooseCard/ChooseCard.tsx";
import Header from "./Header/Header.tsx";
import ProductImages from "./ProductImages/ProductImages.tsx";
import ProductInfo from "./ProductInfo/ProductInfo.tsx";
import styles from "./ProductTopSection.module.scss";
import { ProductTopSectionProps } from "./ProductTopSection.types.ts";
import SearchInput from "./SearchInput/SearchInput.tsx";

const ProductTopSection = ({}: ProductTopSectionProps) => {
  return (
    <div className={styles["main-section"]}>
      <div className={styles["header"]}>
        <Header></Header>
      </div>
      <div className={styles["image-content-wrapper"]}>
        <div className={styles["content-wrapper"]}>
          <ProductInfo></ProductInfo>
          <SearchInput></SearchInput>
        </div>
        <div className={styles["image-wrapper"]}>
          <ProductImages></ProductImages>
        </div>
      </div>
      <div className={styles["choose-wrapper"]}>
        <ChooseCard
          path={"assets/document.svg"}
          heading={"Well Documentation"}
          active={true}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis."
          }
        ></ChooseCard>
        <ChooseCard
          path={"assets/live-support.svg"}
          heading={"Live Support"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis."
          }
        ></ChooseCard>
        <ChooseCard
          path={"assets/free-resource.svg"}
          heading={"Free Resource"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis."
          }
        ></ChooseCard>
        <ChooseCard
          path={"assets/regular-update.svg"}
          heading={"Regular Update"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobor ornare in mattis."
          }
        ></ChooseCard>
      </div>
    </div>
  );
};

export default ProductTopSection;
