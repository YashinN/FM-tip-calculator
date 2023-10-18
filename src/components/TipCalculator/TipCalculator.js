import styles from "./TipCalculator.module.css";

const TipCalculator = ({ children }) => {
  return <div className={styles.main_display}>{children}</div>;
};

export default TipCalculator;
