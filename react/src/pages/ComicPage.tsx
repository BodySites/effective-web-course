import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Pages/DetailPage.module.css";
import comics from "../mocks/comicsMock";
import NotFound from "./NotFound";
import cardType from "../types/cardType";

const ComicPage: FC = () => {
  const id = useParams().id;
  let comicItem: cardType | null = null;

  comics.forEach((comic) => {
    if (comic.id.toString() === id) {
      comicItem = comic;
      return;
    }
  });

  return comicItem ? (
    <div className={styles.page}>
      <img src={comicItem["img"]} alt="" />
      <div className={styles.data}>
        <div className={styles.name}>{comicItem["name"]}</div>
        <div className={styles.description}>{comicItem["description"]}</div>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>Characters</div>
        <ul className={styles.list}></ul>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default ComicPage;
