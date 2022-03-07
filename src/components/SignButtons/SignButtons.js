import React from "react";
import styles from "./SignButtons.module.css";
import classNames from "classnames";

function SignButtons() {
  return (
    <section className={styles.signButtons}>
      <button
        type="button"
        className={classNames(styles.btn, styles.percent, styles.btn_grey)}
      >
        %
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.c, styles.btn_grey)}
      >
        c
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.btn_grey, styles.ce)}
      >
        ce
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.backspace, styles.btn_grey)}
      >
        ⌫
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.openBracket, styles.btn_grey)}
      >
        (
      </button>
      <button
        type="button"
        className={classNames(styles.btn, styles.closeBracket, styles.btn_grey)}
      >
        )
      </button>
    </section>
  );
}

export default SignButtons;
