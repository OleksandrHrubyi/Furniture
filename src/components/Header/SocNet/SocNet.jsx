import styles from "./soc.module.css";
import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";

function SocNet({ color }) {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="/">
            <IconContext.Provider
              value={{
                color: { color },
                className: styles.icon,
                size: "1.4em",
              }}
            >
              <FaTelegramPlane />
            </IconContext.Provider>
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/">
            {" "}
            <IconContext.Provider
              value={{
                color: { color },
                className: styles.icon,
                size: "1.2em",
              }}
            >
              <FaFacebookF />
            </IconContext.Provider>
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/">
            <IconContext.Provider
              value={{
                color: { color },
                className: styles.icon,
                size: "1.5em",
              }}
            >
              <AiOutlineInstagram />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocNet;
