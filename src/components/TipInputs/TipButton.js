import styles from "./TipButton.module.css";

const TipButton = ({ tipPercentage, tip, onClick }) => {
  return (
    <button
      className={`${styles.tip_btn} ${
        tipPercentage === tip
          ? styles.tip_btn_selected
          : styles.tip_btn_standard
      }`}
      onClick={() => onClick(tip)}
    >
      {tip}%
    </button>
  );
};

export default TipButton;
