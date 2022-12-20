import { FC } from "react";
import stylesHeader from "../styles/Components/Header.module.css";
import marvelLogo from "../../public/marvel_logo.svg";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <div className={stylesHeader.header}>
      <img src={marvelLogo} alt="Marvel logo" />
      <div className={stylesHeader.navbar}>
        <NavLink
          to="/characters"
          className={({ isActive }) =>
            isActive ? stylesHeader.active : stylesHeader.a
          }
        >
          Characters
        </NavLink>
        <NavLink
          to="/comics"
          className={({ isActive }) =>
            isActive ? stylesHeader.active : stylesHeader.a
          }
        >
          Comics
        </NavLink>
        <NavLink
          to="/series"
          className={({ isActive }) =>
            isActive ? stylesHeader.active : stylesHeader.a
          }
        >
          Series
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
