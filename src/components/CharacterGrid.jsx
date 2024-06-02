import CharacterSheet from './CharacterSheet';
import '../style-sheets/CharacterGrid.css'
import React, { useState, useEffect } from 'react';

function CharacterGrid({}) {

/*

conexion con la api aun no lo logro de la forma que quiero

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
  
  */


  return (
    <div className="character-grid">
      {characters.map((char, index) => (
        <CharacterSheet key={index} image={char.image} name={char.name} />
      ))}
    </div>
  );
}

export default CharacterGrid;