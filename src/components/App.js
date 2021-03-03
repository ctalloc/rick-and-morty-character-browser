import React, { useEffect, useState } from 'react';
import '../stylesheets/App.scss';
import getDataFromApi from '../services/getDataFromApi'
import CharacterList from './CharacterList'

console.log(getDataFromApi());

const App = () => {
  const [chars, setChars] = useState([]);
  useEffect(()=>{
    getDataFromApi().then(data => setChars(data));
  },[]);

  return (
    <>
      <h1>Rick y Morty buscador</h1>
      <div >
        <CharacterList chars={chars}/>
      </div>
    </>
  );
};
export default App;

