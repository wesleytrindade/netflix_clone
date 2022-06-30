import styles from "./Menu.module.scss";

export function Menu() {
  return (
    <div className={styles.menu}>
      <ul className={styles.menu__list}>
        <li>
          <a href="#"> Explorar </a>
        </li>
        <li>
          <a href="#"> Filmes </a>
        </li>
        <li>
          <a href="#"> Séries </a>
        </li>
        <li>
          <a href="#"> Destaques </a>
        </li>
      </ul>
    </div>
  );
}
