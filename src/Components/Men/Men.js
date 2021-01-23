import React from "react";
import "./men.css";
import shirt from "../Images/Men_Section/shirt.jpg";
import shoes from "../Images/Men_Section/shoes.jpg";
import kurta from "../Images/Men_Section/kurta.jpg";
import jeans from "../Images/Men_Section/jeans.jpg";
import trackpants from "../Images/Men_Section/trackpants.jpg";
import watch from "../Images/Men_Section/watch.jpg";

import Card from "../Card/Card";

const Men = () => {
  return (
    <div className="men-section">
      <div className="title">FOR HIM</div>
      <div className="card-container">
        <Card img1={shirt} img2={shoes} name1="Shirts" name2="Shoes" />
        <Card img1={kurta} img2={jeans} name1="Kurta" name2="Jeans" />
        <Card
          img1={trackpants}
          img2={watch}
          name1="Track Pants"
          name2="Watches"
        />
      </div>
    </div>
  );
};

export default Men;
