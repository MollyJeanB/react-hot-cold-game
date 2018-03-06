import React from "react";

import "./guess-form.css";

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.onSetGuess) {
      const value = this.input.value;
      this.props.onSetGuess(value);
    }
    this.input.value = "";
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <div class="inputbox">
          <input
            type="number"
            min="1"
            max="100"
            placeholder="Enter Your Guess"
            autoComplete="off"
            ref={input => (this.input = input)}
            required
          />
        </div>
        <div className="buttonbox">
          <button type="submit">Make Guess</button>
        </div>
      </form>
    );
  }
}
