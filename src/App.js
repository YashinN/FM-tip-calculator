import { useEffect, useReducer } from "react";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import TipCalculator from "./components/TipCalculator/TipCalculator";
import TipDisplay from "./components/TipDisplay/TipDisplay";
import TipInputs from "./components/TipInputs/TipInputs";

const roundOff = (val) => Math.floor(val * 100) / 100;

const initialState = {
  bill: "",
  tipPercentage: "",
  numPeople: "",
  tipAmount: "0.00",
  total: "0.00",
  isCustom: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setBill":
      return { ...state, bill: action.payload };
    case "setTipPercentage":
      return { ...state, tipPercentage: action.payload };
    case "setNumPeople":
      return { ...state, numPeople: action.payload };
    case "setIsCustom":
      return { ...state, isCustom: action.payload };
    case "reset":
      return { ...initialState };
    case "calcTip":
      return { ...state, tipAmount: action.payload };
    case "calcTotal":
      return { ...state, total: action.payload };
    case "resetResults":
      return { ...state, tipAmount: "0.00", total: "0.00" };

    default:
      throw new Error("Action unknown");
  }
};

function App() {
  const [
    { bill, tipPercentage, isCustom, numPeople, tipAmount, total },
    dispatch,
  ] = useReducer(reducer, initialState);

  const isCalc = bill && tipPercentage && numPeople;

  useEffect(() => {
    if (isCalc) {
      const billAmount = Number(bill);
      const tipPerPerson = (billAmount * (tipPercentage / 100)) / numPeople;
      const totalPerPerson = billAmount / numPeople + tipPerPerson;
      dispatch({ type: "calcTip", payload: roundOff(tipPerPerson).toFixed(2) });
      dispatch({ type: "calcTotal", payload: totalPerPerson.toFixed(2) });
    }

    if (!isCalc) {
      dispatch({ type: "resetResults" });
    }
  }, [bill, tipPercentage, numPeople, isCalc]);

  return (
    <>
      <Header />
      <Main>
        <TipCalculator>
          <TipInputs
            bill={bill}
            tipPercentage={tipPercentage}
            numPeople={numPeople}
            isCustom={isCustom}
            dispatch={dispatch}
          />
          <TipDisplay
            tipAmount={tipAmount}
            total={total}
            isCalc={isCalc}
            dispatch={dispatch}
          />
        </TipCalculator>
      </Main>
    </>
  );
}

export default App;
