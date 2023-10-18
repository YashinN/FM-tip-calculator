import styles from "./TipInputs.module.css";
import InputBill from "./InputBill";
import SelectTip from "./SelectTip";
import InputPeople from "./InputPeople";

const TipInputs = ({ bill, setBill }) => {
  return (
    <div className={styles.selection_form}>
      <InputBill bill={bill} setBill={setBill} />
      <SelectTip />
      <InputPeople />
    </div>
  );
};

export default TipInputs;
