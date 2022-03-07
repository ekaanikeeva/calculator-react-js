import React, { useEffect, useState } from "react";
// import styles from "./App.module.css";
import Calculator from "../Calculator/Calculator";
import { FirstNumberContext } from "../../context/FirstNumberContext";
import { SecondNumberContext } from "../../context/SecondNumberContext";
import { SignContext } from "../../context/SignContext";
import { ResultContext } from "../../context/ResultContext";

function App() {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [sign, setSign] = useState('');
  const [result, setResult] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [whatIsNumber, setWhatIsNumber] = useState(null);

useEffect(()=> {
  console.log(firstNumber, secondNumber, sign, result, whatIsNumber)
  if (whatIsNumber === 'firstNum') setResult(firstNumber)
  else if (whatIsNumber === 'secondNum') setResult(secondNumber)
  else setResult(sign)
}, [firstNumber, sign, secondNumber, whatIsNumber])

  return (
    <div>
      <ResultContext.Provider value={result}>
        <FirstNumberContext.Provider value={firstNumber}>
          <SecondNumberContext.Provider value={secondNumber}>
            <SignContext.Provider value={sign}>
              <Calculator setFirst={setFirstNumber} setSecond={setSecondNumber} 
              setSign={setSign} setResult={setResult} setIsSubmit={setIsSubmit}
              firstNumber={firstNumber} secondNumber={secondNumber}sign={sign}
              whatIsNumber={whatIsNumber} setWhatIsNumber={setWhatIsNumber} />
            </SignContext.Provider>
          </SecondNumberContext.Provider>
        </FirstNumberContext.Provider>
      </ResultContext.Provider>
    </div>
  );
}

export default App;
