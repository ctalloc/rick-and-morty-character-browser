import CharacterCard from "./CharacterCard";
import "../stylesheets/layout/_characterlist.scss";
import { Link } from "react-router-dom";

const CharacterList = (props) => {
  const characters = props.chars.map((char, i) => {
    return (
      <li key={i}>
        <Link to={`./character/${char.id}`}>
          <CharacterCard chardata={char}></CharacterCard>
        </Link>  
      </li>
    );
  });
  return (
    <section>
      <ul className="charList">{characters}</ul>
    </section>
  );
};

export default CharacterList;
