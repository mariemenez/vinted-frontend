import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  console.log({ id });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-vinted--6gc2xpkgkrgz.code.run/offer/${id}`
        );

        setData(response.data);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>
      <Loading />
    </div>
  ) : (
    <div className>
      <div className="offer">
        <section className="left">
          <img src={data.product_image.picture} alt="clothes" />
          {console.log(data)}
        </section>
        <section className="right">
          <div className="informations">
            <div className="haut">
              <span className="price">{data.product_price} €</span>
              {data.product_details.map((elem) => {
                return (
                  <div className="haut-details">
                    {elem.brand ? (
                      <p>
                        {" "}
                        MARQUE : <span>{elem.brand}</span>
                      </p>
                    ) : null}
                    {elem.size ? (
                      <p>
                        {" "}
                        TAILLE : <span>{elem.size}</span>{" "}
                      </p>
                    ) : null}
                    {elem.condition ? (
                      <p>
                        ETAT : <span>{elem.condition}</span>
                      </p>
                    ) : null}
                    {elem.color ? (
                      <p>
                        COULEUR : <span>{elem.color}</span>
                      </p>
                    ) : null}
                    {elem.city ? (
                      <p>
                        EMPLACEMENT : <span>{elem.city}</span>{" "}
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
              <div className="owner">
                {data.owner !== undefined &&
                data.owner.account !== undefined &&
                data.owner.account.avatar !== undefined ? (
                  <img
                    src={data.owner.account.avatar.secure_url}
                    alt="avatar"
                  />
                ) : null}
                {data.owner ? (
                  <p>{data.owner.account.username}</p>
                ) : (
                  <p>vendeur anonyme</p>
                )}
              </div>
            </div>

            <div className="acheter">
              <button>Acheter</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offer;
