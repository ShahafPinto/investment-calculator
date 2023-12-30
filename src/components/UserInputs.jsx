import React from "react";

export default function UserInputs({ tableData, onChange}) {
    
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            onChange={(event)=>onChange('initialInvestment', event.target.value)}
            type="number"
            required
            value={tableData.initialInvestment}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            onChange={(event)=>onChange('annualInvestment', event.target.value)}
            type="number"
            required
            value={tableData.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            onChange={(event)=>onChange('expectedReturn', event.target.value)}
            type="number"
            required
            value={tableData.expectedReturn}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            onChange={(event)=>onChange('duration', event.target.value)}
            type="number"
            required
            value={tableData.duration}
          />
        </p>
      </div>
    </section>
  );
}
