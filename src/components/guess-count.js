import React from "react";

import styles from "../component-style/guess-count.css";

export default function GuessCount(props) {
  return (
    <div className={styles.countbox}>
      <h3>Guess #{props.guessCount}</h3>
    </div>
  );
}
