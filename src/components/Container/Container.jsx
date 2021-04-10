import styles from "../Container/container.module.css";
import PropTypes from "prop-types";
function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
