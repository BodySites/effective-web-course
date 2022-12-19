import React, { FC } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import series from "../mocks/seriesMock";
import styles from "../styles/Pages/Series.module.css";

const Series: FC = () => {
  return (
    <div className={styles.page}>
      <Search type="Series" />
      <div className={styles.series}>
        {series.map((serial) => (
          <Card {...serial} key={serial.id} />
        ))}
        {series.map((serial) => (
          <Card {...serial} key={serial.id} />
        ))}
        {series.map((serial) => (
          <Card {...serial} key={serial.id} />
        ))}
      </div>
    </div>
  );
};

export default Series;
