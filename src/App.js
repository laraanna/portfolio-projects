import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes />
    </div>
  );
}

export default App;
