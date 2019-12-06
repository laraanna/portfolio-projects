import React from 'react';
import './App.css';
import Routes from "./routes";
import Navigation from "./components/Navigation";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-154123382-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes />
    </div>
  );
}


export default App;
