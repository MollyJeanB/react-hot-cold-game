import React from "react";
import { connect } from "react-redux";

import styles from "../component-style/guess-count.css";

export function GuessCount(props) {
  return (
    <div className={styles.countbox}>
      <h3>Guess #{props.guessCount}</h3>
    </div>
  );
}

const mapStateToProps = state => ({
  guessCount: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
