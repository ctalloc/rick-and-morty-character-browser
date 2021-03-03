import "../stylesheets/App.scss";

const CharacterCard = (props) => {
  return (
    <article className='charCard'>
      <img className='charCard__img' src={props.chardata.image} alt={props.chardata.name} />
      <h2 className='charCard__title'>{props.chardata.name}</h2>
    </article>
  );
};

export default CharacterCard;
