import styles from "./TipInputs.module.css";
import InputBill from "./InputBill";
import SelectTip from "./SelectTip";
import InputPeople from "./InputPeople";

const TipInputs = ({ bill, setBill, tipPercentage, setTipPercentage }) => {
  return (
    <div className={styles.selection_form}>
      <InputBill bill={bill} setBill={setBill} />
      <SelectTip
        tipPercentage={tipPercentage}
        setTipPercentage={setTipPercentage}
      />
      <InputPeople />
    </div>
  );
};

export default TipInputs;
