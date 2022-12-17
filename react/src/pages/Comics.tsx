import React, { FC } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import comics from "../mocks/comicsMock";
import styles from "../styles/Pages/Comics.module.css";

const Comics: FC = () => {
  return (
    <div className={styles.page}>
      <Search type="Comics" />
      <div className={styles.comics}>
        {comics.map((comic) => (
          <Card {...comic} key={comic.id} />
        ))}
        {comics.map((comic) => (
          <Card {...comic} key={comic.id} />
        ))}
        {comics.map((comic) => (
          <Card {...comic} key={comic.id} />
        ))}
      </div>
    </div>
  );
};

export default Comics;
