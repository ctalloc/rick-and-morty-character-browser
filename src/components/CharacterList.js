import CharacterCard from "./CharacterCard";
import "../stylesheets/App.scss";

const CharacterList = (props) => {
  const characters = props.chars.map((char, i) => {
    return (
      <li key={i}>
        <CharacterCard chardata={char}></CharacterCard>
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
