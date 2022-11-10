import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      username: { username },
      email: { email },
      password: { password },
      newsletter: { newsletter },
    };
    // console.log(data);
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      data
    );
    console.log(response);
  };

  const handleCheck = () => {
    setNewsletter(!newsletter);
  };

  return (
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
        <input type="checkbox" checked={newsletter} onChange={handleCheck} />
        <p>S'incrire a la newsletter</p>
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
