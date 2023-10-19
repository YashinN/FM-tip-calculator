import styles from "./ResetButton.module.css";

const ResetButton = ({ isCalc, setBill, setNumPeople, setTipPercentage }) => {
  const handleReset = () => {
    setBill("");
    setNumPeople("");
    setTipPercentage(null);
  };
  return (
    <button
      className={styles.reset_btn}
      disabled={!isCalc}
      onClick={() => handleReset()}
    >
      reset
    </button>
  );
};

export default ResetButton;
