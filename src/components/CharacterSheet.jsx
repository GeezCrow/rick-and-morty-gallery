import React from 'react'
import '../style-sheets/CharacterSheet.css'


/*
<div>
{characters.map((char, index) => (
  <CharacterSheet key={index} image={char.image} name={char.name} />
))}
</div>
*/
function CharacterSheet({ image, name, ...props}) {



  return (
    <div className="character-sheet" {...props}>
      <img src={image} alt={name} className="character-image" />
      <h2 className="character-name">{name}</h2>
    </div>
  );
}


export default CharacterSheet;