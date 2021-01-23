import React from "react";
import { withRouter } from "react-router-dom";
import ShirtData from "../Data/ShirtData";

const Buy = ({ handler, location, match }) => {
  const Searchproduct = ShirtData.filter((product) => {
    return product.id === Number(match.params.id);
  });

  const product = Searchproduct[0];

  return (
    <div className="Container">
      <img src={product.src} />
      <span>{product.brand}</span>
      <button onClick={() => handler(product.id)}>Add to bag</button>
    </div>
  );
};

export default withRouter(Buy);
