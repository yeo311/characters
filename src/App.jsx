import React from 'react';
import './App.css';
import CharacterList from './components/Characters/CharacterList';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Filters />
      <CharacterList />
    </>
  );
}

export default App;
