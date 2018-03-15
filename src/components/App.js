import React from "react";

import styles from "../component-style/App.css";

import HotColdBar from "./hot-cold-bar";
import GuessForm from "./guess-form";
import GuessCount from "./guess-count";
import GuessHistory from "./guess-history";

export default function App(props) {
  return (
    <div className={styles.app}>
      <h1>Hot or Cold?</h1>
      <div className={styles.gamecontain}>
        <HotColdBar />
        <GuessForm />
        <GuessCount />
        <GuessHistory />
      </div>
    </div>
  );
}
