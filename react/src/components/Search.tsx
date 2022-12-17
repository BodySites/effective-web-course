import React, { FC } from "react";
import characters from "../mocks/charactersMock";
import comics from "../mocks/comicsMock";
import series from "../mocks/seriesMock";
import styles from "../styles/Components/Search.module.css";

interface searchType {
  type: string;
}

const Search: FC<searchType> = (props) => {
  return (
    <div className={styles.search}>
      <div>
        <span className={styles.type}>{props.type}</span>
        <span className={styles.length}>
          (
          {props.type === "Characters"
            ? characters.length
            : props.type === "Comics"
            ? comics.length
            : series.length}
          )
        </span>
      </div>
      <div className={styles.line}>
        <input
          type="text"
          placeholder={"Search for " + props.type + " by name"}
        />
        <button>SEARCH</button>
      </div>
    </div>
  );
};

export default Search;
