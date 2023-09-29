import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types.ts";

const Button = ({ path, text }: ButtonProps) => {
  return (
    <div>
      <button className={styles["btn-wrapper"]}>
        {path && (
          <div className={styles["btn-img"]}>
            <img src={path} alt="button-icon"></img>
          </div>
        )}
        <div className={styles["btn-text"]}>
          <span>{text}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
