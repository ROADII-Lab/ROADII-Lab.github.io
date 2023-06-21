import React from 'react';
import logo from './us-department-of-transportation-1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <text className="App-header">
        TRIMS Home Page
      </text>
      <text className="body-text">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is where we will describe TRIMS.</p>
        <p>We will also link to the solution-specific repositories for consumption.</p>
      </text>
    </div>
  );
}

export default App;
