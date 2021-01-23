import React, { useState } from "react";
import "./ShirtItems.css";
import ShirtItem from "./ShirtItem";
import MiniNav from "./Mini-nav";

const ShirtItems = (props) => {
  const data = props.data;
  const [sort, setSort] = useState("LtoH");

  return (
    <div className="collection-container">
      <MiniNav updateSort={props.updateSort} />
      <ShirtItem data={data} sort={sort} />
    </div>
  );
};

export default ShirtItems;
