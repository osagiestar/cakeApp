import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import SignIn from './SignIn'
 
const Header = () => {
    const SignIn = ({ match }) => {
  return <h3> Customer: {match.params.name}</h3>;
};
    return (
    <BrowserRouter>
        <header className="header">
            <div className="logo">
                <img className="logo" src="./Cake_images/logo.png" alt="logo" />
            </div>
            <div className="brand-name">
                <Link to="/"> bakesbydebbie </Link>
            </div>
            <div className="header-links">
                <a href="cart.html"> Cart </a>
               <Link to="/customers"> Sign In </Link>

            </div>
             
        </header>
        <Route path="/customers/" component={SignIn} />
    </BrowserRouter>
    )
}

export default Header;