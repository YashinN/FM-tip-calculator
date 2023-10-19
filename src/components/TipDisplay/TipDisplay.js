import styles from "./TipDisplay.module.css";
import ResetButton from "./ResetButton";

const TipDisplay = ({ total, tipAmount, isCalc, dispatch }) => {
  return (
    <div className={styles.display_container}>
      <div className={styles.results}>
        <div>
          <p className={styles.result_name}>tip amount</p>
          <p className={styles.result_subscript}>/ person</p>
        </div>

        <p className={styles.amount_display}>${tipAmount}</p>
      </div>

      <div className={styles.results}>
        <div>
          <p className={styles.result_name}>Total</p>
          <p className={styles.result_subscript}>/ person</p>
        </div>

        <p className={styles.amount_display}>${total}</p>
      </div>

      <ResetButton isCalc={isCalc} dispatch={dispatch} />
    </div>
  );
};

export default TipDisplay;
