/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import styles from "./SignButtons.module.css";
import classNames from "classnames";
import { ResultContext } from "../../context/ResultContext";
import { FirstNumberContext } from "../../context/FirstNumberContext";
import { SecondNumberContext } from "../../context/SecondNumberContext";
import { SignContext } from "../../context/SignContext";

function SignButtons({ setFirst, setSecond, setSign, setResult, 
    finish, setFinish, whatIsNumber, setWhatIsNumber, setFullFormula,
    calculate, isOpenBracket, setIsOpenBracket}) {
    const firstNumber = useContext(FirstNumberContext);
    const secondNumber = useContext(SecondNumberContext);
    const sign = useContext(SignContext);
    const result = useContext(ResultContext);

    const [savedSign, setSavedSign] = useState(null);
    const [savedValue, setSavedValue] = useState(null);
    const [currentValue, setCurrentValue] = useState('');

    // очистить все
    function clearResult () {
        setFirst('');
        setSecond('');
        setSign('');
        setFinish(false);
        setFullFormula(null);
        setIsOpenBracket(null)
    }
    
    // очистить число
    function clearNum () {
        if (whatIsNumber === 'firstNum') {
            setFirst('');
            setSign('');
        } 
        else if (whatIsNumber === 'secondNum') setSecond('');
    }

    // уменьшить / сбросить число
    function backspace () {
        if (result === 0 || result === '') return;
        else {
            let reduceValue = result.split('');
            reduceValue.pop();
            setResult(reduceValue.join(''));
            if (whatIsNumber === 'firstNum') setFirst(reduceValue.join(''));
            else if (whatIsNumber === 'secondNum') setSecond(reduceValue.join(''));
        }
    }

    // проценты
    function percent () {
    if (whatIsNumber === 'firstNum' && secondNumber === '') return setFirst('');
    else if (whatIsNumber === 'secondNum') {
        switch (sign) {
            case '+':
                setSecond(secondNumber * firstNumber / 100);
                break;
            case '-':
                setSecond(firstNumber - secondNumber * firstNumber / 100);
                break;
            case '×':
                setFirst(secondNumber * firstNumber / 100);
                setWhatIsNumber('firstNum');
                setFinish(true);
                setSign('');
                setSecond('');
                
                break;
            case '/':
                setFirst(firstNumber / (secondNumber / 100));
                setWhatIsNumber('firstNum');
                setFinish(true);
                setSign('')
                setSecond('');
                break;
            default:
        }
    }
}

useEffect(() => {
    if (firstNumber !== '' && sign !== '' && secondNumber !=='') {
        if(sign === '+') setCurrentValue((+firstNumber) + (+secondNumber))
        else if(sign === '-') setCurrentValue(firstNumber - secondNumber)
        else if(sign === '*') setCurrentValue(firstNumber * secondNumber)
        else if (sign === '/') setCurrentValue(firstNumber / secondNumber)
    }
}, [whatIsNumber])

// открыть скобочку
function openBracket() {
    if (firstNumber !== '' && sign !== '' && secondNumber !=='') {
        setFirst(currentValue);
        setIsOpenBracket(`(`)
        setSign('');
        setSecond('');
        setWhatIsNumber('firstNum')
    }
    else if (firstNumber !== '' && secondNumber === '') {
        if(sign === '') setIsOpenBracket(`(`);
        else {
            setSavedValue(firstNumber);
            setSavedSign(sign);
            setIsOpenBracket(firstNumber + ' ' + sign + ' ' + `(`);
            clearResult();
        }
        
    }
    setIsOpenBracket(firstNumber + ' ' + sign + ' ' + `(`);
}

// закрыть скобочку
function closeBracket() {

    if(savedValue === '' || savedValue === null) return;
    else if ( savedSign !== '') setSign(savedSign);
    if(savedSign !== null && savedValue !== null) {
        setIsOpenBracket(savedValue + savedSign)
    } else setIsOpenBracket(`(` + firstNumber + secondNumber + `)`)
    setSecond(currentValue);
    setFirst(savedValue);
    setSavedSign(null);
    setSavedValue(null);
    setIsOpenBracket(null)
}

    return (
    <section className={styles.signButtons}>

        <button type="button" className={classNames(styles.btn, styles.percent, styles.btn_grey)}
        onClick={percent}>%</button>
        <button type="button" className={classNames(styles.btn, styles.c, styles.btn_grey)}
        onClick={clearResult}>c</button>
        <button type="button" className={classNames(styles.btn, styles.btn_grey, styles.ce)}
        onClick={clearNum}>ce</button>
        <button type="button" className={classNames(styles.btn, styles.backspace, styles.btn_grey)}
        onClick={backspace}>⌫</button>
        <button type="button" className={classNames(styles.btn, styles.openBracket, styles.btn_grey)}
        onClick={openBracket}>(</button>
        <button type="button" className={classNames(styles.btn, styles.closeBracket, styles.btn_grey)}
        onClick={closeBracket}>)</button>
    
    </section>
  );
}

export default SignButtons;
