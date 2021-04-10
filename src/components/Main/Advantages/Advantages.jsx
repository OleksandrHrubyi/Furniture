import styles from "./advantages.module.css";
import Responsive from "../../Slider/Slider";

function Advantages() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Наші переваги</h2>
      <Responsive />
    </section>
  );
}

export default Advantages;
