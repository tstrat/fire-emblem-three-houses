import React from 'react';
import './App.css';
import Title from './components/Title/Title';
import Header from './components/Header/Header';
// import Character from './components/Characters/Character';
import CharacterSelect from './components/CharacterSelect/CharacterSelect';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <Title />
        <CharacterSelect/>
        {/* <Character /> */}
      </div>
    </div>
  );
}

export default App;
