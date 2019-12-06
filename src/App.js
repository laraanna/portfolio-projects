import React from 'react';
import './App.css';
import Routes from "./routes";
import Navigation from "./components/Navigation";
import ReactGA from 'react-ga';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes />
    </div>
  );
}

function initializeReactGA() {
    ReactGA.initialize('UA-154123382-1');
    ReactGA.pageview('/homepage');
}

export default App;
