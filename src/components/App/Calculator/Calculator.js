import React from "react";
import styles from './Calculator.module.css';
import classNames from "classnames";

function Calculator () {
    return (
        <>
            <form className={styles.form}>
        <section className={styles.result}>
            <p className={styles.result_text}>0</p>
        </section>
        <section className={styles.memory}>
            <button type="button" className={classNames(styles.btn, styles.btn_save, styles.mc)} disabled>MC</button>
            <button type="button" className={classNames(styles.btn, styles.btn_save, styles.mr)} disabled>MR</button>
            <button type="button" className={classNames(styles.btn, styles.btn_save, styles.plusMemory)}>M+</button>
            <button type="button" className={classNames(styles.btn, styles.btn_save, styles.minusMemory)}>M-</button>
            <button type="button" className={classNames(styles.btn, styles.btn_save, styles.ms)}>MS</button>
        </section>
        <section className={styles.signButtons}>
            <button type="button" className={classNames(styles.btn, styles.percent, styles.btn_grey)}>%</button>
            <button type="button" className={classNames(styles.btn, styles.c, styles.btn_grey)}>c</button>
            <button type="button" className={classNames(styles.btn, styles.btn_grey, styles.ce)}>ce</button>
            <button type="button" className={classNames(styles.btn, styles.backspace, styles.btn_grey)}>⌫</button>
            <button type="button" className={classNames(styles.btn, styles.openBracket, styles.btn_grey)}>(</button>
            <button type="button" className={classNames(styles.btn, styles.closeBracket, styles.btn_grey)}>)</button>
        </section>
        <section className={styles.buttons}>
            <button type="button" className={classNames(styles.btn, styles.btn_grey, styles.quadrate)}>x²</button>
            <button type="button" className={classNames(styles.btn, styles.fraction, styles.btn_grey)}>¹⁄ₓ</button>
            <button type="button" className={classNames(styles.btn, styles.sqrt, styles.btn_grey)}>√ₓ</button>
            <button type="button" className={classNames(styles.btn, styles.devide, styles.btn_grey, styles.simpleSign)}>/</button>
            

            <button type="button" className={classNames(styles.btn, styles.seven, styles.btn_white, styles.num)}>7</button>
            <button type="button" className={classNames(styles.btn, styles.eigth, styles.btn_white, styles.num)}>8</button>
            <button type="button" className={classNames(styles.btn, styles.nine, styles.btn_white, styles.num)}>9</button>
            <button type="button" className={classNames(styles.btn, styles.myltiply, styles.btn_grey, styles.simpleSign)}>×</button>

            <button type="button" className={classNames(styles.btn, styles.four, styles.btn_white, styles.num)}>4</button>
            <button type="button" className={classNames(styles.btn, styles.five, styles.btn_white, styles.num)}>5</button>
            <button type="button" className={classNames(styles.btn, styles.six, styles.btn_white, styles.num)}>6</button>
            <button type="button" className={classNames(styles.btn, styles.minus, styles.btn_grey, styles.simpleSign)}>-</button>

            <button type="button" className={classNames(styles.btn, styles.one, styles.btn_white, styles.num)}>1</button>
            <button type="button" className={classNames(styles.btn, styles.two, styles.btn_white, styles.num)}>2</button>
            <button type="button" className={classNames(styles.btn, styles.three, styles.btn_white, styles.num)}>3</button>
            <button type="button" className={classNames(styles.btn, styles.plus, styles.btn_grey, styles.simpleSign)}>+</button>
            
            <button type="button" className={classNames(styles.btn, styles.changeSign)}>+/-</button>
            <button type="button" className={classNames(styles.btn, styles.zero, styles.btn_white, styles.num)}>0</button>
            <button type="button" className={classNames(styles.btn, styles.comma, styles.btn_white, styles.num)}>.</button>
            <button type="submit" className={classNames(styles.btn, styles.equal, styles.btn_blue)}>=</button>
        </section>
    </form>
    </>
    )
}

export default Calculator;
