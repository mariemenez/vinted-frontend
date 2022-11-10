import { Link } from "react-router-dom";

const Header = ({ token, handleToken }) => {
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
          {token ? (
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => {
                handleToken(null);
              }}
            >
              Se deconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </>
          )}

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
