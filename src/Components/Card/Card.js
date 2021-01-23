import React from "react";
import { useHistory } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const history = useHistory();
  const routeTosection = (path) => {
    history.push(`./men/${path}`);
  };
  return (
    <div className="card">
      <div className="card-part" onClick={() => routeTosection(props.name1)}>
        <div className="card-img-container">
          <img className="img" src={props.img1}></img>
        </div>
        <div className="img-details">{props.name1}</div>
      </div>
      <div className="card-part" onClick={() => routeTosection(props.name2)}>
        <div className="card-img-container">
          <img className="img" src={props.img2}></img>
        </div>
        <div className="img-details">{props.name2}</div>
      </div>
    </div>
  );
};

export default Card;
