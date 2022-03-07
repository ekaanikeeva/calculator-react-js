import React from "react";
import styles from "./MemoryButtons.module.css";
import classNames from "classnames";

function MemoryButtons() {
  return (
    <section className={styles.memory}>
      <button
        type="button"
        className={classNames(styles.btn, styles.btn_save, styles.mc)}
        disabled
      >
        MC
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.btn_save, styles.mr)}
        disabled
      >
        MR
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.btn_save, styles.plusMemory)}
      >
        M+
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.btn_save, styles.minusMemory)}
      >
        M-
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.btn_save, styles.ms)}
      >
        MS
      </button>
    </section>
  );
}

export default MemoryButtons;
