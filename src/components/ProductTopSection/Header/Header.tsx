import Button from "../../common/Button/Button.tsx";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types.ts";

const Header = ({}: HeaderProps) => {
  return (
    <div>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header-content"]}>
          <div className={styles["categories-btn"]}>
            <Button path={"assets/categories.svg"} text={"Categories"}></Button>
          </div>
          <div className={styles["wishlist-btn"]}>
            <Button
              path={"assets/wishlist.svg"}
              text={"wishlist"}
              notifications={10}
            ></Button>
          </div>
          <div className={styles["cart-btn"]}>
            <Button
              path={"assets/cart.svg"}
              text={"cart"}
              notifications={10}
            ></Button>
          </div>
          <div className={styles["sign-btn"]}>
            <Button path={"assets/signin.svg"} text={"sign in"}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
