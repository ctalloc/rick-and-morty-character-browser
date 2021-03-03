import CharacterCard from './CharacterCard'

const CharacterList = props =>{
    const characters = props.chars.map((char, i) => {
        return (<li key={i}>
            <CharacterCard chardata={char}></CharacterCard>
        </li>)
    });
    return (
      <section>
        <ul>
          {characters}
        </ul>
      </section>
    )};

export default CharacterList;