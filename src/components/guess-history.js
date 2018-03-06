import React from "react";

import "./guess-history.css";

export default function GuessHistory(props) {
  const guesses = props.guesses.map((guess, index) => (
    <li key={index}>{guess}</li>
  ));

  return (
    <div className="historybox">
      <ul id="guessHistory">{guesses}</ul>
    </div>
  );
}
