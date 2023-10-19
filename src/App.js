import { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import TipCalculator from "./components/TipCalculator/TipCalculator";
import TipDisplay from "./components/TipDisplay/TipDisplay";
import TipInputs from "./components/TipInputs/TipInputs";

const roundOff = (val) => Math.floor(val * 100) / 100;

function App() {
  const [bill, setBill] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(null);
  const [numPeople, setNumPeople] = useState(null);
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");

  const isCalc = bill && tipPercentage && numPeople;

  useEffect(() => {
    if (isCalc) {
      const billAmount = Number(bill);
      const tipPerPerson = (billAmount * (tipPercentage / 100)) / numPeople;
      const totalPerPerson = billAmount / numPeople + tipPerPerson;
      setTipAmount(roundOff(tipPerPerson).toFixed(2));
      setTotal(totalPerPerson.toFixed(2));
    }

    if (!isCalc) {
      setTipAmount("0.00");
      setTotal("0.00");
    }
  }, [bill, tipPercentage, numPeople]);

  return (
    <>
      <Header />
      <Main>
        <TipCalculator>
          <TipInputs
            bill={bill}
            setBill={setBill}
            tipPercentage={tipPercentage}
            setTipPercentage={setTipPercentage}
            numPeople={numPeople}
            setNumPeople={setNumPeople}
          />
          <TipDisplay tipAmount={tipAmount} total={total} isCalc={isCalc} />
        </TipCalculator>
      </Main>
    </>
  );
}

export default App;
