import styles from "./address.module.css";
import stylesModal from "./modalOpen.module.css";
import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { CSSTransition } from "react-transition-group";
import { ReactSVG } from "react-svg";
import logoMobile from "../../../image/logoMobile.svg";
// import { FaTelegramPlane, FaFacebookF } from "react-icons/fa";
// import { AiOutlineInstagram } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import SocNet from "../SocNet/SocNet";
import { NavLink, withRouter } from "react-router-dom";

const data = [
  { name: "ГОЛОВНА", link: "/main" },
  { name: "АКЦІЇ", link: "/promo" },
  { name: "ДОСТАВКА ТА ОПЛАТА", link: "/delivery" },
  { name: "ПРО НАС", link: "/about" },
  { name: "КОНТАКТИ", link: "/contacts" },
];

function Address() {
  const [modal, setModal] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const handleOnClick = () => {
    setModal(!modal);
  };

  const handleOpenModal = () => {
    setModalMenu(!modalMenu);
  };

  return (
    <div className={styles.addressContainer}>
      <div className={styles.socialContainer}>
        <p className={styles.info}>Ми в соціальних мережах:</p>
        <SocNet color="#1e2e36" />

        <div className={styles.contactsContainer}>
          <a className={styles.link} href="tel:380991112233">
            <span className={styles.phoneIconContainer}>
              <BsPhone />
            </span>

            <span className={styles.phoneContainer}>(099) 111 22 33</span>
          </a>
          <button
            onClick={handleOnClick}
            type="button"
            className={styles.iconArrowDown}
          >
            {" "}
            <IoIosArrowDown />
          </button>

          <CSSTransition
            unmountOnExit
            in={modal}
            timeout={3000}
            classNames={styles}
          >
            <div className={styles.numbursPopup}>
              <ul>
                <li className={styles.additNumbers}>
                  <a href="tel:0990099000">(099) 009 90 00</a>
                </li>
                <li>
                  <a href="tel:099007000">(099) 007 70 00</a>
                </li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
      <nav className={styles.nav}>
        <Navigation list={data} />
      </nav>
      <div className={stylesModal.mobileBox}>
        <button
          onClick={handleOpenModal}
          className={styles.btnMenu}
          type="button"
        >
          Menu
        </button>

        <CSSTransition
          unmountOnExit
          in={modalMenu}
          timeout={3000}
          classNames={stylesModal}
        >
          <nav className={stylesModal.navMobile}>
            <Navigation list={data} />
          </nav>
        </CSSTransition>
      </div>
      <div className={styles.logoMobile}>
        <NavLink to="/">
          {" "}
          <ReactSVG src={logoMobile} />
        </NavLink>
      </div>
    </div>
  );
}

export default withRouter(Address);
