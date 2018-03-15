import React from "react";
import { connect } from "react-redux";

import styles from "../component-style/hot-cold-bar.css";

export function HotColdBar(props) {
  return (
    <div className={styles.ganderbox}>
      <h2>{props.hotCold}</h2>
    </div>
  );
}

const mapStateToProps = state => ({
  hotCold: state.hotCold
});

export default connect(mapStateToProps)(HotColdBar);
