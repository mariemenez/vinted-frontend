import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Login = ({ handleToken, menu, setMenu, token }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--backend-vinted--6gc2xpkgkrgz.code.run/user/login",
        {
          email: email,
          password: password,
        }
      );

      const token = response.data.token;
      handleToken(token);
      navigate("/");
    } catch (error) {
      if (error.response.status === 400) {
        setErrorMessage("Veuillez remplir tous les champs !");
      }
      console.log(error);
    }
  };

  return (
    <div>
      <Menu
        menu={menu}
        setMenu={setMenu}
        token={token}
        handleToken={handleToken}
      />
      <div className="container signup">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="inscription">
            <p className="error-login">{errorMessage}</p>
            <input type="submit" value="Se connecter" />
          </div>
        </form>
        <Link className="switch-connexion" to="/signup">
          Pas encore de compte ? Inscris toi !
        </Link>
      </div>
    </div>
  );
};

export default Login;
