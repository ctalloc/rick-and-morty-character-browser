import logo from "../images/RandM_logo.png";
import "../stylesheets/layout/_header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logocontainer">
        <img className="header__logo" src={logo} alt="logo"></img>
      </div>
      <h1 className="header__title">Character info and sorting</h1>
    </header>
  );
};

export default Header;
