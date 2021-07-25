import React, { useState, useEffect } from 'react';

export const phrases = () => {

  let hackertitles = [

    "Bypassing Permissions...",
    "Scanning Drives...",
    "Forcing Firewall...",
    "Accessing Files...",
    "Keygen Loading...",
    "Loading Codes...",
    "Duping Logins...",
    "Recreating Usernames..."

]

  return hackertitles[Math.floor(Math.random() * hackertitles.length)];
}

const TitlePhrase = () => {
  const [oldPhrase, setSeconds] = useState(phrases());

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(phrases());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="App-header">
    <p>
      {oldPhrase}
    </p>
  </header>
  );
};

export {TitlePhrase};