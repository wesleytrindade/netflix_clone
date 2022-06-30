import styles from "./Searchbar.module.scss";

import classNames from "classnames";

interface SearchBarProps {
  showBar: boolean;
}

export function SearchBar({ showBar }: SearchBarProps) {
  return (
    <div className={styles.searchbar_container}>
      <div className={styles.searchbar_container__input_container}>
        <input
          type="text"
          className={classNames(styles.searchbar_container__textinput, {
            [styles.searchbar_container__textinput__visible]: showBar,
          })}
          placeholder="Pesquisar"
        />
      </div>
    </div>
  );
}
