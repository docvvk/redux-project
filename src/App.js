import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './Components/Posts'
import Postform from './Components/Postform'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ backgroundColor: 'pink', padding: '1ch', color: 'navy', textTransform: 'upper', fontFamily: 'cursive' }}>
          Redux Sample App Displaying data from json placeholder API
        </p>
        </header>
        <Postform />
        <hr></hr>
        <Posts  />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      
      {/* <Posts /> */}
    </div>
  );
}

export default App;
