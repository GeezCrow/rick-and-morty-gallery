// App.js

import CharacterSheet from './components/CharacterSheet';
import CharacterGrid from './components/CharacterGrid';
import './App.css';


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        const characterData = response.data.results.map(char => {
          return {
            name: char.name,
            image: char.image
          };
        });

        setCharacters(characterData);
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

  return (
    <div className='App'>
        <CharacterGrid characters={characters}/>
    </div>
  );
}

export default App