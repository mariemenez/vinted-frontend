import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import Cookies from "js-cookie";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [filters, setFilters] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };
  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        filters={filters}
        setFilters={setFilters}
      />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          filters={filters}
          setFilters={setFilters}
        />
        <Route path="offer/:id" element={<Offer />} />
        <Route path="signup" element={<Signup handleToken={handleToken} />} />
        <Route path="login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
