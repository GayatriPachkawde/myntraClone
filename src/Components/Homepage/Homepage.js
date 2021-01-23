import React from "react";
import { useHistory } from "react-router-dom";
import fp_1 from "../Images/fp_1.PNG";
import fp_2 from "../Images/fp_2.PNG";
import fp_3 from "../Images/fp_3.PNG";

import "./homepage.css";

const Homepage = () => {
  const history = useHistory();
  const RouteTomenSection = () => {
    history.push("./men");
  };
  return (
    <div className="homepage-container">
      <img className="homepage-img" src={fp_1} onClick={RouteTomenSection} />
      <img className="homepage-img" src={fp_2} onClick={RouteTomenSection} />
      <img className="homepage-img" src={fp_3} onClick={RouteTomenSection} />
    </div>
  );
};

export default Homepage;
