import React from "react";
import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
  return (
    <header id="header">
      <img
        src={logo}
        alt="investment calculator logo pic"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
