import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Men from "./Components/Men/Men";
import Shirts from "./Components/Shirts/Shirts";
import Buy from "./Components/Buy/Buy";
function App() {
  const [idsOfBaggedItems, setIdsofBaggedItems] = useState([]);
  const [number, setNumber] = useState(0);

  const handler = (id) => {
    if (!idsOfBaggedItems.includes(id)) {
      setNumber(number + 1);
      setIdsofBaggedItems([...idsOfBaggedItems, id]);
    }
  };

  const removeBaggedItem = (itemid) => {
    const index = idsOfBaggedItems.indexOf(itemid);

    const tempArr = [...idsOfBaggedItems];
    tempArr.splice(index, 1);
    setIdsofBaggedItems(tempArr);
    setNumber(number - 1);
  };
  return (
    <div className="App">
      <Router>
        <Navbar
          number={number}
          baggedItems={idsOfBaggedItems}
          removeItems={removeBaggedItem}
        />
        <Route exact path="/"></Route>
        <Route exact path="/men">
          <Men />
        </Route>
        <Route exact path="/men/Shirts">
          <Shirts />
        </Route>
        <Route
          exact
          path="/men/Shirts/buy/:id"
          render={() => <Buy handler={handler} />}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
