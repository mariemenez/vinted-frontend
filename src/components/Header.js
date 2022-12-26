import { Link } from "react-router-dom";
import burgerIcone from "../assets/burger-icone.png";

const Header = ({ token, handleToken, filters, setFilters, menu, setMenu }) => {
  // console.log(filters);
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
          <div>
            <input
              type="text"
              placeholder="Rechercher des articles"
              value={filters}
              onChange={(event) => {
                setFilters(event.target.value);
              }}
            />
          </div>
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
            <Link to="/publish">
              <button>Vends tes articles</button>
            </Link>
          </div>
          <img
            src={burgerIcone}
            alt="menu"
            className="button-menu"
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
