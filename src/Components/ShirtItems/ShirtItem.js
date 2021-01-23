import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Similar from "../Similar/Similar";
import ShirtData from "../Data/ShirtData";

const ShirtItem = (props) => {
  const history = useHistory();
  const routetoBuy = (product) => {
    history.push(`./Shirts/buy/${product.id}`);
  };
  const [products, setproducts] = useState(props.data);
  const [bgcolor, setbgcolor] = useState("grey");
  const [showSimilar, setShowSimilar] = useState(false);

  const showSimilarComponent = (brand) => {
    const filteredArr = ShirtData.filter((product) => product.brand === brand);
    setproducts(filteredArr);
    setShowSimilar(true);
  };

  const hidesimilar = () => {
    setShowSimilar(false);
  };

  const changeColor = () => {
    if (bgcolor === "grey") {
      setbgcolor("pink");
    } else {
      setbgcolor("grey");
    }
  };
  return (
    <>
      <ul className="shirt-products-container">
        {props.data.map((product) => {
          return (
            <li className="product">
              <div className="img-container">
                <img
                  className="product-img"
                  src={product.src}
                  onClick={() => routetoBuy(product)}
                  alt="product"
                />
                <span className={`wishlist`} onClick={changeColor}>
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </span>
                <span
                  className="similar"
                  onClick={() => showSimilarComponent(product.brand)}
                >
                  View similar
                </span>
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
      </ul>

      {showSimilar ? (
        <Similar data={products} hidesimilar={hidesimilar} />
      ) : null}
    </>
  );
};

export default ShirtItem;
