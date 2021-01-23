import React from "react";

const MiniNav = (props) => {
  return (
    <div className="mini-nav">
      <ul className="nav-items">
        <li>Men's Shirt Collection</li>
        <li>
          <label for="sort">Sort By : </label>
          <select
            name="sort"
            id="sort"
            onChange={(e) => props.updateSort(e.target.value)}
          >
            <option value="recomended">Recomended</option>
            <option value="LtoH">price low to high</option>
            <option value="HtoL">price high to low</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default MiniNav;
