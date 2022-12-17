import React, { FC } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import characters from "../mocks/charactersMock";
import styles from "../styles/Pages/Characters.module.css";

const Characters: FC = () => {
  return (
    <div className={styles.page}>
      <Search type="Characters" />
      <div className={styles.characters}>
        {characters.map((character) => (
          <Card {...character} key={character.id} />
        ))}
        {characters.map((character) => (
          <Card {...character} key={character.id} />
        ))}
        {characters.map((character) => (
          <Card {...character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
