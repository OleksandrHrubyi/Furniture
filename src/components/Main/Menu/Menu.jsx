import styles from "./menu.module.css";
import MainNavigation from "../MainNavigation/MainNavigation";
import Logo from "../../Logo/Logo";
import { ReactSVG } from "react-svg";
import basketIcon from "../../../image/basc.svg";
import logoIcon from "../../../image/logo.svg";
const range = [
  {
    name: "ДИВАНИ",
    link: "/",
  },
  {
    name: "ЛІЖКА",
    link: "/",
  },
  {
    name: "КРІСЛА",
    link: "/",
  },
  {
    name: "КОМОДИ",
    link: "/",
  },
  {
    name: "ШАФИ",
    link: "/",
  },
  {
    name: "КУХНЯ",
    link: "/",
  },
];

function Menu() {
  return (
    <section className={styles.menu}>
      <MainNavigation data={range} />
      <div className={styles.logoContainer}>
        <Logo src={logoIcon} />
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btnBin} type="button">
          {" "}
          <span className={styles.binIcon}>
            {" "}
            <ReactSVG src={basketIcon} />
          </span>
          КОШИК
        </button>
        <button className={styles.btnCall} type="button">
          ЗАМОВИТИ ДЗВІНОК
        </button>
      </div>
    </section>
  );
}

export default Menu;
