import React from "react";

import "./guess-count.css";

export default function GuessCount(props) {
  return (
    <div className="countbox">
      <h3>Guess #{props.guessCount}</h3>
    </div>
  );
}
