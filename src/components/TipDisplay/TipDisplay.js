import styles from "./TipDisplay.module.css";
import ResetButton from "./ResetButton";

const TipDisplay = () => {
  return (
    <div className={styles.display_container}>
      <div className={styles.results}>
        <div>
          <p className={styles.result_name}>tip amount</p>
          <p className={styles.result_subscript}>/ person</p>
        </div>

        <p className={styles.amount_display}>$0.00</p>
      </div>

      <ResetButton />
    </div>
  );
};

export default TipDisplay;
