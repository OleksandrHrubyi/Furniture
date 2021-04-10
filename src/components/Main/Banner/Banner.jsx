import styles from "./banner.module.css";
import SimpleSlider from "../../SliderFade/SliderFade";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.add}>
        <SimpleSlider />
      </div>
    </div>
  );
}

export default Banner;
