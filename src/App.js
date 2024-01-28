// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPage from "./components/ProductPage"; // Correct the path
import CartPage from "./components/CartPage"; // Correct the path

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductPage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </Router>
  );
}

export default App;
