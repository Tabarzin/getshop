import styles from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav_items}>
          <li>
            <a href=""> Преимущества</a>
          </li>
          <li>
            <a href="">Как работаем</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
