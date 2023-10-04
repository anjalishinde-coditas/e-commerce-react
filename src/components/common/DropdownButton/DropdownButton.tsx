import styles from "./DropdownButton.module.scss";
import { DropdownButtonProps } from "./DropdownButton.types.ts";

const DropdownButton = ({ path, text }: DropdownButtonProps) => {
  return (
    <button className={styles["drop-down-btn"]}>
      <div className={styles["btn-wrapper"]}>
        {path && (
          <div className={styles["btn-img"]}>
            <img src={path} alt="button-icon"></img>
          </div>
        )}
        {text && (
          <div className={styles["btn-text"]}>
            <span>{text}</span>
          </div>
        )}
      </div>
      <div>
        <img src="assets/down-arrow.svg" alt="button-icon"></img>
      </div>
    </button>
  );
};

export default DropdownButton;
