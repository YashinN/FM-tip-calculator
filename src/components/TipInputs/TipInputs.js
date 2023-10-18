import styles from "./TipInputs.module.css";
import InputBill from "./InputBill";
import SelectTip from "./SelectTip";
import InputPeople from "./InputPeople";

const TipInputs = () => {
  return (
    <form className={styles.selection_form}>
      <InputBill />
      <SelectTip />
      <InputPeople />
    </form>
  );
};

export default TipInputs;
