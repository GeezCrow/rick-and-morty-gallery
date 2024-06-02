import axios from "axios"

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