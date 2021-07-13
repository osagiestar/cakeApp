import React, {useState} from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from './HomePage';
import Customer from './Customer';
import SignIn from './SignIn';

const Header = () => {
const [checkSignIn, setCheckSignIn] = useState(false);
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
          {!checkSignIn && <Link to="/customers/all"> Customer </Link> }
          <a href="cart.html"> Cart </a>
          <Link to="/customer"> Sign In </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/cakes" component={HomePage} />
        <Route path="/customer" component={SignIn} />
        <Route path="/customers/all" component={Customer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Header;