import "../stylesheets/layout/_characterdetail.scss";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {

  const subtype = () => {
    if (props.char.type)
      {return ` -  ${props.char.type}`}
    if (!props.char.type)
      {return ""}
  }
  return (
    <div className="charDetail">
      <article className="charDetail__container">
        <h2 className="charDetail__title">{props.char.name}</h2>
        <section className="charDetail__card">
          <img className="charDetail__image" src={props.char.image} alt={props.char.name} />
          <ul className="charDetail__props">
            <li>Name: {props.char.name}</li>
            <li>Status: {props.char.status}</li>
            <li>Species: {props.char.species}{subtype()}</li>
            <li>Gender: {props.char.gender}</li>
            <li>Last seen at: {props.char.location}</li>
          </ul>
        </section>
        <Link to="/">
          <span className="charDetail__link">Back</span>
        </Link>
      </article>
    </div>
  );
};

export default CharacterDetail;
