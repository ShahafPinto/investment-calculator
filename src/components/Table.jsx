import React from "react";
// import {calculateInvestmentResults} from '../util/investment.js'

export default function Table({ tableData }) {
  console.log(tableData);
  let initialTable = [
    {
      year: undefined,
      valueEndOfYear: undefined,
      interest: undefined,
      annualInvestment: undefined,
    },
  ];

  // if(tableData.year){
  //     initialTable = tableData
  // }

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          {/* <th>Total Interest</th> */}
          <th>Invested Capital</th>
        </tr>
      </thead>
      {tableData.map((row) => {
        // {console.log('here')}
        <tr>
          <td>{row.year}hi</td>
          <td>{row.valueEndOfYear}fff</td>
          <td>{row.interest}fff</td>
          <td>{row.annualInvestment}fff</td>
        </tr>;
      })}
    </table>
  );
}
