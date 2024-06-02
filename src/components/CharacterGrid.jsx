import CharacterSheet from './CharacterSheet';
import '../style-sheets/CharacterGrid.css'
import React, { useState, useEffect } from 'react';

function CharacterGrid({characters}) {



  return (
    <div className="character-grid">
      {characters.map((char, index) => (
        <CharacterSheet key={index} image={char.image} name={char.name} />
      ))}
    </div>
  );
}

export default CharacterGrid;