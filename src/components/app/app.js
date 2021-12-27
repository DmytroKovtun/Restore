import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeaderContainer from '../shop-header.js';
import { HomePage, CartPage } from '../pages';
import './app.css';

const App = () => {
  
  return (
    <main role="main" className="container">
      <ShopHeaderContainer/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />
        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </main>
  );
};

export default App;