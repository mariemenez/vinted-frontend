import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Article from "../components/Article";
import Loading from "./Loading";

const Home = ({ filters, setFilters }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // let filters = { filters };
        const response = await axios.get(
          `https://site--backend-vinted--6gc2xpkgkrgz.code.run/offers/?`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [filters]); // ici je mettrai mon state

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div>
      <div className="hero">
        <img
          src="https://static.vinted.com/assets/seller-promotion/gender_test/c/banner-wide-96cebf41372b8de2d64b7e609f0fb2d3c3084f8df0f861fa8b3782231e5c31f8.jpg"
          alt="hero"
        />

        <div className="hero-bloc">
          <div className="hero-text">
            <p>
              Prêts à faire <br></br>du tri dans vos placards ?
            </p>
          </div>
          <div className="hero-button">
            <button>Vends maintenant</button>
          </div>
        </div>
      </div>
      <div className="container">
        <section>
          {data.map((offer, index) => {
            return (
              <div key={index} className="article-container">
                <Link className="lien" to={`/offer/${offer._id}`}>
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
