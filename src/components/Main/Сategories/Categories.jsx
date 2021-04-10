import styles from "./categories.module.css";
import { NavLink, withRouter } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { dataCategories, dataThings } from "../../../data/categories";

function Categories() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Категорії товарів</h2>
      <div className={styles.subContainer}>
        <ul className={styles.list}>
          {dataCategories.map((el) => {
            return (
              <li className={styles.iconBox} key={el.title}>
                <NavLink
                  activeStyle={{
                    fill: " #44c697",
                  }}
                  to={el.link}
                >
                  <ReactSVG src={el.src} className={styles.iconCateg} />
                  <h3>{el.title}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.secondaryContainer}>
        <ul className={styles.listThings}>
          {dataThings.map((el) => {
            return (
              <li className={styles.listThingsItem} key={el.title}>
                <a className={styles.linkThings} href="/">
                  <div>
                    <picture>
                      <source media="(max-width: 600px)" srcSet={el.src1x} />
                      <source media="(min-width: 601px)" srcSet={el.src} />
                      <img className={styles.img} src={el.src} alt={el.title} />
                    </picture>
                    {/* <img className={styles.img} src={el.src} alt={el.title} /> */}
                  </div>
                  <div className={styles.info}>
                    <h3 className={styles.subTitle}>{el.title}</h3>
                    <div className={styles.priceContainer}>
                      <p
                        className={
                          el.oldPrice
                            ? styles.priceTitleActive
                            : styles.priceTitle
                        }
                      >
                        {el.price}
                      </p>
                      {el.oldPrice && (
                        <p
                          className={
                            styles.oldPrice
                              ? styles.deactivePrice
                              : styles.oldPrice
                          }
                        >
                          {el.oldPrice}
                        </p>
                      )}
                    </div>
                  </div>
                  {el.stick && (
                    <div className={styles.stickContainer}>
                      <ul>
                        {el.stick.map((el) => {
                          return (
                            <li key={el} className={styles.itemStick}>
                              {el}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <NavLink
          className={styles.btnCat}
          activeStyle={{
            color: "white",
          }}
          to="/catalog"
        >
          В каталог
        </NavLink>
      </div>
    </section>
  );
}

export default withRouter(Categories);
