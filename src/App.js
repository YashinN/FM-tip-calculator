import { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import TipCalculator from "./components/TipCalculator/TipCalculator";
import TipDisplay from "./components/TipDisplay/TipDisplay";
import TipInputs from "./components/TipInputs/TipInputs";

const roundOff = (val) => Math.floor(val * 100) / 100;

function App() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [numPeople, setNumPeople] = useState("");
  const [tipAmount, setTipAmount] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [isCustom, setIsCustom] = useState(false);

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
            isCustom={isCustom}
            setIsCustom={setIsCustom}
          />
          <TipDisplay
            tipAmount={tipAmount}
            total={total}
            isCalc={isCalc}
            setNumPeople={setNumPeople}
            setBill={setBill}
            setTipPercentage={setTipPercentage}
            setIsCustom={setIsCustom}
          />
        </TipCalculator>
      </Main>
    </>
  );
}

export default App;
