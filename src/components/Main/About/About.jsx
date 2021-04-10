import styles from "./about.module.css";
import aboutImg from "../../../image/about.jpg";
import aboutImg1x from "../../../image/about1x.jpg";

function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Про нас</h2>
      <div className={styles.container}>
        <div>
          <picture>
            <source media="(max-width: 600px)" srcSet={aboutImg1x} />
            <source media="(min-width: 601px)" srcSet={aboutImg} />
            <img className={styles.teamImg} src={aboutImg} alt="our team" />
          </picture>
        </div>
        <div className={styles.aboutContainer}>
          <article className={styles.article}>
            <p className={styles.articleText}>
              {" "}
              <span className={styles.subName}>"Furniture"</span> – "Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
            </p>
            <p className={styles.articleText}>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>{" "}
            <p className={styles.articleText}>
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
