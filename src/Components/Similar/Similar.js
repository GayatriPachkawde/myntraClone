import React from "react";
import { useHistory } from "react-router-dom";
import "./similar.css";

const Similar = (props) => {
  const history = useHistory();
  const routetoBuy = (product) => {
    console.log(product);
    history.push(`./Shirts/buy/${product.id}`);
  };

  return (
    <div className="view-similar">
      <ul className="view-similar-container">
        {props.data.map((product) => {
          return (
            <li className="product">
              <div
                className="img-container"
                onClick={() => routetoBuy(product)}
              >
                <img className="product-img" src={product.src} alt="product" />
              </div>
              <span
                onClick={() => routetoBuy(product)}
                className="product-brand"
              >
                {product.brand}{" "}
              </span>
              <span
                onClick={() => routetoBuy(product)}
                className="product-category"
              >
                {product.category}{" "}
              </span>
              <span
                onClick={() => routetoBuy(product)}
                className="product-price"
              >
                Rs.{product.price}
              </span>
            </li>
          );
        })}
        <span className="cross" onClick={props.hidesimilar}>
          X
        </span>
      </ul>
    </div>
  );
};

export default Similar;
