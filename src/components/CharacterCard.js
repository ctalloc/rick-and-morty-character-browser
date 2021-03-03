const CharacterCard = (props) => {
  console.log(props);
  return (
    <article>
      <img src={props.chardata.image} alt={props.chardata.name} />
      <h2>{props.chardata.name}</h2>
    </article>
  );
};

export default CharacterCard;
