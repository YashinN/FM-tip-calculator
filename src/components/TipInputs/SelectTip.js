import TipButton from "./TipButton";
import styles from "./SelectTip.module.css";

const SelectTip = ({ tipPercentage, setTipPercentage }) => {
  const tipOptions = [5, 10, 15, 25, 50, "custom"];

  const handleTipSelection = (tipVal) => {
    setTipPercentage(tipVal);
  };

  return (
    <div>
      <label htmlFor="">Select Tip %</label>
      <div className={styles.selection_btns}>
        {tipOptions.map((tip, i) =>
          tip !== "custom" ? (
            <TipButton
              tipPercentage={tipPercentage}
              tip={tip}
              onClick={handleTipSelection}
            />
          ) : (
            <p>custom</p>
          )
        )}
      </div>
    </div>
  );
};

export default SelectTip;
