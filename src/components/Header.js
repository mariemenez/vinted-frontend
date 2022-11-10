import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header container">
      <div className="top">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
            alt="logo"
          />
        </Link>
        <input type="text" placeholder="Rechercher des articles" />

        <div className="login-out">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </div>
      </div>
      <div>
        <nav className="nav">
          <ul>
            <li>Femmes</li>
            <li>Hommes</li>
            <li>Enfants</li>
            <li>Maison</li>
            <li>Divertissement</li>
            <li>Animaux</li>
            <li>A propos</li>
            <li>Notre plateforme</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
