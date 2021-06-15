import React, { useRef, useEffect } from "react";
import "./switch.css";

function Switch() {
  const ref = useRef(null);
  function handleChange() {
    /* console.log(ref.current.checked); */
    if (ref.current.checked) {
      document.body.classList.remove("is-light-mode");
      document.body.classList.add("is-dark-mode");
    } else {
      document.body.classList.remove("is-dark-mode");
      document.body.classList.add("is-light-mode");
    }
  }
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      ref.current.setAttribute("checked", true);
    }
  }, [ref]);
  return (
    <div className="toggle toggle--daynight">
      <input
        ref={ref}
        onChange={handleChange}
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
