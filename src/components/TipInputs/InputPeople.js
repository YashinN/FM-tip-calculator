import styles from "./InputPeople.module.css";
import PeopleSvg from "../icons/PeopleSvg";

const InputPeople = ({ numPeople, setNumPeople }) => {
  return (
    <div>
      <label htmlFor="">Number of People</label>
      <div className={styles.input_wrapper}>
        <PeopleSvg setClass={styles.people_icon} />
        <input
          className={styles.people_input}
          value={numPeople}
          placeholder="0"
          type="text"
          onBlur={(e) => (e.target.placeholder = "0")}
          onFocus={(e) => (e.target.placeholder = "")}
          onChange={(e) => {
            setNumPeople(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default InputPeople;
