import React from "react";

import "./App.css";

import HotColdBar from "./hot-cold-bar";
import GuessForm from "./guess-form";
import GuessCount from "./guess-count";
import GuessHistory from "./guess-history";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      hotCold: "Take a Gander!",
      currentNumber: Math.floor(Math.random() * 100) + 1
    };
  }

  setGuess(currentGuess) {
    currentGuess = parseInt(currentGuess, 10);
    if (isNaN(currentGuess)) {
      this.setState({ feedback: "Please enter a valid number" });
      return;
    }

    const difference = Math.abs(currentGuess - this.state.currentNumber);

    let hotCold;

    if (difference >= 20) {
      hotCold = "Cold";
    } else if (difference >= 10) {
      hotCold = "Warm";
    } else if (difference >= 5) {
      hotCold = "Hot";
    } else if (difference >= 1) {
      hotCold = "OMG so so hot";
    } else {
      hotCold = "Correct!";
    }

    this.setState({
      hotCold,
      guesses: [...this.state.guesses, currentGuess]
    });
  }

  render() {
    const { hotCold, guesses } = this.state;
    const guessCount = guesses.length;

    return (
      <div className="app">
        <h1>Hot or Cold?</h1>
        <div className="game-contain">
          <HotColdBar hotCold={hotCold} />
          <GuessForm onSetGuess={currentGuess => this.setGuess(currentGuess)} />
          <GuessCount guessCount={guessCount} />
          <GuessHistory guesses={guesses} />
        </div>
      </div>
    );
  }
}
