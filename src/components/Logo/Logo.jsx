import styles from "./logo.module.css";
import { ReactSVG } from "react-svg";

function Logo({ src }) {
  return (
    <div className={styles.logo}>
      <a href="/">
        {" "}
        <ReactSVG src={src} />
      </a>
    </div>
  );
}
export default Logo;
