import { Link } from "react-router-dom";

const Header = ({ token, handleToken, filters, setFilters }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="top">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Vinted_logo.png"
              alt="logo"
            />
          </Link>
          <input
            type="text"
            placeholder="Rechercher des articles"
            value={filters}
            onChange={(event) => {
              setFilters(event.target.value);
            }}
          />

          <div className="nav-top">
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
              <div className="login-signup">
                <Link to="/signup">
                  <button>S'inscrire</button>
                </Link>
                <Link to="/login">
                  <button>Se connecter</button>
                </Link>
              </div>
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
    </div>
  );
};

export default Header;
