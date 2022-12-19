import React, { FC } from "react";
import cardType from "../types/cardType";
import styles from "../styles/Components/Card.module.css";

const Card: FC<cardType> = ({ id, name, img, description }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Card;
