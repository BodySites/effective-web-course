import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Pages/DetailPage.module.css";
import characters from "../mocks/charactersMock";
import NotFound from "./NotFound";
import { characterType } from "../types/characterType";

const CharacterPage: FC = () => {
  const id = useParams()?.id;
  let characterItem: characterType | undefined;

  characters.forEach((character) => {
    if (character.id.toString() === id) {
      characterItem = character;
      return;
    }
  });

  return characterItem ? (
    <div className={styles.page}>
      <img src={characterItem["img"]} alt="" />
      <div className={styles.data}>
        <div className={styles.name}>{characterItem["name"]}</div>
        <div className={styles.description}>{characterItem["description"]}</div>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>Comics</div>
        <ul className={styles.list}>
          {characterItem["comics"].map((comic) => (
            <li>
              <a href={"/comics/" + comic.id}>{comic.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>Series</div>
        <ul className={styles.list}>
          {characterItem["series"].map((serial) => (
            <li>
              <a href={"/series/" + serial.id}>{serial.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default CharacterPage;
