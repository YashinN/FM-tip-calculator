import TipButton from "./TipButton";
import styles from "./SelectTip.module.css";
import CustomInput from "./CustomInput";

const SelectTip = ({ tipPercentage, isCustom, dispatch }) => {
  const tipOptions = [5, 10, 15, 25, 50, "custom"];
  const handleTipSelection = (tipVal) => {
    dispatch({ type: "setIsCustom", payload: false });
    dispatch({ type: "setTipPercentage", payload: tipVal });
  };

  return (
    <div>
      <label htmlFor="">Select Tip %</label>
      <div className={styles.selection_btns}>
        {tipOptions.map((tip, i) =>
          tip !== "custom" ? (
            <TipButton
              key={tip}
              tipPercentage={tipPercentage}
              tip={tip}
              onClick={handleTipSelection}
            />
          ) : (
            <CustomInput
              key={tip}
              tipPercentage={tipPercentage}
              dispatch={dispatch}
              isCustom={isCustom}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SelectTip;
