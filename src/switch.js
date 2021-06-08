import React from "react";
import "./switch.css";

function Switch() {
  return (
    <div className="toggle toggle--daynight">
      <input
        type="checkbox"
        id="toggle--daynight"
        className="toggle--checkbox"
      />
      <label className="toggle--btn" for="toggle--daynight">
        <span className="toggle--feature"></span>
      </label>
    </div>
  );
}

export default Switch;
