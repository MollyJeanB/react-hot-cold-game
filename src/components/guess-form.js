import React from "react";
import { connect } from "react-redux";
import { makeGuess } from "../actions";

import styles from "../component-style/guess-form.css";

export class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    const value = this.input.value;
    this.props.dispatch(makeGuess(value));
    this.input.value = "";
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <div className={styles.inputbox}>
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
        <div className={styles.buttonbox}>
          <button type="submit">Make Guess</button>
        </div>
      </form>
    );
  }
}

export default connect()(GuessForm);
