import Button from "../../common/Button/Button.tsx";
import styles from "./SearchInput.module.scss";
import { SearchInputProps } from "./SearchInput.types.ts";

const SearchInput = ({}: SearchInputProps) => {
  return (
    <div className={styles["search-input"]}>
      <input
        placeholder="e.g. 'wordpress'"
        className={styles["input-field"]}
      ></input>
      <div className={styles["search-btn"]}>
        <Button path="assets/search.svg" text="Search"></Button>
      </div>
    </div>
  );
};

export default SearchInput;
