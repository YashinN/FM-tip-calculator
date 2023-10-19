import styles from "./ResetButton.module.css";

const ResetButton = ({ isCalc }) => {
  return (
    <button className={styles.reset_btn} disabled={!isCalc}>
      reset
    </button>
  );
};

export default ResetButton;
