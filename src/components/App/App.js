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
  const [isResult, setIsResult] = useState(false);
  const [whatIsNumber, setWhatIsNumber] = useState(null);
  const [fullFormula, setFullFormula] = useState('');

  function showFormula () {
    if (whatIsNumber === 'firstNum' || whatIsNumber === null) setFullFormula('');
    else if (whatIsNumber === 'secondNum') setFullFormula(firstNumber + sign)
  //   setFullFormula((firstNumber !== '' && secondNumber !== '' && sign !== '' ? firstNumber + sign  + secondNumber) +  
  // (firstNumber !==''`=` : ''))
  console.log(fullFormula)
  }

useEffect(()=> {

  console.log(firstNumber, sign, secondNumber)
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
              setIsResult={setIsResult} isResult={isResult} fullFormula={fullFormula} setFullFormula={setFullFormula}
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
