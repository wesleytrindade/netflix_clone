import { MagnifyingGlass } from "phosphor-react";
import styles from "./Header.module.scss";

import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Search } from "./Search";


export function Header() {
  return (
    <nav className={styles.container}>
      <div className={styles.container__nav__left}>
        <Logo />
        <Menu />
      </div>

      <div className={styles.container__nav_right}>
        <Search/>
      </div>
    </nav>
  );
}
