import React from "react";

import styles from "./guess-history.css";

export default function GuessHistory(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <div className={styles.historybox}>
      <ul id="guessHistory">{guesses}</ul>
    </div>
  );
}
