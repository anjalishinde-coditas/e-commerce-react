import { useEffect } from "react";
import styles from "./Avatar.module.scss";
import { AvatarProps } from "./Avatar.types.ts";

const Avatar = ({ path, text, active = false }: AvatarProps) => {
  function getAbbreviation(name: string) {
    const words = name.split(/(?=[A-Z])/) || name.split(" ");
    let abbreviation = "";
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > 0) {
        abbreviation += word[0].toUpperCase();
      }
      if (i === 1) {
        break;
      }
    }
    return abbreviation;
  }

  return (
    <div>
      {path ? (
        <div
          className={`${styles["avatar-img"]} ${active && styles["active"]} ${
            !active && styles["not-active"]
          }`}
        >
          <img className={styles["img"]} src={path}></img>
        </div>
      ) : (
        <div className={styles["avatar-text"]}>
          <span className={styles["avatar-initial"]}>
            {text ? getAbbreviation(text) : ""}
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
