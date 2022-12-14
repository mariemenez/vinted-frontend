import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";

const Signup = ({ handleToken, menu, setMenu, token }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--backend-vinted--6gc2xpkgkrgz.code.run/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      const token = response.data.token;
      handleToken(token);
      navigate("/");
      //   console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = () => {
    setNewsletter(!newsletter);
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
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
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
          <div className="newsletter">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={handleCheck}
            />
            <p>S'inscrire ?? notre newsletter</p>
          </div>
          <p className="confidentialit??">
            En m'inscrivant je confirme avoir lu et accept?? les Termes &
            Conditions et Politique de Confidentialit?? de Vinted. Je confirme
            avoir plus de 18 ans.
          </p>
          <div className="inscription">
            <input type="submit" value="S'inscrire" />
          </div>
        </form>
        <Link className="switch-connexion" to="/login">
          Tu a d??j?? un compte ? Connecte toi !
        </Link>
      </div>
    </div>
  );
};

export default Signup;
