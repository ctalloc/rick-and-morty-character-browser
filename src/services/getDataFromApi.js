const getDataFromApi = () => {
    return fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        return data.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            image :character.image,
          };
        });
      });
  };
  export default getDataFromApi;
  