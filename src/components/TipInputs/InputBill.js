import styles from "./InputBill.module.css";
import DollarSvg from "../icons/DollarSvg";

const InputBill = ({ bill, setBill }) => {
  return (
    <div>
      <label htmlFor="">Bill</label>
      <div className={styles.input_wrapper}>
        <DollarSvg setClass={styles.dollar_icon} />
        <input
          placeholder="0"
          className={styles.bill_input}
          type="text"
          value={bill}
          onChange={(e) => {
            e.preventDefault();
            setBill(e.target.value);
          }}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "0")}
        />
      </div>
    </div>
  );
};

export default InputBill;
