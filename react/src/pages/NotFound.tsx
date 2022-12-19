import React, { FC } from "react";
import styles from "../styles/Pages/NotFound.module.css";

const NotFound: FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.text}>Site not found!</div>
    </div>
  );
};

export default NotFound;
