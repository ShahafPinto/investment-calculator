import Header from "./components/Header";
import Table from "./components/Table";
import UserInputs from "./components/UserInputs";
import React, { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const initialTable = {
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined,
  };

  const [tableData, setTableData] = useState([]);
  console.log("table data:", tableData);

  function getData() {
    if (
      initialTable.initialInvestment &&
      initialTable.annualInvestment &&
      initialTable.expectedReturn &&
      initialTable.duration
    ) {
      const newTableData = calculateInvestmentResults(initialTable);
      setTableData(newTableData);
    }
  }

  return (
    <div>
      <Header />
      <UserInputs initialTable={initialTable} getData={getData} />
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
