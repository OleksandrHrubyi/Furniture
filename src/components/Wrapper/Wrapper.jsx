import styles from "./wrapper.module.css";
import PropTypes from "prop-types";
function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node,
};

export default Wrapper;
