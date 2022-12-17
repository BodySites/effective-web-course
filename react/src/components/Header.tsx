import { FC } from "react";
import { useLocation } from "react-router-dom";
import stylesHeader from "../styles/Components/Header.module.css";
import marvelLogo from "../../public/marvel_logo.svg";

const Header: FC = () => {
  const activePage: string = useLocation().pathname;

  return (
    <div className={stylesHeader.header}>
      <img src={marvelLogo} alt="Marvel logo" />
      <div className={stylesHeader.navbar}>
        <a
          href="/characters"
          className={
            activePage == "/characters" ? stylesHeader.active : stylesHeader.a
          }
        >
          Characters
        </a>
        <a
          href="/comics"
          className={
            activePage == "/comics" ? stylesHeader.active : stylesHeader.a
          }
        >
          Comics
        </a>
        <a
          href="/series"
          className={
            activePage == "/series" ? stylesHeader.active : stylesHeader.a
          }
        >
          Series
        </a>
      </div>
    </div>
  );
};

export default Header;
