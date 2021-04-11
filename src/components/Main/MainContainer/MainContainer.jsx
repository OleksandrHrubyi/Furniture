import PropTypes from "prop-types";
import styles from "./mainContainer.module.css";

function MainContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

MainContainer.propTypes = {
  children: PropTypes.node,
};
export default MainContainer;
