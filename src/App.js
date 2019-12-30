import React from 'react';
import logo from './logo.svg';
import './App.css';
import './talha.less'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="test">
          Editt <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link test"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
