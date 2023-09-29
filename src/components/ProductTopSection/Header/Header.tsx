import Button from "../../common/Button/Button.tsx";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types.ts";

const Header = ({}: HeaderProps) => {
  return (
    <div>
      <div className={styles["header-wrapper"]}>
        <div className={styles["header-content"]}>
          <div>
            <Button path={""} text={"Categories"}></Button>
            <span>Digital sell</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
