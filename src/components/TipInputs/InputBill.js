import styles from "./InputBill.module.css";
import DollarSvg from "../icons/DollarSvg";

const InputBill = () => {
  return (
    <div>
      <label htmlFor="">Bill</label>

      <div className={styles.input_wrapper}>
        <DollarSvg setClass={styles.dollar_icon} />
        <input className={styles.bill_input} type="text" />
      </div>
    </div>
  );
};

export default InputBill;
