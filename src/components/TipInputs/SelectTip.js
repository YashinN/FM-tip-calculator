import { useState } from "react";
import TipButton from "./TipButton";
import styles from "./SelectTip.module.css";
import CustomInput from "./CustomInput";

const SelectTip = ({ tipPercentage, setTipPercentage }) => {
  const [isCustom, setIsCustom] = useState(false);
  const tipOptions = [5, 10, 15, 25, 50, "custom"];
  const handleTipSelection = (tipVal) => {
    setIsCustom(false);
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
            <CustomInput
              setTipPercentage={setTipPercentage}
              tipPercentage={tipPercentage}
              setIsCustom={setIsCustom}
              isCustom={isCustom}
            />
          )
        )}
      </div>
    </div>
  );
};

export default SelectTip;
