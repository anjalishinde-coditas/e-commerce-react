import ProductTopSection from "../../components/ProductTopSection/ProductTopSection.tsx";
import styles from "./Home.module.scss";
import { HomeProps } from "./Home.types.ts";

const Home = ({}: HomeProps) => {
  return (
    <>
      <div className={styles["home-wrapper"]}>
        <ProductTopSection></ProductTopSection>
      </div>
    </>
  );
};

export default Home;
