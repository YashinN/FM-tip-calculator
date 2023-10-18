import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import TipCalculator from "./components/TipCalculator/TipCalculator";
import TipDisplay from "./components/TipDisplay/TipDisplay";
import TipInputs from "./components/TipInputs/TipInputs";

function App() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(null);
  const [numPeople, setNumPeople] = useState("");

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
          <TipDisplay />
        </TipCalculator>
      </Main>
    </>
  );
}

export default App;
