import React from 'react';
import "./App.css";
// import data from './data';
import { BrowserRouter } from 'react-router-dom';
// import HomePage from './Components/HomePage';
import Header from "./Components/Header";

function App() {
  return (
     
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <Header />
          {/* <HomePage /> */}
          <footer className="footer">
            <p> All copyright reserved @bakesbydebbie 2021</p>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
