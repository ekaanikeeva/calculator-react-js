/* eslint-disable no-undef */
import React, { useState } from "react";
import styles from './Calculator.module.css';
import Result from "../Result/Result";
import MemoryButtons from "../MemoryButtons/MemoryButtons";
import SignButtons from "../SignButtons/SignButtons";
import NumAndSignButtons from "../NumAndSignButtons/NumAndSignButtons";
// import { ResultContext } from "../../context/ResultContext";
// import { FirstNumberContext } from "../../context/FirstNumberContext";
// import { SecondNumberContext } from "../../context/SecondNumberContext";
// import { SignContext } from "../../context/SignContext";

function Calculator ({ setFirst, setSecond, setSign, setResult, firstNumber, secondNumber,
     sign, setIsSubmit}) {
    // const result = useContext(ResultContext);
    // const firstNumber = useContext(FirstNumberContext);
    // const secondNumber = useContext(SecondNumberContext);
    // const sign = useContext(SignContext);
    const [finish, setFinish] = useState(false);
    // const [isResult, setIsResult] = useState(false);

    function calculate () {
        
        switch (sign) {
            case '+':
                // setIsResult(true)
                console.log('calcsum')
                setFirst((+firstNumber) + (+secondNumber))
                break;
            case '-':
                // setIsResult(true)
                console.log('calcminus')
                setFirst(firstNumber - secondNumber)
                break;
            case '×':
                console.log('calcumnozh')
                if (secondNumber === '') return;
                setFirst(firstNumber * secondNumber)
                // setIsResult(true)
                break;
            case '/':
                if (secondNumber === '') return;
                if (secondNumber === '0') {
                    setResult('Error');
                    setFirst('')
                    setSign('')
                    setSecond('')
                    return;
                }
                
                setFirst(firstNumber / secondNumber)
                // setIsResult(true)
                break;
                default:
        }
        setFinish(true);
        setSign('')
        setSecond('')
        setResult(firstNumber)
        // setIsSubmit(false)
        // whatIsNumber = 'firstNum';
    }

    function handleClickSimpleSigns (evt) {
        calculate();
        setSign(evt.target.textContent);
        // if (!isResult) setResult(sign);
        // else setResult(firstNumber);
        setFinish(true);
    }

    function handleSubmit (evt) {
        evt.preventDefault();
        if (firstNumber !== '' && secondNumber !== '' && sign === '') {
            setIsSubmit(true)
            setFirst(secondNumber);
            setSecond('');
            return;
        }
        else if (secondNumber ==='')  setSecond(firstNumber)
        else calculate();
    }

    return (
    <form className={styles.form} onSubmit={handleSubmit} >
        <Result setResult={setResult} />
        <MemoryButtons />
        <SignButtons />
        <NumAndSignButtons setFirst={setFirst} setSecond={setSecond} setSign={setSign} 
        setResult={setResult} finish={finish} setFinish={setFinish} 
        handleClickSimpleSigns={handleClickSimpleSigns} />
        
    </form>
    )
}

export default Calculator;
