import styles from "./mainContainer.module.css";

function MainContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default MainContainer;
