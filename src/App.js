import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Men from "./Components/Men/Men";
import Shirts from "./Components/Shirts/Shirts";
import Buy from "./Components/Buy/Buy";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  const [idsOfBaggedItems, setIdsofBaggedItems] = useState([]);
  const [number, setNumber] = useState(0);

  const handler = (id, size, brand, src, price, category) => {
    const existingItem = idsOfBaggedItems.filter((item) => item.id === id);

    if (existingItem.length === 0) {
      setIdsofBaggedItems([
        ...idsOfBaggedItems,
        { id, size, brand, src, price, category },
      ]);
      setNumber(number + 1);
    }
  };

  const removeBaggedItem = (itemid) => {
    let idx;
    for (let i = 0; i < idsOfBaggedItems.length; i++) {
      if (idsOfBaggedItems[i].id === itemid) {
        idx = i;
        break;
      }
    }

    const tempArr = [...idsOfBaggedItems];
    tempArr.splice(idx, 1);
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
        <Route exact path="/">
          <Homepage />
        </Route>
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
