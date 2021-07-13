import React from 'react';
import "./App.css";
// import data from './data';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Customer from './Components/Customer'; 

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="grid-container">
          <Header />
          {!props.customerList ? <HomePage /> : <Customer />}
          <Footer year={new Date().getFullYear()} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
