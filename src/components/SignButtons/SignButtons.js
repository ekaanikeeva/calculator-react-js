import React, { useContext, useState } from "react";
import styles from "./SignButtons.module.css";
import classNames from "classnames";
import { ResultContext } from "../../context/ResultContext";
// import { FirstNumberContext } from "../../context/FirstNumberContext";
// import { SecondNumberContext } from "../../context/SecondNumberContext";
// import { SignContext } from "../../context/SignContext";

function SignButtons({ setFirst, setSecond, setSign, setResult, 
    finish, setFinish, whatIsNumber, setWhatIsNumber }) {
    // const firstNumber = useContext(FirstNumberContext);
    // const secondNumber = useContext(SecondNumberContext);
    // const sign = useContext(SignContext);
    const result = useContext(ResultContext);
    const [changeValue, setChangeValue] = useState('');

    // очистить все
    function clearResult () {
        setFirst('');
        setSecond('');
        setSign('');
        setFinish(false);
        // setResult(0)
    }
    
    // очистить число
    function clearNum () {
        if (whatIsNumber === 'firstNum') setFirst('');
        else if (whatIsNumber === 'secondNum') setSecond('');
    }

    function backspace () {
        
        if (result === 0 || result === '') return;
        else {
            console.log(whatIsNumber, result)
            let reduceValue = result.split('');
            reduceValue.pop();
            
            setResult(reduceValue.join(''));
            if (whatIsNumber === 'firstNum') setFirst(reduceValue.join(''));
            else if (whatIsNumber === 'secondNum') setSecond(reduceValue.join(''));
        }
    }

    return (
    <section className={styles.signButtons}>

        <button type="button" className={classNames(styles.btn, styles.percent, styles.btn_grey)}>%</button>
        <button type="button" className={classNames(styles.btn, styles.c, styles.btn_grey)}
        onClick={clearResult}>c</button>
        <button type="button" className={classNames(styles.btn, styles.btn_grey, styles.ce)}
        onClick={clearNum}>ce</button>
        <button type="button" className={classNames(styles.btn, styles.backspace, styles.btn_grey)}
        onClick={backspace}>⌫</button>
        <button type="button" className={classNames(styles.btn, styles.openBracket, styles.btn_grey)}>(</button>
        <button type="button" className={classNames(styles.btn, styles.closeBracket, styles.btn_grey)}>)</button>
    
    </section>
  );
}

export default SignButtons;
