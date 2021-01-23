import React from "react";
import "./bag.css";
import ShirtData from "../Data/ShirtData";

const Bag = (props) => {
  console.log(props.baggedItems);
  const baggedProducts = ShirtData.filter((product) => {
    return props.baggedItems.includes(product.id);
  });

  return (
    <div className="bag-container">
      <ul className="bag-list">
        {baggedProducts.map((product) => {
          return (
            <li className="bag-list-item">
              <div className="img-container">
                <img className="product-img" src={product.src} />
              </div>

              <span className="product-brand">{product.brand}</span>
              <span className="product-category">{product.category}</span>
              <span className="product-price">{product.price}</span>
              <div className="buttons">
                <button onClick={() => props.removeItems(product.id)}>
                  Remove
                </button>
                <button>Buy Now</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bag;
