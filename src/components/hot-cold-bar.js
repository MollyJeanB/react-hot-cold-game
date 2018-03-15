import React from "react";

import styles from "../component-style/hot-cold-bar.css";

export default function HotColdBar(props) {
  return (
    <div className={styles.ganderbox}>
      <h2>{props.hotCold}</h2>
    </div>
  );
}
