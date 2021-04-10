import styles from "./mainNavigation.module.css";
import { IoIosArrowDown } from "react-icons/io";

function MainNavifation({ data }) {
  const handleOnclick = (event) => {
    console.log(event);
  };
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {data.map((el) => {
          return (
            <li className={styles.item} key={el.name}>
              <button
                onClick={handleOnclick}
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

export default MainNavifation;
