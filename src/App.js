import React from 'react';
import './App.css';
import Monstera from './components/svgs/monstera.svg'
import Logo from './components/Logo';

function App() {
  return (
    <div className="App">
      <img src={Monstera} alt="monstera logo" className="monstera" />
      <Logo className="logo" />
    </div>
  );
}

export default App;
