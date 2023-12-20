import React from "react";
// import {calculateInvestmentResults} from '../util/investment.js'

export default function Table({ tableData }) {
  console.log(tableData);
//   let initialTable = [
//     {
//       year: undefined,
//       valueEndOfYear: undefined,
//       interest: undefined,
//       annualInvestment: undefined,
//     }
//   ];
    // const a = [{year: 1,
    //     valueEndOfYear: 22,
    //     interest: 22,
    //     annualInvestment: 33},{year: 2,
    //         valueEndOfYear: 33,
    //         interest: 33,
    //         annualInvestment: 44}]

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
      <tbody>
        {tableData.map((val, valIndex)=>
            <tr key={valIndex}>
                <td>{val.year}</td>                
                <td>{val.valueEndOfYear}</td>
                <td>{isNaN(val.interest) ? (val.interest).toString() : val.interest}</td>
                <td>{val.annualInvestment}</td>
            </tr>
        )}
      </tbody>
    </ table>
  );
}
