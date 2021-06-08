import React from "react"

function Header() {
    return (
      <header className="header">
        <div className="wrapper">
          <div className="header-grid">
            <div>
              <h1>Social Media Dashboard</h1>
              <p className="header-total">Total Followers: 23, 004</p>
            </div>
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
          </div>
        </div>
      </header>
    );
}

export default Header
