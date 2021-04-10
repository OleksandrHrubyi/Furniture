import styles from "./menu.module.css";
import MainNavigation from "../MainNavigation/MainNavigation";
import Logo from "../../Logo/Logo";
import { ReactSVG } from "react-svg";
import basketIcon from "../../../image/basc.svg";
import logoIcon from "../../../image/logo.svg";
import { range } from "../../../data/categories";

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
