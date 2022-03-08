import React, { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";
import styles from "./Result.module.css";

function Result({fullFormula}) {
    const result = useContext(ResultContext);

  return (
    <section className={styles.result}>
        <span className={styles.result_formula}>{fullFormula || ''}</span>
      <p className={styles.result_text}>{result || 0}</p>
    </section>
  );
}

export default Result;
