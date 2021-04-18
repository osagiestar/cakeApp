import "./App.css";
import data from './data';
import { BrowserRouter, Link } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
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
          <main className="main">
            <div className="cake-group">
              <HomePage />
            </div>
          </main>
          <footer className="footer">
            <p> All copyright reserved @bakesbydebbie 2021</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
