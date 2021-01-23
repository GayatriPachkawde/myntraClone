import React from "react";
import "./bag.css";
import bag from "../Images/bag.PNG";

const Bag = (props) => {
  console.log(props.baggedItems);
  return (
    <div className="bag-container">
      <ul className="bag-list">
        {props.baggedItems.length === 0 ? (
          <>
            <span className="cross" onClick={props.hidebag}>
              X
            </span>
            <img className="bag-img" src={bag} alt="bag" />
          </>
        ) : (
          props.baggedItems.map((product, idx) => {
            return (
              <li className="bag-list-item" key={`shirt${product.src}`}>
                <span className="cross" onClick={props.hidebag}>
                  X
                </span>
                <div className="img-container">
                  <img className="product-img" src={product.src} alt="shirt" />
                </div>
                <span className="size">{product.size}</span>
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
          })
        )}
      </ul>
    </div>
  );
};

export default Bag;
