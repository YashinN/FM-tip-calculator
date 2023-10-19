import styles from "./TipInputs.module.css";
import InputBill from "./InputBill";
import SelectTip from "./SelectTip";
import InputPeople from "./InputPeople";

const TipInputs = ({ bill, tipPercentage, isCustom, dispatch, numPeople }) => {
  return (
    <div className={styles.selection_form}>
      <InputBill bill={bill} dispatch={dispatch} />
      <SelectTip
        tipPercentage={tipPercentage}
        isCustom={isCustom}
        dispatch={dispatch}
      />
      <InputPeople numPeople={numPeople} dispatch={dispatch} />
    </div>
  );
};

export default TipInputs;
