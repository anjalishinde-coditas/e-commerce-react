import Avatar from "../../common/Avatar/Avatar.tsx";
import styles from "./ChooseCard.module.scss";
import { ChooseCardProps } from "./ChooseCard.types.ts";

const ChooseCard = ({ path, heading, content, active }: ChooseCardProps) => {
  return (
    <div
      className={`${styles["choose-card-wrapper"]} ${
        active && styles["active"]
      }`}
    >
      <div className={styles["avatar"]}>
        <Avatar path={path} active={active}></Avatar>
      </div>
      <div className={styles["choose-heading"]}>
        <span>{heading}</span>
      </div>
      <div className={styles["choose-content"]}>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default ChooseCard;
