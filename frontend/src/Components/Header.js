import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import SignIn from './SignIn'
//  
// const Header = ({SignIn}) => {
const Header = ({HomePage, Customer}) => {


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
                    <Link to="/customer/"> Sign In </Link>

                </div>

            </header>
            <Route exact path="/" component={HomePage}/>
            {/* <Route exact path= "/cakes" component={Cakes}/> */}
            <Route exact path="/customer/" component={Customer}/>
        </BrowserRouter>
    )
}

export default Header;