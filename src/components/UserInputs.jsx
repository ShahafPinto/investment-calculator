import React from "react";

export default function UserInputs({ initialTable, getData }) {
  function handleInitialChange(event) {
    initialTable.initialInvestment = event.target.value;
    getData();
  }
  function handleAnnualChange(event) {
    initialTable.annualInvestment = event.target.value;
    getData();
  }
  function handleReturnChange(event) {
    initialTable.expectedReturn = event.target.value;
    getData();
  }
  function handleDurationChange(event) {
    initialTable.duration = event.target.value;
    getData();
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p id="user-input">
          <label>INITIAL INVESTMENT</label>
          <input
            onChange={handleInitialChange}
            type="number"
            min="0"
            step="1"
            required
          />
        </p>
        <p id="user-input">
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={handleAnnualChange}
            type="number"
            min="0"
            step="1"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p id="user-input">
          <label>EXPECTED RETURN</label>
          <input
            onChange={handleReturnChange}
            type="number"
            min="0"
            step="1"
            required
          />
        </p>
        <p id="user-input">
          <label>DURATION</label>
          <input
            onChange={handleDurationChange}
            type="number"
            min="0"
            step="1"
            required
          />
        </p>
      </div>
    </div>
  );
}
