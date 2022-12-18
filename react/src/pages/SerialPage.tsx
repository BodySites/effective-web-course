import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Pages/DetailPage.module.css";
import series from "../mocks/seriesMock";
import NotFound from "./NotFound";
import { serialType } from "../types/serialType";

const SerialPage: FC = () => {
  const id = useParams()?.id;
  let serialItem: serialType | undefined;

  series.forEach((serial) => {
    if (serial.id.toString() === id) {
      serialItem = serial;
      return;
    }
  });

  return serialItem ? (
    <div className={styles.page}>
      <img src={serialItem["img"]} alt="" />
      <div className={styles.data}>
        <div className={styles.name}>{serialItem["name"]}</div>
        <div className={styles.description}>{serialItem["description"]}</div>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>Characters</div>
        <ul className={styles.list}>
          {serialItem["characters"].map((character) => (
            <li>
              <a href={"/characters/" + character.id}>{character.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>Comics</div>
        <ul className={styles.list}>
          {serialItem["comics"].map((comic) => (
            <li>
              <a href={"/comics/" + comic.id}>{comic.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default SerialPage;
