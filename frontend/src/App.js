import "./App.css";
import data from './data'
function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <header className="header">
          <div className="logo">
            <img className="logo" src="./Cake_images/logo.png" alt="logo" />
          </div>
          <div className="brand-name">
            <a href="index.html"> bakesbydebbie </a>
          </div>
          <div className="header-links">
            <a href="cart.html"> Cart </a>
            <a href="signin.html"> Sign In </a>
          </div>
        </header>
        <main className="main">
          <div className="cake-group">
            <ul className="items">
              {data.map((item) => {
                return (
                  <li>
                <div className="item">
                  <img
                    className="cake-image"
                   src= {item.image} alt="cake-image"
                  />
                  <div href="cake1.html"> {item.name} </div>
                  <div className="cake-price"> Price: £{item.price} </div>
                </div>
                </li>
                )  })}
            </ul>
          </div>
        </main>
        <footer className="footer">
          <p> All copyright reserved @bakesbydebbie 2021</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
