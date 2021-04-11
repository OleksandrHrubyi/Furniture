import styles from "./mainNavigation.module.css";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";

function MainNavifation({ data }) {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {data.map((el) => {
          return (
            <li className={styles.item} key={el.name}>
              <button
                type="button"
                value={el.name}
                className={styles.btn}
                href={el.link}
              >
                <span className={styles.box}> {el.name}</span>
                <span className={styles.iconBox}>
                  <IoIosArrowDown />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

MainNavifation.propTypes = {
  data: PropTypes.array,
};

export default MainNavifation;
