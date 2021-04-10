import styles from "./footer.module.css";
import { NavLink, withRouter } from "react-router-dom";

import footerImg from "../../image/footer.jpg";
import Logo from "../Logo/Logo";
import logoIconWhite from "../../image/logoWhite.svg";
import { ReactSVG } from "react-svg";
import geoIcon from "../../image/geo.svg";
import footerIconPhone from "../../image/footerPhone.svg";
import calendar from "../../image/calendar.svg";
import SocNet from "../Header/SocNet/SocNet";
import logoCompany from "../../image/logoCompany.svg";
import { AiOutlineArrowUp } from "react-icons/ai";

const data = [
  { name: "ДИВАНИ", link: "/sofa" },
  { name: "ЛІЖКА", link: "/bed" },
  { name: "КРІСЛА", link: "/armchair" },
  { name: "ШАФИ", link: "/wardrobe" },
  { name: "КУХНІ", link: "/kitchen" },
  { name: "КОМОДИ", link: "/dressers" },
];

const dataLink = [
  { name: "AКЦІЇ", link: "/promo" },
  { name: "ДОСТАВКА ТА ОПЛАТА", link: "/delivery" },
  { name: "ПРО НАС", link: "/about" },
  { name: "КОНТАКТИ", link: "/contacts" },
];

function Footer() {
  const handleOnclick = () => {
    window.scrollTo({ top: 10, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.infoContainer}>
        <div className={styles.box}>
          <div className={styles.logoContainer}>
            <Logo src={logoIconWhite} />
          </div>
          <div className={styles.subContainer}>
            <div className={styles.footerContainer}>
              <section className={styles.section}>
                <ul className={styles.footerList}>
                  {data.map((el) => {
                    return (
                      <li key={el.name} className={styles.item}>
                        <NavLink className={styles.link} to={el.link}>
                          <span className={styles.dash}></span>
                          {el.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </section>
              <section className={styles.section}>
                <ul className={styles.footerList}>
                  {dataLink.map((el) => {
                    return (
                      <li className={styles.item} key={el.name}>
                        <NavLink className={styles.link} to={el.link}>
                          <span className={styles.dash}></span>
                          {el.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
            <div className={styles.footerContacts}>
              <div className={styles.boxContainer}>
                <a
                  className={styles.geoLink}
                  href="https://goo.gl/maps/yfCnDbJ2M1gSk7R1A"
                >
                  <ReactSVG src={geoIcon} />{" "}
                  <span className={styles.geoText}>TEST</span>
                </a>
              </div>
              <div className={styles.calendar}>
                <ReactSVG src={calendar} />{" "}
                <p className={styles.calendarInfo}>Пн-Пт, з 10 до 18</p>
              </div>

              <div className={styles.phoneContainer}>
                <ul className={styles.numberList}>
                  <li className={styles.footerItemPhone}>
                    <a className={styles.linkNumber} href="tel:380991112233">
                      {" "}
                      <ReactSVG
                        src={footerIconPhone}
                        className={styles.iconPhone}
                      />{" "}
                      (099) 111 22 33
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className={styles.linkNumber} href="tel:380992223344">
                      (099) 111 33 22
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.socContainer}>
                <p className={styles.textSocInfo}>Ми в соціальних мережах:</p>
                <SocNet color="inherit" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subFooter}>
          <div className={styles.subinfo}>
            <span className={styles.subFooterInfo}>
              © ТОВ Furniture, працюємо з 2006 року
            </span>
          </div>
          <div className={styles.subinfo}>
            <ReactSVG src={logoCompany} className={styles.iconCompany} />
            <span className={styles.subFooterInfo}>
              {" "}
              ГЛЯНЕЦЬ — РОЗРОБКА ІНТЕРНЕТ-МАГАЗИНІВ
            </span>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={footerImg} alt="sofa" />
      </div>
      <button onClick={handleOnclick} className={styles.btnUp} type="button">
        <AiOutlineArrowUp size="2em" />
      </button>
    </section>
  );
}

export default withRouter(Footer);
