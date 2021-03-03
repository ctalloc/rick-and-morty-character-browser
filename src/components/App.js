import React, { useEffect, useState } from "react";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import Filters from './Filters';

console.log(getDataFromApi());



const App = () => {
  const [chars, setChars] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    getDataFromApi().then((data) => setChars(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
      console.log(name);
    } 
  };
  const filteredChars = chars.filter(char => {return char.name.toUpperCase().includes(name.toUpperCase())});

  return (
    <>
      <h1>Rick y Morty buscador</h1>
      <div>
        <Filters handleFilter={handleFilter} />
        <CharacterList chars={filteredChars} />
      </div>
    </>
  );
};
export default App;
