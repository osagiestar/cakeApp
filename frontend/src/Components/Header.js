import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Header = () => {
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
                <a href="signin.html"> Sign In </a>
            </div>
        </header>
    </BrowserRouter>
    )
}

export default Header;