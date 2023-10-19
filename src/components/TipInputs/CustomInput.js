import styles from "./CustomInput.module.css";

const CustomInput = ({
  setTipPercentage,
  tipPercentage,
  setIsCustom,
  isCustom,
}) => {
  const handleCustom = () => {
    setIsCustom(true);
    setTipPercentage("");
  };

  return (
    <input
      placeholder="Custom"
      className={`${styles.custom_input} ${
        isCustom ? styles.custom_input_active : ""
      }`}
      type="number"
      onChange={(e) => {
        e.preventDefault();
        setTipPercentage(e.target.value);
      }}
      value={isCustom ? tipPercentage : ""}
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = "Custom")}
      onClick={handleCustom}
    />
  );
};

export default CustomInput;
