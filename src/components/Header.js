import { Link } from "react-router-dom";

const Header = ({
  token,
  handleToken,
  filters,
  setFilters,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sort,
  setSort,
}) => {
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
          <button
            onClick={() => {
              setSort("price-asc");
            }}
          >
            prix +
          </button>
          <button
            onClick={() => {
              setSort("price-desc");
            }}
          >
            prix -
          </button>
          <input
            type="text"
            placeholder="priceMin"
            value={priceMin}
            onChange={(event) => {
              setPriceMin(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="priceMax"
            value={priceMax}
            onChange={(event) => {
              setPriceMax(event.target.value);
            }}
          />

          {/* <nav className="nav">
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
          </nav> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
