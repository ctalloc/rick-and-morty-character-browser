import { Link } from "react-router-dom";

const CharacterNotFound = () => {
    return (
        <div className="charDetail">
      <article className="charDetail__container">
        <h2 className="charDetail__title">Are you trying to make science? Cause you failed.</h2>
        <Link to="/">
          <span className="charDetail__link">Back to character list</span>
        </Link>
      </article>
    </div>
    )
    };

export default CharacterNotFound;
