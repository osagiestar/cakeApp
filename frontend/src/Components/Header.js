import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from './HomePage';
import Customer from './Customer';
import SignIn from './SignIn';

const Header = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <div className="logo">
          <img className="logo" src="./Cake_images/logo.png" alt="logo" />
        </div>
        <div className="brand-name">
          <Link to="/cakes"> bakesbydebbie </Link>
        </div>
        <div className="header-links">
          <Link to="/customer"> Customer </Link>
          <a href="cart.html"> Cart </a>
          <Link to="/customer"> Sign In </Link>
        </div>
      </header>
      <Switch>
        <Route path="/cakes" component={HomePage} />
        {/* <Route exact path= "/cakes" component={Cakes}/> */}
        <Route exact path="/customer" component={SignIn} />
         <Route exact path="/customer" component={Customer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Header;
