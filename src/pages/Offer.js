import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <div className>
      <div className="offer">
        <section className="left">
          <img src={data.product_pictures[0].secure_url} alt="clothes" />
        </section>

        <section className="right">
          <div className="informations">
            <div className="haut">
              <span className="price">{data.product_price} €</span>
              {data.product_details.map((elem) => {
                return (
                  <div className="haut-details">
                    {elem.MARQUE ? (
                      <p>
                        {" "}
                        MARQUE : <span>{elem.MARQUE}</span>
                      </p>
                    ) : null}
                    {elem.TAILLE ? (
                      <p>
                        {" "}
                        TAILLE : <span>{elem.TAILLE}</span>{" "}
                      </p>
                    ) : null}
                    {elem.ÉTAT ? (
                      <p>
                        ETAT : <span>{elem.ÉTAT}</span>
                      </p>
                    ) : null}
                    {elem.COULEUR ? (
                      <p>
                        COULEUR : <span>{elem.COULEUR}</span>
                      </p>
                    ) : null}
                    {elem.EMPLACEMENT ? (
                      <p>
                        EMPLACEMENT : <span>{elem.EMPLACEMENT}</span>{" "}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
            <div className="bas">
              <p>
                <span>{data.product_name}</span>
              </p>
              <p>{data.product_description}</p>
              {data.offer ? (
                <p>{data.offer.owner.account.username}</p>
              ) : (
                <p>vendeur anonyme</p>
              )}
              <button>Acheter</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offer;
