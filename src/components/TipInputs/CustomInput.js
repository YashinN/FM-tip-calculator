import styles from "./CustomInput.module.css";

const CustomInput = ({ tipPercentage, isCustom, dispatch }) => {
  const handleCustom = () => {
    dispatch({ type: "setIsCustom", payload: true });
    dispatch({ type: "setTipPercentage", payload: "" });
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
        dispatch({ type: "setTipPercentage", payload: e.target.value });
      }}
      value={isCustom ? tipPercentage : ""}
      onFocus={(e) => (e.target.placeholder = "")}
      onBlur={(e) => (e.target.placeholder = "Custom")}
      onClick={handleCustom}
    />
  );
};

export default CustomInput;
