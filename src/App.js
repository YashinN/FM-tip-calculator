import Main from "./components/Main";
import Header from "./components/Header/Header";
import TipCalculator from "./components/TipCalculator/TipCalculator";

function App() {
  return (
    <>
      <Header />
      <Main>
        <TipCalculator></TipCalculator>
      </Main>
    </>
  );
}

export default App;
