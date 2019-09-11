import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Header from './components/Header/Header';
import Character from './components/Characters/Character';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>

        <Title />
        <Character />
      </div>
    </div>
  );
}

export default App;
