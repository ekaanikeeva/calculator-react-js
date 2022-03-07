import React, { useContext } from "react";
import styles from './NumAndSignButtons.module.css';
import classNames from "classnames";
// import { ResultContext } from "../../context/ResultContext";
import { FirstNumberContext } from "../../context/FirstNumberContext";
import { SecondNumberContext } from "../../context/SecondNumberContext";
import { SignContext } from "../../context/SignContext";

function NumAndSignButtons ({ setFirst, setSecond, setSign, setResult, 
    finish, setFinish, handleClickSimpleSigns, whatIsNumber, setWhatIsNumber}) {
    const firstNumber = useContext(FirstNumberContext);
    const secondNumber = useContext(SecondNumberContext);
    const sign = useContext(SignContext);
    // const result = useContext(ResultContext)

    function handleClickNums (evt) {
        const buttonText =evt.target.textContent;
        if (secondNumber === '' && sign === '') {
            if (buttonText === '.' && firstNumber.includes('.')) {
                setResult(firstNumber)
            } else {
                setFirst(firstNumber + buttonText)
                // whatIsNumber = 'firstNum';
                setWhatIsNumber('firstNum');
                setResult(firstNumber)
            }
            }
            else if (firstNumber!=='' && secondNumber!=='' && finish) {
                if (sign === '') {
                    setFirst(buttonText)
                    setResult(firstNumber)
                    setWhatIsNumber('firstNum')
                    // whatIsNumber = 'firstNum';
                }
                else {
                    setSecond(secondNumber + buttonText)
                    setResult(secondNumber)
                    setWhatIsNumber('secondNum')
                    // whatIsNumber = 'secondNum';
                    setFinish(false)
                }
    
            }
            else if (buttonText === '.' && secondNumber.includes('.')) {
                setResult(secondNumber)
            }
            else {
                setSecond(secondNumber + buttonText)
                setResult(secondNumber)
                setWhatIsNumber('secondNum')
                // whatIsNumber = whatIsNumber = 'secondNum';
            }
            return;

    }

    return (
        <section className={styles.buttons}>
            <button type="button" className={classNames(styles.btn, styles.btn_grey, styles.quadrate)}>x²</button>
            <button type="button" className={classNames(styles.btn, styles.fraction, styles.btn_grey)}>¹⁄ₓ</button>
            <button type="button" className={classNames(styles.btn, styles.sqrt, styles.btn_grey)}>√ₓ</button>
            <button type="button" className={classNames(styles.btn, styles.devide, styles.btn_grey, styles.simpleSign)}
            onClick={handleClickSimpleSigns}>/</button>
            

            <button type="button" className={classNames(styles.btn, styles.seven, styles.btn_white, styles.num)}
            onClick={handleClickNums}>7</button>
            <button type="button" className={classNames(styles.btn, styles.eigth, styles.btn_white, styles.num)}
            onClick={handleClickNums}>8</button>
            <button type="button" className={classNames(styles.btn, styles.nine, styles.btn_white, styles.num)}
            onClick={handleClickNums}>9</button>
            <button type="button" className={classNames(styles.btn, styles.myltiply, styles.btn_grey, styles.simpleSign)}
            onClick={handleClickSimpleSigns}>×</button>

            <button type="button" className={classNames(styles.btn, styles.four, styles.btn_white, styles.num)}
            onClick={handleClickNums}>4</button>
            <button type="button" className={classNames(styles.btn, styles.five, styles.btn_white, styles.num)}
            onClick={handleClickNums}>5</button>
            <button type="button" className={classNames(styles.btn, styles.six, styles.btn_white, styles.num)}
            onClick={handleClickNums}>6</button>
            <button type="button" className={classNames(styles.btn, styles.minus, styles.btn_grey, styles.simpleSign)}
            onClick={handleClickSimpleSigns}>-</button>

            <button type="button" className={classNames(styles.btn, styles.one, styles.btn_white, styles.num)}
            onClick={handleClickNums}>1</button>
            <button type="button" className={classNames(styles.btn, styles.two, styles.btn_white, styles.num)}
            onClick={handleClickNums}>2</button>
            <button type="button" className={classNames(styles.btn, styles.three, styles.btn_white, styles.num)}
            onClick={handleClickNums}>3</button>
            <button type="button" className={classNames(styles.btn, styles.plus, styles.btn_grey, styles.simpleSign)}
            onClick={handleClickSimpleSigns}>+</button>
            
            <button type="button" className={classNames(styles.btn, styles.changeSign)}>+/-</button>
            <button type="button" className={classNames(styles.btn, styles.zero, styles.btn_white, styles.num)}
            onClick={handleClickNums}>0</button>
            <button type="button" className={classNames(styles.btn, styles.comma, styles.btn_white, styles.num)}
            onClick={handleClickNums}>.</button>
            <button type="submit" className={classNames(styles.btn, styles.equal, styles.btn_blue)}>=</button>
        </section>
    )
}

export default NumAndSignButtons;