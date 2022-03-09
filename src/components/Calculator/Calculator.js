/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
import React, { useState } from "react";
import styles from './Calculator.module.css';
import Result from "../Result/Result";
import MemoryButtons from "../MemoryButtons/MemoryButtons";
import SignButtons from "../SignButtons/SignButtons";
import NumAndSignButtons from "../NumAndSignButtons/NumAndSignButtons";

function Calculator ({ setFirst, setSecond, setSign, setResult, firstNumber, secondNumber,
    sign, whatIsNumber, setWhatIsNumber, fullFormula, setFullFormula, setIsResult,
    isOpenBracket, setIsOpenBracket,
}) {


    const [finish, setFinish] = useState(false);


    // сосчитать числа + - / *
    function calculate () {
        switch (sign) {
            case '+':
                setIsResult(true)
                console.log('calcsum')
                setFirst((+firstNumber) + (+secondNumber))
                break;
            case '-':
                setIsResult(true)
                console.log('calcminus')
                setFirst(firstNumber - secondNumber)
                break;
            case '×':
                console.log('calcumnozh')
                if (secondNumber === '') return;
                setFirst(firstNumber * secondNumber)
                setIsResult(true)
                break;
            case '/':
                console.log('calcdel')
                if (secondNumber === '') return;
                if (secondNumber === '0') {
                    setResult('Error');
                    setFirst('')
                    setSign('')
                    setSecond('')
                    setIsResult(true)
                    return;
                }
    
                setFirst(firstNumber / secondNumber)
                setIsResult(true)
                break;
                default:
        }
        setFinish(true);
        setSign('')
        setSecond('')
        setWhatIsNumber('firstNum')
    }

    // для знаков
    function handleClickSimpleSigns (evt) {
        calculate();
        setSign(evt.target.textContent);
        setFinish(true);
    }

    // =
    function handleSubmit (evt) {
        evt.preventDefault();
        setIsOpenBracket(null)
        setFullFormula(firstNumber + ' ' + sign + ' ' + secondNumber + ' ' + `=`)
        if (firstNumber !== '' && secondNumber !== '' && sign === '') {
            setFirst(secondNumber);
            setSecond('');
            return;
        }
        else if (secondNumber ==='')  setSecond(firstNumber)
        else calculate();
    }

    return (
    <form className={styles.form} onSubmit={handleSubmit} >
        <Result setResult={setResult} fullFormula={fullFormula} />
        <MemoryButtons setFirst={setFirst} setSecond={setSecond} whatIsNumber={whatIsNumber}/>
        <SignButtons setFirst={setFirst} setSecond={setSecond} setSign={setSign} calculate={calculate}
        setResult={setResult} finish={finish} setFinish={setFinish} whatIsNumber={whatIsNumber} 
        setFullFormula={setFullFormula}
        setWhatIsNumber={setWhatIsNumber} isOpenBracket={isOpenBracket} setIsOpenBracket={setIsOpenBracket}/>
        <NumAndSignButtons setFirst={setFirst} setSecond={setSecond} setSign={setSign} 
        setResult={setResult} finish={finish} setFinish={setFinish} whatIsNumber={whatIsNumber} 
        setWhatIsNumber={setWhatIsNumber}
        handleClickSimpleSigns={handleClickSimpleSigns} />
        
    </form>
    )
}

export default Calculator;
