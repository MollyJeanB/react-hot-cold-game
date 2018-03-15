import React from "react";
import { connect } from "react-redux";
import { MAKE_GUESS } from "./actions";

const initialState = {
  guesses: [],
  hotCold: "Take a Gander!",
  currentNumber: Math.floor(Math.random() * 100) + 1
};

export default (state = initialState, action) => {
  if (action.type === MAKE_GUESS) {
    let hotCold, guess;

    guess = parseInt(action.guess, 10);

    if (isNaN(guess)) {
      hotCold = "Not a valid number";

      return Object.assign({}, state, {
        hotCold,
        guesses: [...state.guesses, guess]
      });
    }
    const difference = Math.abs(guess - state.currentNumber);

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

    return Object.assign({}, state, {
      hotCold,
      guesses: [...state.guesses, guess]
    });
  }
  return state;
};
