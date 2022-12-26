import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";
import Cookies from "js-cookie";
import Publish from "./pages/Publish";
import Footer from "./components/Footer";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [filters, setFilters] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [sort, setSort] = useState("");
  const [menu, setMenu] = useState(false);

  // console.log(filters);

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
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        sort={sort}
        setSort={setSort}
        menu={menu}
        setMenu={setMenu}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filters={filters}
              priceMin={priceMin}
              setPriceMin={setPriceMin}
              priceMax={priceMax}
              setPriceMax={setPriceMax}
              sort={sort}
              setSort={setSort}
              menu={menu}
              setMenu={setMenu}
              token={token}
              handleToken={handleToken}
            />
          }
        />
        <Route path="offer/:id" element={<Offer />} />
        <Route
          path="signup"
          element={
            <Signup
              handleToken={handleToken}
              menu={menu}
              setMenu={setMenu}
              token={token}
            />
          }
        />
        <Route
          path="login"
          element={
            <Login
              handleToken={handleToken}
              menu={menu}
              setMenu={setMenu}
              token={token}
            />
          }
        />
        <Route
          path="publish"
          element={
            <Publish
              token={token}
              handleToken={handleToken}
              menu={menu}
              setMenu={setMenu}
            />
          }
        />
        <Route path="payment" element={<Payment token={token} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
