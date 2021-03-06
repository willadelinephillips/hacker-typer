import './App.css';
import React, { useState } from 'react';
import { generate } from './utils/words';
import useKeyPress from './hooks/useKeyPress';
import {TitlePhrase} from "./components/phrases";
import {ProgressionBar} from "./components/progressionBar";
 
const progressBar = <ProgressionBar />;
const initialWords = generate();
const titlePhrase = <TitlePhrase />;
//console.log(initialWords);

function App() {

  const [leftPadding, setLeftPadding] = useState(
    new Array(20).fill(' ').join(''),
  );
  const [outgoingChars, setOutgoingChars] = useState('');
  const [currentChar, setCurrentChar] = useState(initialWords.charAt(0));
  const [incomingChars, setIncomingChars] = useState(initialWords.substr(1));

  useKeyPress(key => {
    //1
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;
    
    //2
    if (key === currentChar) {
      //3
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      //4
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);
      
      //5      
      setCurrentChar(incomingChars.charAt(0));
      
      //6
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(' ').length < 10) {
        updatedIncomingChars +=' ' + generate();
      }
      setIncomingChars(updatedIncomingChars);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {titlePhrase}
        </p>
        <p>
          {progressBar}
        </p>
      </header>
      <body className="App-body">
      <p className="Character">
          <span className="Character-out">
            {(leftPadding + outgoingChars).slice(-20)}
          </span>
          <span className="Character-current">{currentChar}</span>
          <span>{incomingChars.substr(0, 20)}</span>
        </p>
      </body>
    </div>
  );
}

export default App;
