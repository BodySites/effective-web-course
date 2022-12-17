import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Pages/CharacterPage.module.css";
import characters from "../mocks/charactersMock";
import NotFound from "./NotFound";
import cardType from "../types/cardType";

const CharacterPage: FC = () => {
  const id = useParams().id;
  let characterItem: cardType | null = null;

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
        <ul className={styles.list}></ul>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>Series</div>
        <ul className={styles.list}></ul>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

export default CharacterPage;
