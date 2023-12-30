import Header from "./components/Header";
import Table from "./components/Table";
import UserInputs from "./components/UserInputs";
import React, { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [tableData, setTableData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = tableData.duration >= 1;

  function handleChange(inputIdent, newValue) {
    setTableData((prevData) => {
      return {
        ...prevData,
        [inputIdent]: Number(newValue),
      };
    });
  }

  function getData() {
    if (
      tableData.initialInvestment &&
      tableData.annualInvestment &&
      tableData.expectedReturn &&
      tableData.duration
    ) {
      const newTableData = calculateInvestmentResults(tableData);
      setTableData(newTableData);
    }
  }
  return (
    <div>
      <Header />
      <UserInputs onChange={handleChange} tableData={tableData} />
      {inputIsValid ? (
        <Table tableData={tableData} />
      ) : (
        <p className="center">Input Is Not Valid</p>
      )}
    </div>
  );
}

export default App;
