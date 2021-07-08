import React from 'react';
import "./App.css";
// import data from './data';
import { BrowserRouter } from 'react-router-dom';
// import HomePage from './Components/HomePage';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
     
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <Header />
          {/* <HomePage /> */}
         <Footer year = {new Date().getFullYear()}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
