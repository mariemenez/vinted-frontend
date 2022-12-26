import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Menu from "../components/Menu";

const Publish = ({ token, menu, setMenu, handleToken }) => {
  const [picture, setPicture] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("place", place);
      formData.append("price", price);

      const response = await axios.post(
        "https://site--backend-vinted--6gc2xpkgkrgz.code.run/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            // "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
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
      <div className="background">
        <div className="container">
          {token ? (
            <>
              <h1>Vends ton article</h1>
              <div className="sales-form">
                <form className="form2" onSubmit={handleSubmit}>
                  <div className="photo-article">
                    <div className="photo-details">
                      <input
                        type="file"
                        onChange={(event) => {
                          setPicture(event.target.files[0]);
                        }}
                      />
                    </div>
                  </div>
                  <div className="title-description">
                    <div className="title">
                      <p>Titre</p>
                      <input
                        type="text"
                        placeholder="ex: Chemise Sezanne verte"
                        value={name}
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                      />
                    </div>
                    <div className="description-article">
                      <p>Décris ton article</p>
                      <input
                        type="text"
                        placeholder="ex: portée quelques fois"
                        value={description}
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="conditions-details">
                    <div>
                      <p>Marque</p>
                      <input
                        type="text"
                        placeholder="ex: Mango"
                        value={brand}
                        onChange={(event) => {
                          setBrand(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <p>Taille</p>
                      <input
                        type="text"
                        placeholder="ex: L/40"
                        value={size}
                        onChange={(event) => {
                          setSize(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <p>Couleur</p>
                      <input
                        type="text"
                        placeholder="ex: vert"
                        value={color}
                        onChange={(event) => {
                          setColor(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <p>Etat</p>
                      <input
                        type="text"
                        placeholder="ex: correct"
                        value={condition}
                        onChange={(event) => {
                          setCondition(event.target.value);
                        }}
                      />
                    </div>
                    <div>
                      <p>Lieu</p>
                      <input
                        type="text"
                        placeholder="ex: Paris"
                        value={place}
                        onChange={(event) => {
                          setPlace(event.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <div className="form-price">
                    <div className="form-price-details">
                      <p>Prix</p>
                      <input
                        type="text"
                        placeholder="0,00€"
                        value={price}
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="ajouter">
                    <button type="submit">Ajouter</button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <Navigate to="/login" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Publish;
