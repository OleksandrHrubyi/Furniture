import styles from "./header.module.css";
import Address from "./Address/Adress";

function Header() {
  return (
    <header className={styles.header}>
      <Address />
    </header>
  );
}

export default Header;
