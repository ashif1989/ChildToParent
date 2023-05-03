import React from "react";
import "./ElementsHdr.css";

const ElementsHeader = () => {
  return (
    <div>
      <h1>Expense Sheet</h1>
      <h2>Below are the list of expenses</h2>
      <span>No. </span>
      <span>Item </span>
      <span>Date </span>
      <span>Amount </span>
    </div>
  );
};

export default ElementsHeader;
