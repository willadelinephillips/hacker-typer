import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { generate } from './utils/words';

const initialWords = generate();
//console.log(initialWords);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hacking into the Database...
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          The React Link
        </a>
      </header>
    </div>
  );
}

export default App;
