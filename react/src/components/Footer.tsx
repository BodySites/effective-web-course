import stylesFooter from "../styles/Components/Footer.module.css";
import marvelLogo from "../../public/marvel_logo.svg";

export default function Footer() {
  const year: number = new Date().getUTCFullYear();
  return (
    <div className={stylesFooter.footer}>
      <img src={marvelLogo} alt="Marvel logo" />
      <div>Data provided by Marvel. © {year} MARVEL</div>
      <a href="https://developer.marvel.com" target="_blank">
        developer.marvel.com
      </a>
    </div>
  );
}
