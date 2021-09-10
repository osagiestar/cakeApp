import React, {useState} from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from './HomePage';
import Customer from './Customer';
import SignIn from './SignIn';
import Login from './Login';

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
          <Link className="space" to="/login">
            {" "}
            Login{" "}
          </Link>
          {!checkSignIn && (
            <Link className="space"  to="/customers/all">
              {" "}
              Customer{" "}
            </Link>
          )}
          <a className="space" href="cart.html">
            {" "}
            Cart{" "}
          </a>
          <Link className="space" to="/customer">
            {" "}
            Sign In{" "}
          </Link>
        </div>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/cakes" component={HomePage} />
        <Route path="/customer" component={SignIn} />
        <Route path="/customers/all" component={Customer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Header;