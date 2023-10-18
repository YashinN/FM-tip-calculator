import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={styles.main_header}>
        <span className={styles.header_top}>spli</span>
        <span>tter</span>
      </h1>
    </header>
  );
};

export default Header;
