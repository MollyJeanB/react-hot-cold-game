import React from "react";
import { connect } from "react-redux";

import styles from "../component-style/guess-history.css";

export function GuessHistory(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <div className={styles.historybox}>
      <ul id="guessHistory">{guesses}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  guesses: state.guesses
});

export default connect(mapStateToProps)(GuessHistory);
