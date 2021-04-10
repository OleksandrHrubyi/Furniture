import styles from "./navigation.module.css";
import { NavLink, withRouter } from "react-router-dom";

function Navigation({ list }) {
  return (
    <ul id="listMenu" className={styles.navigation}>
      {list.map((el) => {
        return (
          <li data={el.name} key={el.name} className={styles.item}>
            <NavLink
              className={styles.link}
              activeStyle={{
                borderBottom: "3px solid #44C697",
              }}
              to={el.link}
            >
              {el.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default withRouter(Navigation);
