import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ShirtData from "../Data/ShirtData";
import "./buy.css";

const Buy = ({ handler, location, match }) => {
  const Searchproduct = ShirtData.filter((product) => {
    return product.id === Number(match.params.id);
  });
  const [size, setsize] = useState("");
  const product = Searchproduct[0];
  const [showImage, setshowImage] = useState(false);
  return (
    <div className="buy-container" onClick={() => setshowImage(false)}>
      <ul>
        <li>
          <div className="img-wrapper">
            <img
              src={product.src}
              alt=""
              className="hover-zoom"
              onClick={(e) => {
                e.stopPropagation();
                setshowImage(true);
              }}
              alt="product-img"
            />
          </div>
        </li>
        <li className="flex">
          {" "}
          <span className="brand">{product.brand}</span>
          <span className="category">{product.category}</span>
          <span className="price">Rs. {product.price}</span>
          <span className="flex-row">
            <h3>Size: </h3>
            <span className="flex-column">
              <label for="32">32</label>
              <input
                type="radio"
                name="size"
                id="32"
                onChange={(e) => setsize(e.target.id)}
              />
            </span>
            <span className="flex-column">
              <label for="34">34</label>
              <input
                type="radio"
                name="size"
                id="34"
                onChange={(e) => setsize(e.target.id)}
              />
            </span>
            <span className="flex-column">
              <label for="34">34</label>
              <input
                type="radio"
                name="size"
                id="36"
                onChange={(e) => setsize(e.target.id)}
              />
            </span>
            <span className="flex-column">
              <label for="36">36</label>
              <input
                type="radio"
                name="size"
                id="38"
                onChange={(e) => setsize(e.target.id)}
              />
            </span>
          </span>
          <button
            onClick={() =>
              handler(
                product.id,
                size,
                product.brand,
                product.src,
                product.price,
                product.category
              )
            }
          >
            Add to bag
          </button>
        </li>
      </ul>

      {showImage ? (
        <>
          <div className="zoom-container">
            <img src={product.src} className="zoom" alt="zoom" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default withRouter(Buy);
