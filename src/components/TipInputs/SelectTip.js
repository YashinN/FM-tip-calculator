import TipButton from "./TipButton";
import styles from "./SelectTip.module.css";

const SelectTip = () => {
  const tipPercentage = [5, 10, 15, 25, 50, "custom"];

  return (
    <div>
      <label htmlFor="">Select Tip %</label>
      <div className={styles.selection_btns}>
        {tipPercentage.map((tip, i) =>
          tip !== "custom" ? <TipButton /> : <p>custom</p>
        )}
      </div>
    </div>
  );
};

export default SelectTip;
