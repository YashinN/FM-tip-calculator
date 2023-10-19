import styles from "./ResetButton.module.css";

const ResetButton = ({ isCalc, dispatch }) => {
  return (
    <button
      className={styles.reset_btn}
      disabled={!isCalc}
      onClick={() => dispatch({ type: "reset" })}
    >
      reset
    </button>
  );
};

export default ResetButton;
