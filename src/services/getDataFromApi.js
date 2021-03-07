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
            location: character.location.name,
            type: character.type,
            gender: character.gender,
          };
        });
      });
  };
  export default getDataFromApi;
  