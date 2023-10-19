import styles from "./ResetButton.module.css";

const ResetButton = ({
  isCalc,
  setBill,
  setNumPeople,
  setTipPercentage,
  setIsCustom,
}) => {
  const handleReset = () => {
    setBill("");
    setNumPeople("");
    setTipPercentage(null);
    setIsCustom(false);
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
