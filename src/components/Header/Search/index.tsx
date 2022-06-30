import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

import styles from "./Search.module.scss";


import { SearchBar } from "./SearchBar";

export function Search() {

  const [showBar, setShowBar] = useState(false);

  return (
    <div className={styles.search_container}>
      <button type="button" className={styles.search_button} onClick={()=> {setShowBar(!showBar);}}>
        <MagnifyingGlass size={24} />
      </button>

      <SearchBar showBar = {showBar}/>
    </div>
  );
}
