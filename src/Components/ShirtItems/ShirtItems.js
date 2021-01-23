import React, { useState } from "react";
import "./ShirtItems.css";
import ShirtItem from "./ShirtItem";

const ShirtItems = (props) => {
  const data = props.data;
  const [sort, setSort] = useState("LtoH");

  return (
    <div className="collection-container">
      <div className="mini-nav">
        <ul className="nav-items">
          <li>Men's Shirt Collection</li>
          <li>
            <label for="sort">Sort By:</label>
            <select
              name="sort"
              id="sort"
              onChange={(e) => {
                setSort(e.target.value);
              }}
            >
              <option value="LtoH">price low to high</option>
              <option value="HtoL">price high to low</option>
            </select>
          </li>
        </ul>
      </div>
      <ShirtItem data={data} sort={sort} />
    </div>
  );
};

export default ShirtItems;
