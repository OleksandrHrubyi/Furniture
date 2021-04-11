import styles from "./logo.module.css";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";

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

Logo.propTypes = {
  src: PropTypes.string,
};

export default Logo;
