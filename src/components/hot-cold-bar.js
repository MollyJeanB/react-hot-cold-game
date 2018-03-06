import React from "react";

import "./hot-cold-bar.css";

export default function HotColdBar(props) {
  return (
    <div className="ganderbox">
      <h2>{props.hotCold}</h2>
    </div>
  );
}
