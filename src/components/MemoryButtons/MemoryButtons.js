import React, { useState, useContext } from "react";
import styles from "./MemoryButtons.module.css";
import classNames from "classnames";
import { ResultContext } from "../../context/ResultContext";
import { FirstNumberContext } from "../../context/FirstNumberContext";
import { SecondNumberContext } from "../../context/SecondNumberContext";
import { SignContext } from "../../context/SignContext";

function MemoryButtons({setFirst, setSecond, whatIsNumber}) {
    const firstNumber = useContext(FirstNumberContext);
    const secondNumber = useContext(SecondNumberContext);
    const sign = useContext(SignContext);
    const result = useContext(ResultContext);

  const [memorySave, setMemorySave] = useState(null);

  // сохранить число
  function saveNumber () {
    return setMemorySave(result);
}

// прибавить число к сохраненному
function plusSaveMemory () {
  if (memorySave === null) return saveNumber();
  else return setMemorySave((+memorySave) + (+result));
}

// сохраненное число минус текущее
function minusSaveMemory () {
  return setMemorySave(memorySave - result);
}

// вывести сохраненное число на экран и заменить им число
function memoryRead () {
  if (whatIsNumber === 'firstNum') setFirst(memorySave)
  else if (whatIsNumber === 'secondNum') setSecond(memorySave)
  return;
}

// очистить память
function memoryClean () {
  setMemorySave(null)
}

  return (
    <section className={styles.memory}>

      <button type="button" className={classNames(styles.btn, styles.btn_save, styles.mc)}
      disabled={memorySave !== null ? false : true} onClick={memoryClean}>MC</button>

      <button type="button" className={classNames(styles.btn, styles.btn_save, styles.mr)}
      disabled={memorySave !== null ? false : true} onClick={memoryRead}>MR</button>

      <button type="button" className={classNames(styles.btn, styles.btn_save, styles.plusMemory)}
      onClick={plusSaveMemory}>M+</button>

      <button type="button" className={classNames(styles.btn, styles.btn_save, styles.minusMemory)}
      onClick={minusSaveMemory}>M-</button>
      
      <button type="button" className={classNames(styles.btn, styles.btn_save, styles.ms)}
      onClick={saveNumber}>MS</button>
    </section>
  );
}

export default MemoryButtons;
