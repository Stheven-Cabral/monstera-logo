import React from 'react';
import Monstera from './components/svgs/monstera.svg'
import Logo from './components/Logo';
import './scss/styles.scss';

function App() {
  return (
    <div className="logo">
      <img src={Monstera} alt="monstera logo" className="monstera" id="leaf1"/>
      <img src={Monstera} alt="monstera logo" className="monstera" id="leaf2"/>
      <img src={Monstera} alt="monstera logo" className="monstera" id="leaf3"/>
      <img src={Monstera} alt="monstera logo" className="monstera" id="leaf4"/>
      <Logo className="text" />
    </div>
  );
}

export default App;
