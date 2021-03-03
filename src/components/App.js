import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/getDataFromApi";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail"
import Filters from "./Filters";

console.log(getDataFromApi());

const App = () => {
  const [chars, setChars] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    getDataFromApi().then((data) => setChars(data));
  }, []);

  const handleFilter = (inputChange) => {
    if (inputChange.key === "name") {
      setName(inputChange.value);
      console.log(name);
    }
  };
  const filteredChars = chars.filter((char) => {
    return char.name.toUpperCase().includes(name.toUpperCase());
  });

  const renderCharDetail = routerProps => {
    console.log('Id del pj de la ruta:', routerProps.match.params.charId);
    const routerCharId = routerProps.match.params.charId;
    const charFound = chars.find(char => char.id === routerCharId);
    if (charFound) {
      return <CharacterDetail char={charFound} />;
    } else {
      return ;
    }
  }

  return (
    <>
      <h1>Rick y Morty buscador</h1>
      <div>
        <Switch>
          <Route path="/" exact>
            <Filters handleFilter={handleFilter} />
            <CharacterList chars={filteredChars} />
          </Route>
          <Route path="/character/:charId" render={renderCharDetail} />
        </Switch>
      </div>
    </>
  );
};
export default App;
