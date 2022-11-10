import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>is Loading....</p>
  ) : (
    <div>
      <div className="hero">
        <img
          src="https://static.vinted.com/assets/seller-promotion/gender_test/c/banner-wide-96cebf41372b8de2d64b7e609f0fb2d3c3084f8df0f861fa8b3782231e5c31f8.jpg"
          alt="hero"
        />
      </div>
      <div className="container">
        <section>
          {data.offers.map((offer, index) => {
            return (
              <div key={index} className="article-container">
                <Link to={`/offer/${offer._id}`}>
                  <Article offer={offer} />
                </Link>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
