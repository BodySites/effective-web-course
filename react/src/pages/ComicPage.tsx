import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Pages/DetailPage.module.css";
import comics from "../mocks/comicsMock";
import NotFound from "./NotFound";
import { comicType } from "../types/comicType";

const ComicPage: FC = () => {
  const id = useParams()?.id;
  let comicItem: comicType | undefined;

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
        <ul className={styles.list}>
          {comicItem["characters"].map((character) => (
            <li>
              <a href={"/characters/" + character.id}>{character.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default ComicPage;
