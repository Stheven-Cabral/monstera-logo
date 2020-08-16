import React from 'react';
import Monstera from './components/svgs/monstera.svg'
import Logo from './components/Logo';
import './scss/styles.scss';

function App() {
  return (
    <div className="logo">
      <img src={Monstera} alt="monstera logo" className="monstera"/>
      <Logo className="text" />
    </div>
  );
}

export default App;
