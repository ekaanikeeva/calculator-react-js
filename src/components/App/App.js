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

useEffect(()=> {
  setResult(firstNumber)
}, [firstNumber])

useEffect(()=> {
  setResult(secondNumber)
}, [secondNumber])

useEffect(()=> {
  setResult(sign)
}, [sign])

  return (
    <div>
      <ResultContext.Provider value={result}>
        <FirstNumberContext.Provider value={firstNumber}>
          <SecondNumberContext.Provider value={secondNumber}>
            <SignContext.Provider value={sign}>
              <Calculator setFirst={setFirstNumber} setSecond={setSecondNumber} 
              setSign={setSign} setResult={setResult} 
              firstNumber={firstNumber} secondNumber={secondNumber}sign={sign}/>
            </SignContext.Provider>
          </SecondNumberContext.Provider>
        </FirstNumberContext.Provider>
      </ResultContext.Provider>
    </div>
  );
}

export default App;
