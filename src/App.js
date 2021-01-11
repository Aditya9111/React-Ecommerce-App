import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
