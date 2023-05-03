import React, { useState } from "react";
import ElementsHeader from "./ElementsHeader";
import ElementsList from "./ElementsList";

let listOfItems = [
  {
    id: 1,
    expenseItem: "Travel",
    expenseDate: "01012023",
    expenseAmount: "1000 RS"
  },
  {
    id: 2,
    expenseItem: "Food",
    expenseDate: "01022023",
    expenseAmount: "2000 RS"
  },
  {
    id: 3,
    expenseItem: "Children",
    expenseDate: "01032023",
    expenseAmount: "3000 RS"
  }
];

const Elements = () => {
  const [data, setData] = useState("");
  const [clicked, setClicked] = useState(false);
  let callAddOrRemoveItem = (val) => {
    setClicked(true);
    setData(val);
  };

  return (
    <>
      <ElementsHeader />
      {clicked ? data : ""}
      <ElementsList
        items={listOfItems}
        callAddOrRemoveItem={callAddOrRemoveItem}
      />
    </>
  );
};

export default Elements;
