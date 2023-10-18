import styles from "./InputPeople.module.css";
import PeopleSvg from "../icons/PeopleSvg";

const InputPeople = () => {
  return (
    <div>
      <label htmlFor="">Number of People</label>
      <div className={styles.input_wrapper}>
        <PeopleSvg setClass={styles.people_icon} />
        <input className={styles.people_input} type="text" />
      </div>
    </div>
  );
};

export default InputPeople;
