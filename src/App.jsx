import Header from "./components/Header";
import Table from "./components/Table";
import UserInputs from "./components/UserInputs";
import React, { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  // const initialTable = {
  //   initialInvestment: undefined,
  //   annualInvestment: undefined,
  //   expectedReturn: undefined,
  //   duration: undefined,
  // };

  const [tableData, setTableData] = useState({ initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,});

  function handleChange(inputIdent, newValue){
    setTableData((prevData)=>{
        return{
          ...prevData,  
          [inputIdent] : Number(newValue),
        }
    })
}
  // console.log("table data:", tableData);

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
      <UserInputs onChange={handleChange} tableData={tableData}/>
      <Table tableData={tableData} />
    </div>
  );
}

export default App;
