import React from "react";
import "./ElementsList.css";
import ListItems from "./ListItems";

let data = "Item has been added";
const ElementsList = (props) => {
  let handleAddItem = () => {
    props.callAddOrRemoveItem(data);
  };
  let handleRemoveItem = () => {
    props.callAddOrRemoveItem("Item has been removed");
  };
  return (
    <>
      <ListItems items={props.items} />
      <br></br>
      <button onClick={handleAddItem}>Additem</button>
      <button onClick={handleRemoveItem}>Removeitem</button>
    </>
  );
};

export default ElementsList;
