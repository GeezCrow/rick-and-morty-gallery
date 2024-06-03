
import CharacterSheet from './components/CharacterSheet';
import './style-sheets/CharacterGrid.css'


import './App.css';


import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

// se supone que el useEfect es para acceder a la base de datos



  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
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
  }, [currentPage]);

  const previousPage = () => {
    setCurrentPage(prevPage=>Math.max(prevPage -1,1))
  }

  const nextPage = () => {
    setCurrentPage(prevPage => prevPage +1)
    }

  return (
    <div className='App'> 
    
    <div>

       <button className='move-button' onClick={previousPage}>Prev Page</button>
       <button className='move-button' onClick={nextPage}>Next Page</button> 
      
    </div>

    <div className = 'character-grid'>
    {characters.map((char, index) => (
      <CharacterSheet key={index} image={char.image} name={char.name} />
    ))}
      </div>
    </div>
  );
}

export default App