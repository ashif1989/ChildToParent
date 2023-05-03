import React from "react";

const ListItems = (props) => {
  props.items.map((item) => {
    console.log("ListItems", item);
    return (
      <>
        <p>{item.id}</p>
        <p>{item.expenseItem}</p>
        <p>{item.expenseDate}</p>
        <p>{item.expenseAmount}</p>
      </>
    );
  });
};

export default ListItems;
