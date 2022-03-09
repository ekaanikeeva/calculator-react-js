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
  const [isResult, setIsResult] = useState(false);
  const [whatIsNumber, setWhatIsNumber] = useState(null);
  const [fullFormula, setFullFormula] = useState('');
  const [isOpenBracket, setIsOpenBracket] = useState(null)

useEffect(()=> {
  console.log(firstNumber, sign, secondNumber, isOpenBracket)
  if (whatIsNumber === 'firstNum' && sign !== '') {
      setFullFormula(firstNumber + ' ' + sign); 
      setResult(sign)
  }
  else if (whatIsNumber === 'firstNum') {
    setResult(firstNumber);
    setFullFormula(firstNumber);
  } 
  else if (whatIsNumber === 'secondNum') {
    setResult(secondNumber)
    setFullFormula(firstNumber + ' ' + sign + ' ' + secondNumber)
  } 
  else {
    setResult(sign)
  } 
  if (isOpenBracket) setFullFormula(isOpenBracket + ' ' + firstNumber + ' ' + sign + ' ' + secondNumber)

}, [firstNumber, secondNumber, sign, whatIsNumber, isOpenBracket])

  return (
    <div>
      <ResultContext.Provider value={result}>
        <FirstNumberContext.Provider value={firstNumber}>
          <SecondNumberContext.Provider value={secondNumber}>
            <SignContext.Provider value={sign}>
              <Calculator setFirst={setFirstNumber} setSecond={setSecondNumber} 
              setSign={setSign} setResult={setResult}
              setIsResult={setIsResult} isResult={isResult} fullFormula={fullFormula} setFullFormula={setFullFormula}
              firstNumber={firstNumber} secondNumber={secondNumber}sign={sign} isOpenBracket={isOpenBracket} setIsOpenBracket={setIsOpenBracket}
              whatIsNumber={whatIsNumber} setWhatIsNumber={setWhatIsNumber} />
            </SignContext.Provider>
          </SecondNumberContext.Provider>
        </FirstNumberContext.Provider>
      </ResultContext.Provider>
    </div>
  );
}

export default App;
