import React, { useState } from "react";
import Filter from "../Filter/Filter";
import "./shirts.css";
import ShirtItems from "../ShirtItems/ShirtItems";
import ShirtData from "../Data/ShirtData";

const Shirts = () => {
  const [data, setData] = useState([]);
  const [filterSelected, setfilterSelected] = useState(false);
  const addFilters = (title, filter) => {
    setfilterSelected(true);
    const tempArr = ShirtData.filter((shirt) => {
      if (title === "Brand") {
        return shirt.brand === filter;
      } else if (title === "Color") {
        return shirt.color === filter;
      }
    });
    setData([...data, ...tempArr]);
  };

  const removeFilter = (title, filter) => {
    const tempArr = data.filter((shirt) => {
      if (title === "Brand") {
        console.log(shirt.brand, filter);
        return shirt.brand !== filter;
      } else if (title === "Color") {
        return shirt.color !== filter;
      }
    });
    if (tempArr.length === 0) {
      setfilterSelected(false);
    }
    setData(tempArr);
  };

  return (
    <div className="container">
      <Filter addFilters={addFilters} removeFilter={removeFilter} />
      <ShirtItems data={filterSelected ? data : ShirtData} />
    </div>
  );
};

export default Shirts;
