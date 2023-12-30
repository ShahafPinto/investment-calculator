import React from "react";
// import formatter from '../util/investment'
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Table({ tableData }) {
  console.log("tableData:", tableData);

  const resultsData = calculateInvestmentResults(tableData);
  function getInitialInvestment() {
    const result =
      resultsData[0].valueEndOfYear -
      resultsData[0].interest -
      resultsData[0].annualInvestment;
    return result;
  }

  console.log(resultsData);

  function getInvestedCapital(valueEndOfYear, annualInvestment, year) {
    const interest = getTotalInterst(valueEndOfYear, annualInvestment, year);
    const result = valueEndOfYear - interest;
    return result;
  }

  //   let totalInterest = 0;
  function getTotalInterst(valueEndOfYear, annualInvestment, year) {
    const totalInterest =
      valueEndOfYear - annualInvestment * year - getInitialInvestment();
    return totalInterest;
  }
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((val, valIndex) => (
          <tr key={valIndex}>
            <td>{val.year}</td>
            <td>{formatter.format(val.valueEndOfYear)}</td>
            <td>{formatter.format(val.interest)}</td>
            <td>
              {formatter.format(
                getTotalInterst(
                  val.valueEndOfYear,
                  val.annualInvestment,
                  val.year
                )
              )}
            </td>
            <td>
              {formatter.format(
                getInvestedCapital(
                  val.valueEndOfYear,
                  val.annualInvestment,
                  val.year
                )
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
