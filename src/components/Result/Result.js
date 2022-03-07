import React, { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";
import styles from "./Result.module.css";

function Result() {
    const result = useContext(ResultContext);

  return (
    <section className={styles.result}>
      <p className={styles.result_text}>{result || 0}</p>
    </section>
  );
}

export default Result;
