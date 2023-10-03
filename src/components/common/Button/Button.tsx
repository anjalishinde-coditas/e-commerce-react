import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types.ts";

const Button = ({ path, text, notifications }: ButtonProps) => {
  return !notifications ? (
    <div>
      <button className={styles["btn-wrapper"]}>
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
      </button>
    </div>
  ) : (
    <div className={styles["notification-img-container"]}>
      <button className={styles["notification-wrapper"]}>
        {path && (
          <div className={styles["notification-img"]}>
            <img src={path} alt="button-icon"></img>
          </div>
        )}
        {notifications && (
          <div className={styles["notification-count"]}>{notifications}</div>
        )}
      </button>
    </div>
  );
};

export default Button;
