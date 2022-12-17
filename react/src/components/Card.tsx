import React, { FC } from "react";
import cardType from "../types/cardType";
import styles from "../styles/Components/Card.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Card: FC<cardType> = ({ id, name, img, description }) => {
  const url: string = useLocation().pathname;
  const navigate = useNavigate();

  function Redirect() {
    navigate(url + "/" + id.toString());
  }

  return (
    <div className={styles.card} onClick={Redirect.bind(this)}>
      <img src={img} alt="" />
      <div className={styles.name}>{name}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Card;
